import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Clipboard from 'clipboard'
import { uploadHead } from '@actions/user'
import style from './style.less'
import SvgIcon from '../../components/SvgIcon'
import HeadPortrait from 'headportrait'
import userDefaultHead from '@static/user_default_head.png'
import iconLiveboss from '@static/icon_liveboss.svg'
import iconLivejob from '@static/icon_livejob.svg'
import iconResume from '@static/icon_resume.svg'
import iconFeedback from '@static/icon_feedback.svg'
import iconShare from '@static/icon_share.svg'
import iconSetting from '@static/icon_setting.svg'
import qq from '@static/qq.png'
import pengyouquan from '@static/pengyouquan.png'
import weixin from '@static/weixin.png'
import weibo from '@static/weibo.png'
import qqkongjian from '@static/qqkongjian.png'
import { List, Toast, ActionSheet, Modal } from 'antd-mobile'

const shareList = [
  { icon: <img src={weixin} alt="icon" />, title: '发送给朋友' },
  { icon: <img src={pengyouquan} alt="icon" />, title: '朋友圈' },
  { icon: <img src={qq} alt="icon" />, title: 'QQ' },
  { icon: <img src={qqkongjian} alt="icon" />, title: 'QQ空间' },
  { icon: <img src={weibo} alt="icon" />, title: '微博' },
]

@connect(state => {
  return {
    user: state.user,
    job: state.job,
  }
})
class TabsUser extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func,
    history: PropTypes.object,
    user: PropTypes.object,
  }

  handleHeadChange = (base64, blob) => {
    Toast.info('正在上传')
    this.props.dispatch(uploadHead({
      is_save: 1,
      image: blob,
    })).then(() => {
      Toast.info('上传完成')
    })
  }

  shareBtn = () => { // 弹窗分享
    const shareLink = `https://pinber.veryeast.cn/api/share/resume/${this.props.user.resume_id}`
    const shareImg = this.props.user.portrait_url
    if (navigator.userAgent.indexOf('UCBrowser') > -1 && window.ucbrowser) { // uc  浏览器
      const shareArgs = ['简历分享', '快来看看我的简历吧', shareLink, '', '', '\n@' + window.location.host, shareImg]
      return window.ucbrowser.web_share(...shareArgs)
    }
    Modal.alert(
      Clipboard.isSupported() ? '链接已经复制到剪贴板' : '长按分享此链接',
      <p style={{wordWrap: 'break-word'}}>{shareLink}</p>, [
        { text: '确定', onPress: () => {}, style: 'default' },
      ])
  }

  showShareActionSheet = () => { // ant-design分享
    const icons = [...shareList]
    ActionSheet.showShareActionSheetWithOptions({
      options: icons,
      message: '简历分享',
      className: 'my-action-sheet',
    },
    (buttonIndex) => {
      console.log(buttonIndex)
    })
  }

  componentDidMount() {
    this.clipboard = Clipboard.isSupported() && new Clipboard(this.refs.share, {
      text: () => `https://pinber.veryeast.cn/api/share/resume/${this.props.user.resume_id}`,
    })
  }

  componentWillUnmount() {
    Clipboard.isSupported() && this.clipboard.destroy()
  }

  render() {
    const { push } = this.props.history
    return (
      <div>
        <div className={style.wrap}>
          <div
            className={style.headBox}
            style={{backgroundImage: `url(${this.props.user.portrait_url || userDefaultHead})`}}>
            <HeadPortrait
              className={style.headPro}
              onChange={this.handleHeadChange} />
          </div>
          <div className={style.name}>{this.props.user.user_name}</div>
        </div>
        <div className={style.bossPost}>
          <Link className={style.nav} to="/user/collectstore">
            <SvgIcon icon={iconLiveboss} className={style.icon2} color="#FBB13B" />
            <p>收藏的老板: <span>{this.props.user.collect_store_count || 0}</span></p>
          </Link>
          <Link className={style.nav} to="/user/collectpost">
            <SvgIcon icon={iconLivejob} className={style.icon2} color="#65CDEB" />
            <p>收藏的职位：<span>{this.props.user.collect_job_count || 0}</span></p>
          </Link>
        </div>
        <List className={style.list}>
          <List.Item
            arrow="horizontal"
            thumb={<SvgIcon icon={iconResume} className={style.icon} color="#FBB13B" />}
            extra={`完善度:${this.props.user.resume_percent || 0}%`}
            onClick={() => push('/user/resume')}>
            简历
          </List.Item>
          <div ref="share">
            <List.Item
              arrow="horizontal"
              thumb={<SvgIcon icon={iconShare} className={style.icon} color="#69B1F3" />}
              onClick={this.shareBtn}>
              分享简历
            </List.Item>
          </div>
          <List.Item
            arrow="horizontal"
            thumb={<SvgIcon icon={iconFeedback} className={style.icon} color="#FF7179" />}
            onClick={() => push('/user/feedback')}>
            反馈
          </List.Item>
          <List.Item
            arrow="horizontal"
            thumb={<SvgIcon icon={iconSetting} className={style.icon} color="#FF8D2B" />}
            onClick={() => push('/user/seeting')}>
            设置
          </List.Item>
        </List>
      </div>
    )
  }
}

export default TabsUser
