/**
 * Created by huangchao on 2017/7/11.
 */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Clipboard from 'clipboard'
import { getPostDetaill, cancelColiectPost, addColiectPost, delpost } from '@actions/post_detail'
import DetailsJob from '../../components/DetailsJob'
import PostAddress from '../../components/PostAddress'
import PostDesc from '../../components/PostDesc'
import LinkManCard from '../../components/LinkManCard'
import ShowPicture from '../../components/ShowPicture'
import { Toast, NavBar, Modal } from 'antd-mobile'

import style from './style.less'
import collect from '@static/stare.png'
import uncollect from '@static/uncollect.png'
import share from '@static/share.png'

@connect(state => {
  return {
    postDetail: state.postDetail,
    user: state.user,
  }
})
class PostView extends React.Component {
  static propTypes = {
    match: PropTypes.object,
    dispatch: PropTypes.func,
    postDetail: PropTypes.object,
    history: PropTypes.object,
    user: PropTypes.object,
  }
  constructor(props) {
    super(props)
    this.state = {
      shareLink: `https://pinber.veryeast.cn/api/share/job/${this.props.match.params.id}`,
    }
  }

  showTiltle = () => {
    return <DetailsJob key="1" {...this.props.postDetail} />
  }
  showPostAddress = () => {
    return <PostAddress key="2" {...this.props.postDetail} />
  }
  showPostDec = () => {
    return <PostDesc key="3" {...this.props.postDetail} />
  }
  LinkManCard = () => {
    return <LinkManCard key="4" {...this.props.postDetail} />
  }
  ShowPicture = () => {
    return <ShowPicture key="5" {...this.props.postDetail.user_info} />
  }
  showBottom = () => {
    return <div key="6" className={style.bottom}>
      <div className={style.left} onClick={this.handelCollect}>
        <img className={style.stare} src={this.props.postDetail.job_info.collect ? collect : uncollect} alt="logo" />
        <span>{this.props.postDetail.job_info.collect ? '已收藏' : '收藏'}</span>
      </div>
      <div className={style.right} onClick={this.contactStore}>
        直接谈工作
      </div>
    </div>
  }
  handelCollect = () => {
    if (this.props.postDetail.job_info.collect) { // 取消收藏
      this.props.dispatch(cancelColiectPost({
        relative_id: this.props.match.params.id,
        type: 1,
      }))
      .then(() => {
        Toast.info('取消收藏成功', 1)
      })
    } else { // 添加收藏
      this.props.dispatch(addColiectPost({
        relative_id: this.props.match.params.id,
        type: 1,
      }))
      .then(() => {
        Toast.info('收藏成功', 1)
      })
    }
  }
  contactStore = () => {
    const merchantId = this.props.postDetail.user_info.id // 商户id
    const jobId = this.props.match.params.id // 职位id
    const userName = this.props.postDetail.user_info.user_name
    this.props.history.push({pathname: `/chat/${merchantId}`, state: {id: jobId, userName: userName}})
    // console.log(merchantId, jobId)
  }
  shareBtn = () => {
    const shareImg = this.props.user.portrait_url
    if (navigator.userAgent.indexOf('UCBrowser') > -1 && window.ucbrowser) { // uc  浏览器
      try {
        const shareArgs = ['职位分享', '快来看看职位吧', this.state.shareLink, '', '', '\n@' + window.location.host, shareImg]
        if (window.ucweb) {
          return window.ucweb.startRequest('shell.page_share', shareArgs)
        } else if (window.ucbrowser) {
          return window.ucbrowser.web_share(...shareArgs)
        }
      } catch (err) {}
    }
    Modal.alert(
      Clipboard.isSupported() ? '链接已经复制到剪贴板' : '长按分享此链接',
      <p style={{wordWrap: 'break-word'}}>{this.state.shareLink}</p>, [
        { text: '确定', onPress: () => {}, style: 'default' },
      ])
  }
  componentWillMount() {
    // console.log(this.props.match.params)
    this.props.dispatch(getPostDetaill({
      job_id: this.props.match.params.id,
    }))
  }

  componentDidMount() {
    this.clipboard = Clipboard.isSupported() && new Clipboard(this.refs.share, {
      text: () => this.state.shareLink,
    })
  }

  componentWillUnmount() {
    Clipboard.isSupported() && this.clipboard.destroy()
    this.props.dispatch(delpost())
  }

  render() {
    // console.log(this.props.postDetail)
    return (
      <div className={style.post_view}>
        <NavBar
          className={style.navbar}
          mode="dark"
          onLeftClick={() => this.props.history.go(-1)}
          rightContent={[
            <img ref="share" onClick={this.shareBtn} src={share} key="1" className={style.share_btn} />,
          ]}
        >
          职位详情
        </NavBar>
        {this.props.postDetail.job_info && [
          this.showTiltle(),
          this.showPostAddress(),
          this.showPostDec(),
          this.LinkManCard(),
          this.ShowPicture(),
          this.showBottom(),
        ]}
      </div>
    )
  }
}

export default PostView
