import React from 'react'
import PropTypes from 'prop-types'
import style from './style.less'
import moment from 'moment'

class JobInterviewCard extends React.Component {
  static propTypes = {
    data: PropTypes.object,
    show: PropTypes.bool,
    onChange: PropTypes.func,
  }

  render() {
    const { data } = this.props

    return (
      <div className={style.cardContent}>
        <div className={style.interviewList}>
          <h3>{data.user_name}</h3>
          <ul>
            <li>应聘职位：<span>{data.user_job_name}</span></li>
            <li>面试时间：<span className={style.time}>
              {moment(data.time).format('YYYY-MM-DD')}</span>
            </li>
            <li>店铺名称：<span>{data.store_name}</span></li>
            <li>面试地点：<span>{data.address}</span></li>
          </ul>
        </div>
        {this.props.show && (
          <div className={style.bottom}>
            <span onClick={() =>
              this.props.onChange(data.id, 'agree')}>
              我要去面试</span>
            <span onClick={() =>
              this.props.onChange(data.id, 'refuse')}>
              委婉拒绝</span>
          </div>
        )}
      </div>
    )
  }
}

export default JobInterviewCard
