import React from 'react'
import PropTypes from 'prop-types'
import style from './style.less'

class DetailsJob extends React.Component {
  static propTypes = {
    job_info: PropTypes.object,
    user_info: PropTypes.object,
  }
  render() {
    // console.log(this.props)
    const labelList = this.props.user_info.benefit_label_list || {}
    return (
      <div className={style.CardContent}>
        <div className={style.top}>
          <div className={style.line01}>
            {this.props.job_info.job_name}&ensp;<span>(招聘人数：<a>{this.props.job_info.employ_num}</a>)</span>
          </div>
          <div className={style.line02}>{this.props.job_info.salary_range_str}</div>
        </div>
        <div className={style.content}>
          <div className={style.line03}>
            <span className={style.name}>年龄：<a>{this.props.job_info.age_range_str}</a></span>
            <span className={style.name}>经验：<a>{this.props.job_info.work_year_str}</a></span>
            <span className={style.name}>学历：<a>{this.props.job_info.degree_str}</a></span>
          </div>
          <div className={style.line04}>
            <span className={style.name}>福利：</span>
            <ul className={style.welfare}>
              {Object.keys(labelList).map((v) => {
                return <li key={v}>{labelList[v]}</li>
              })}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default DetailsJob
