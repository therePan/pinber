/**
 * Created by huangchao on 2017/7/11.
 */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Clipboard from 'clipboard'
import { getStoreDetaill, cancelColiectStore, addCollectStore, delStore } from '@actions/store_detail'
import BossTitle from '../../components/BossTitle'
import BossAddresss from '../../components/BossAddress'
import BossAbout from '../../components/BossAbout'
import BossJob from '../../components/BossJob'
import ShowPicture from '../../components/ShowPicture'
import style from './style.less'
import collect from '@static/stare.png'
import share from '@static/share.png'
import uncollect from '@static/uncollect.png'

import { Toast, NavBar, Modal } from 'antd-mobile'

@connect(state => {
  return {
    storeDetail: state.storeDetail,
    user: state.user,
  }
})
class StoreView extends React.Component {
  static propTypes = {
    match: PropTypes.object,
    dispatch: PropTypes.func,
    storeDetail: PropTypes.object,
    history: PropTypes.object,
    user: PropTypes.object,
  }
  constructor(props) {
    super(props)
    this.state = {
      shareLink: `https://pinber.veryeast.cn/api/share/boss/${this.props.match.params.store_id}`,
    }
  }
  showTitle = () => {
    return <BossTitle {...this.props.storeDetail} />
  }
  showAddress = () => {
    return <BossAddresss {...this.props.storeDetail.store_info} />
  }
  showAbout = () => {
    return <BossAbout {...this.props.storeDetail.store_info} />
  }
  showJob = () => {
    return <BossJob {...this.props.storeDetail.store_info} />
  }
  showPicture = () => {
    return <ShowPicture {...this.props.storeDetail.store_info} />
  }
  showBottom = () => {
    return <div className={style.bottom}>
      <div className={style.left} onClick={this.handelCollect}>
        <img className={style.stare}
          src={this.props.storeDetail.store_info.is_collect ? collect : uncollect} alt="logo" />
        <span>{this.props.storeDetail.store_info.is_collect ? '已收藏' : '收藏'}</span>
      </div>
      <div className={style.right} onClick={this.contactStore}>
        联系Ta
      </div>
    </div>
  }

  handelCollect = () => {
    if (this.props.storeDetail.store_info.is_collect) {
      this.props.dispatch(cancelColiectStore({ // 取消收藏
        relative_id: this.props.storeDetail.store_info.id,
        type: 2,
      }))
      .then(() => {
        Toast.info('取消收藏成功', 1)
      })
    } else {
      this.props.dispatch(addCollectStore({ // 添加收藏
        relative_id: this.props.storeDetail.store_info.id,
        type: 2,
      }))
      .then(() => {
        Toast.info('收藏成功', 1)
      })
    }
  }
  contactStore = () => {
    // this.props.history.push('/storeview/selpost')
    this.props.history.push({ pathname: '/storeview/selpost', state: { 'name': 'hahaha', 'age': '24' } })
  }
  shareBtn = () => {
    const shareImg = this.props.user.portrait_url
    if (navigator.userAgent.indexOf('UCBrowser') > -1 && window.ucbrowser) { // uc  浏览器
      try {
        const shareArgs = ['老板分享', '老板主页', this.state.shareLink, '', '', '\n@' + window.location.host, shareImg]
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
  gobalck = () => {
    this.props.dispatch(delStore())
    this.props.history.go(-1)
  }
  componentWillMount() {
    this.props.dispatch(getStoreDetaill({
      store_id: this.props.match.params.store_id,
    }))
  }

  componentDidMount() {
    this.clipboard = Clipboard.isSupported() && new Clipboard(this.refs.share, {
      text: () => this.state.shareLink,
    })
  }

  componentWillUnmount() {
    Clipboard.isSupported() && this.clipboard.destroy()
  }

  render() {
    console.log(this.props.storeDetail)
    return (
      <div className={style.store_view}>
        <NavBar
          className={style.navbar}
          mode="dark"
          onLeftClick={this.gobalck}
          rightContent={[
            <img ref="share" onClick={this.shareBtn} src={share} key="1" className={style.share_btn} />,
          ]}
        >
          老板主页
        </NavBar>
        {this.props.storeDetail.user_info ? this.showTitle() : null}
        {this.props.storeDetail.store_info ? this.showAddress() : null}
        {this.props.storeDetail.store_info ? this.showAbout() : null}
        {this.props.storeDetail.store_info ? this.showJob() : null}
        {this.props.storeDetail.store_info ? this.showPicture() : null}
        {this.props.storeDetail.store_info ? this.showBottom() : null}
      </div>
    )
  }
}

export default StoreView
