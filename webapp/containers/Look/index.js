// 清酒稻香
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { messageList } from '@actions/chat'
import BossCard from '../../components/BossCard'
import style from './style.less'
import { NavBar } from 'antd-mobile'

@connect(state => {
  return {
    position: state.user.position,
    chat: state.chat,
  }
})
class TabsChat extends React.Component {
  static propTypes = {
    history: PropTypes.object,
    dispatch: PropTypes.func,
    position: PropTypes.object,
    chat: PropTypes.object,
  }

  componentWillMount() {
    this.props.dispatch(messageList({
      type: 3, // 3：谁看过你简历的消息
    }))
  }

  render() {
    const list = this.props.chat.message_list
    const index = this.props.chat.index_3

    return (
      <div>
        <div className={style.navbar}>
          <NavBar
            mode="dark"
            onLeftClick={() => this.props.history.go(-1)}>
            看过我的老板
          </NavBar>
        </div>

        <div className={style.list}>
          {index && index.map(key => (
            <BossCard key={key} data={list[key]} position={this.props.position} />
          ))}
        </div>
      </div>
    )
  }
}

export default TabsChat
