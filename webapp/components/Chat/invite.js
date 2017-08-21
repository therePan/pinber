import React from 'react'
import PropTypes from 'prop-types'
import style from './style.less'

class Invite extends React.Component {
  static propTypes = {
    data: PropTypes.string,
    interviewDeal: PropTypes.func,
  }
  constructor(props) {
    super(props)
    this.resume = JSON.parse(this.props.data.data)
  }
  render() {
    return (
      <div>
        {this.resume &&
        <div className={style.invite}>
          <div className={style.resume}>
            <p>
              <span>应聘职位：</span>
              {this.resume.job_name}
            </p>
            <p>
              <span>应聘时间：</span>
              <span className={style.time}>{this.resume.interview_time}</span>
            </p>
            <p>
              <span>店铺名称：</span>
              {this.resume.store_name}
            </p>
            <p>
              <span>面试地点：</span>
              {this.resume.store_address}
            </p>
            <p>
              <span>联&ensp;系&ensp;人：</span>
              {this.resume.contacts_name}
            </p>
            <p>
              <span>联系电话：</span>
              {this.resume.contacts_phone}
            </p>
          </div>
          <ul className={style.operation}>
            <li onClick={() => { this.props.interviewDeal('agree', this.resume.interview_id) }}>我要去面试</li>
            <li onClick={() => { this.props.interviewDeal('refuse', this.resume.interview_id) }}>委婉拒绝</li>
          </ul>
        </div>
        }
      </div>
    )
  }
}

export default Invite
