/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'
import style from './style.less'
import iconInput from '@static/icon_input.svg'
import iconFace from '@static/icon_face.svg'
import iconPlus from '@static/icon_plus.svg'
import iconSend from '@static/icon_send.svg'
import iconMap from '@static/icon_map.svg'
import iconPhoto from '@static/icon_photo.svg'
import iconCamera from '@static/icon_camera.svg'
import SvgIcon from '../../components/SvgIcon'
import HeadPortrait from 'headportrait'
import { InputItem, Toast } from 'antd-mobile'

class SendMsg extends React.Component {
  static propTypes = {
    onSendMsg: PropTypes.func,
  }
  constructor(props) {
    super(props)
    this.state = {
      hasError: false,
      value: '',
      bottom: false,
      type: 0,
    }
  }
  onChange = (value,type=false) => {
    if (value.replace(/^\s*|\s*$/g, '').length < 120) {
      this.setState({
        hasError: true,
      })
      this.setState({
        value: type ? this.state.value + value : value,
      })
    } else {
      this.setState({
        hasError: false,
      })
    }
  }
  _onSendMsg = () => {
    const content = this.state.value
    this.props.onSendMsg(content)
    this.setState({
      value: '',
      bottom: false,
      type: 0,
    })
  }
  // 屏幕底部
  _scrollTop = () => {
    this.setState({ type: 1 })
    var msgflow = document.getElementsByTagName('body')[0]
    setTimeout(() => {
      msgflow.scrollTop = msgflow.scrollHeight
    }, 300)
  }
  handleHeadChange = (base64, blob) => {
    this.props.uploadFile(blob);
    this.setState({ type: 0 })
    Toast.info('图片发送成功')
  }
  render() {
    return (
      <div className={style.sendbox}>
        <div className={style.sms}>
          <SvgIcon icon= { iconInput } className={style.icon} />
          <InputItem
            placeholder="试试和T聊聊吧~"
            onChange={this.onChange}
            onFocus={()=>{this._scrollTop()}}
            onBlur={()=>{this.setState({type:this.state.type==1 ? 1 : this.state.type})}}
            name="content"
            ref="content"
            value={this.state.value}
            className={style.input}>
          </InputItem>
          <SvgIcon icon={iconFace} className={style.icon} onClick={() => {this.setState({bottom:this.state.type==2 ? true : !this.state.bottom,type:2})}} />
          {
            this.state.type==1 ? <SvgIcon icon={iconSend} className={style.icon} onClick={() => {this._onSendMsg()}} /> :
            <SvgIcon icon={iconPlus} className={style.icon} onClick={() => {this.setState({bottom:!this.state.bottom,type:3})}} />
          }
        </div>

          <div className={this.state.type<=1  ? style.bottom : style.bottom +' '+ style.show}>
              {
                this.state.type==2 ?
                <ul className={style.emotion}>
                  {
                    this.props.emotions.map((v,index)=>{
                      return (
                        <li key={index} onClick={() => this.onChange(v.text,true)}>
                          <img src={v.pic} />
                        </li>
                      )
                    })
                  }
                  <li className={style.sendBtn} onClick={() => {this._onSendMsg()}}>发送</li>
                </ul>
                :
                this.state.type==3 ?
                <ul className={style.operate}>
                  <li>
                    <SvgIcon icon={iconPhoto} className={style.icon_operate +' '+ style.photo} />
                    <HeadPortrait
                      className={style.upfile}
                      onChange={this.handleHeadChange}
                      side={1024} />
                    <p>照片</p>
                  </li>
                  {
                    /*
                    <li>
                      <SvgIcon icon={iconCamera} className={style.icon_operate} />
                      <p>拍摄</p>
                    </li>
                    <li>
                      <SvgIcon icon={iconMap} className={style.icon_operate} />
                      <p>位置</p>
                    </li>
                     */
                  }
                </ul>
                :
                null
              }
          </div>
      </div>
    )
  }
}
export default SendMsg
