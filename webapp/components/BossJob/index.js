import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import style from './style.less'
import jiantou from '@static/c_right.png'

class BossJob extends React.Component {
  static propTypes = {
    // history: PropTypes.object,
    job_list: PropTypes.array,
  }
  render() {
    // console.log(this.props.job_list)
    return (
      <div className={style.boss_job_wrap}>
        <div className={style.title}>发布职位（{this.props.job_list.length}）</div>
        {this.props.job_list.map((v, k) => (
          <Link key={k} className={style.nav} to={`/postview/${v.id}`}>
            <div className={style.item}>
              <div className={style.item_left}>
                <div className={style.name}>{v.job_name}</div>
                <div className={style.slary}>{v.salary_range_str}</div>
                <div className={style.other}>{v.degree_str}／{v.work_year_str}／{v.age_range_str}</div>
              </div>
              <div>
                <img src={jiantou} alt="右方" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    )
  }
}
export default BossJob
