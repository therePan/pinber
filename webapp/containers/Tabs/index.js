import React from 'react'
import PropTypes from 'prop-types'
import theme from '../../theme'
import TabsFind from '../TabsFind'
import TabsChat from '../TabsChat'
import TabsUser from '../TabsUser'
import style from './style.less'
import SvgIcon from '../../components/SvgIcon'
import iconFind from '@static/icon_find.svg'
import iconChat from '@static/icon_chat.svg'
import iconUser from '@static/icon_user.svg'
import { TabBar } from 'antd-mobile'

class Tabs extends React.Component {
  static propTypes = {
    match: PropTypes.object,
    history: PropTypes.object,
  }

  handleTabBarSelect = (key) => {
    // const { history } = this.props
    // localStorage.setItem('pinber:history', `/tabs/${key}`)
    // history.replace(`/tabs/${key}`, {
    //   initialized: true,
    // })
    this.props.history.replace(`/tabs/${key}`)
  }

  render() {
    return (
      <div style={{marginBottom: '1rem'}}>
        <TabBar tintColor={theme['brand-primary']}>
          <TabBar.Item key="find" title="发现" onPress={() => this.handleTabBarSelect('find')}
            icon={<div><SvgIcon icon={iconFind} className={style.icon} /></div>}
            selectedIcon={<div><SvgIcon icon={iconFind} className={style.icon} fill={theme['brand-primary']} /></div>}
            selected={this.props.match.params.tab === 'find'}>
            <TabsFind {...this.props} />
          </TabBar.Item>
          <TabBar.Item key="chat" title="聊工作" onPress={() => this.handleTabBarSelect('chat')}
            icon={<div><SvgIcon icon={iconChat} className={style.icon} /></div>}
            selectedIcon={<div><SvgIcon icon={iconChat} className={style.icon} color={theme['brand-primary']} /></div>}
            selected={this.props.match.params.tab === 'chat'}>
            <TabsChat {...this.props} />
          </TabBar.Item>
          <TabBar.Item key="user" title="我的" onPress={() => this.handleTabBarSelect('user')}
            icon={<div><SvgIcon icon={iconUser} className={style.icon} /></div>}
            selectedIcon={<div><SvgIcon icon={iconUser} className={style.icon} color={theme['brand-primary']} /></div>}
            selected={this.props.match.params.tab === 'user'}>
            <TabsUser {...this.props} />
          </TabBar.Item>
        </TabBar>
      </div>
    )
  }
}
export default Tabs
