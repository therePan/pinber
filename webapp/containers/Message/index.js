// 清酒稻香
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { messageList } from '@actions/chat'
import SvgIcon from '../../components/SvgIcon'
import iconHeadset from '@static/icon_headset.svg'
import style from './style.less'
import { NavBar } from 'antd-mobile'

@connect(state => {
  return {
    user: state.user,
    chat: state.chat,
  }
})
class TabsChat extends React.Component {
  static propTypes = {
    history: PropTypes.object,
    dispatch: PropTypes.func,
    chat: PropTypes.object,
  }

  componentWillMount() {
    this.props.dispatch(messageList({
      type: 1, // 1：个人小秘书
    }))
  }

  componentDidUpdate() {
    document.body.scrollTop = 9e12
  }

  render() {
    const list = this.props.chat.message_list
    const index = this.props.chat.index_1

    return (
      <div>
        <div className={style.navbar}>
          <NavBar
            mode="dark"
            onLeftClick={() => this.props.history.go(-1)}>
            小秘书
          </NavBar>
        </div>

        <ul className={style.list}>
          {index && index.map(key => (
            <li key={key}>
              <SvgIcon icon={iconHeadset} className={style.avatar} />
              <div className={style.text} dangerouslySetInnerHTML={{
                __html: list[key].content.replace('https://pinber.cn?redirect=to_myresume', '/user/resume'),
              }} />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default TabsChat
