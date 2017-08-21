import React from 'react'
import PropTypes from 'prop-types'
import { userLogout } from '@helper/auth'
import { List, WhiteSpace, WingBlank, Button, Modal, NavBar } from 'antd-mobile'

class Seeting extends React.Component {
  static propTypes = {
    history: PropTypes.object,
    location: PropTypes.object,
  }
  static contextTypes = {
    router: PropTypes.shape({
      history: PropTypes.object.isRequired,
    }),
  }

  loginOut = () => {
    userLogout()
      .then(json => {
        // window.location.reload()
        this.context.router.history.replace('/login', {
          location: this.props.location,
        })
      })
  }
  render() {
    const { push } = this.props.history
    return (
      <div>
        <NavBar
          mode="dark"
          onLeftClick={() => this.props.history.go(-1)}>
          设置
        </NavBar>
        <List>
          <List.Item
            arrow="empty"
            onClick={() => push('/user/seeting/changemobile')}>
            更换手机号
          </List.Item>
        </List>
        <WhiteSpace size="lg" />
        <List>
          <List.Item
            arrow="empty"
            onClick={() => push('/user/seeting/aboutous')}>
            关于我们
          </List.Item>
        </List>
        <WhiteSpace size="lg" />
        <WingBlank size="md">
          <Button type="primary" onClick={() => {
            Modal.alert(
              '退出', '确定退出吗？',
              [
              { text: '取消', onPress: () => console.log('用户取消') },
              { text: '确定', onPress: () => { this.loginOut() } },
              ])
          }
          } >退出登录</Button>
        </WingBlank>
      </div>
    )
  }
}

export default Seeting
