import React from 'react'
import PropTypes from 'prop-types'
import style from './style.less'
import logo from '@static/180.png'
import { WingBlank, NavBar } from 'antd-mobile'

class AboutOus extends React.Component {
  static propTypes = {
    history: PropTypes.object,
  }
  state = {
    version: null,
  }
  componentWillMount() {
    const version = JSON.parse(localStorage['pinber:config']).version
    this.setState({
      version: version,
    })
  }
  render() { // componentWillMount
    return (
      <div>
        <NavBar
          mode="dark"
          className={style.navbar}
          onLeftClick={() => this.props.history.go(-1)}>
          关于我们
        </NavBar>
        <div className={style.aboutous_wrap}>
          <WingBlank size="lg">
            <div>
              <img src={logo} alt="logo" />
              <p>当前版本{this.state.version}</p>
            </div>
            <div className={style.des}>
              聘呗是旅游酒店业专业的招聘网站——最佳东方旗下，
              针对一线员工求职中遇到的信息不匹配，求职较困难，
              公司资质存疑等问题，设计出的一款针对性的需求解决产品。
              在聘呗中，我们专注服务业的精品店铺的招聘，只为你提供最品质的招聘求职服务，
              所有的职位和人才都是你梦寐以求的，并且让你更快速，准确，便捷的完成自己的招聘需求。
              只需填写简单的信息，无需繁琐的搜索，就会看到合适你的职位/人才。
              老板更会主动与你取得联系，让愉快的合作马上开始。<br />
              在【聘呗】里你将会体验到的功能有： <br />
              【职位管理】发布职位、查看简历、发送面试通知，轻松搞定 <br />
              【意向职位】填写简历，选择意向职位，查看合适企业 <br />
              【发现人才】海量简历库便捷查找人才，轻松找到你要的人 <br />
              匹配企业】系统智能推送合适求职者的企业，加快求职效率，
              找工作更简单 <br />
              【消息对话】随时随地与求职者交流，让面试更有效率 <br />
              【账号管理】账号在手，随时管理，安全更有保障
            </div>
          </WingBlank>
        </div>
      </div>
    )
  }
}

export default AboutOus
