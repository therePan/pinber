/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'
import webimhandler from '../../components/Chat/webim_handler'
import { connect } from 'react-redux'
import { getGenerateCard } from '@actions/chat'
import { Link } from 'react-router-dom'
import style from './style.less'
import iconTel from '@static/icon_tel.svg'
import SvgIcon from '../../components/SvgIcon'
import { NavBar } from 'antd-mobile'
import Message from '../../components/Chat/message'

@connect(state => {
  return {
    jobs: state.chat.jobs,
    user: state.user,
  }
})

class Chat extends React.Component {
  static propTypes = {
    match: PropTypes.object,
    history: PropTypes.object,
    location: PropTypes.object,
    dispatch: PropTypes.func,
    jobs: PropTypes.array,
    user: PropTypes.object,
  }
  constructor(props) {
    super(props)
    this.id = this.props.match.params.id
    this.job_id = ''
    this.bossName = ''
    this.time = Math.floor(Math.round(new Date().getTime() / 1000))
    const userInfo = JSON.parse(localStorage['pinber:user'] || '{}')
    this.userInfo = {
      nickName: this.props.user.user_name,
      identifier: userInfo.user_id + '&' + userInfo.user_type,
      userSig: userInfo.user_sign,
      userId: userInfo.user_id,
    }

    if (this.props.location.state && this.props.location.state.hasOwnProperty('id')) {
      this.bossName = this.props.location.state.userName
      this.job_id = this.props.location.state.id
    }
    if (this.props.location.state && this.props.location.state.hasOwnProperty('userName')) {
      this.bossName = this.props.location.state.userName
    }
    if (this.props.location.state && this.props.location.state.hasOwnProperty('time')) {
      this.time = this.props.location.state.time
    }
  }
  componentWillMount() {
    this.props.dispatch(getGenerateCard({
      person_id: this.userInfo.userId,
      merchant_id: this.id,
      job_id: this.job_id,
    }))
  }

  render() {
    const { jobs } = this.props
    return (
      <div>
        {jobs && jobs.job_card && jobs.resume_card &&
        <div>
          <div className={style.navbar}>
            <NavBar
              mode="dark"
              // rightContent={<span onClick={() => {}}>举报</span>}
              onLeftClick={() => this.props.history.go(-1)}>
              {this.bossName}
            </NavBar>
          </div>
          <div className={style.chattitle}>
            <p>{webimhandler.formatTimeStamp(this.time)}</p>
            <p className={style.tip}>您正在和{jobs.job_card.store_name}的{this.bossName}沟通以下职位~</p>
          </div>
          <div className={style.jobs}>
            <Link to={`/postview/${jobs.job_card.id}`}>
              <div className={style.info}>
                <div className={style.title}>
                  <h3>{jobs.job_card.job_name}</h3>
                  <i>{jobs.job_card.salary_range_str}</i>
                </div>
                <p>{jobs.job_card.store_name}</p>
              </div>
            </Link>
            <div className={style.tel}>
              <a href={'tel:' + jobs.resume_card.person_phone}>
                <SvgIcon icon={iconTel} className={style.icon} />
                拨打电话
              </a>
            </div>
          </div>
        </div>
        }
        <Message chatId={this.id} userInfo={this.userInfo} />
      </div>
    )
  }
}

export default Chat
