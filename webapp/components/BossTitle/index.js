import React from 'react'
import PropTypes from 'prop-types'
import style from './style.less'
import userDefaultHead from '@static/user_default_head.png'
class BossTitle extends React.Component {
  static propTypes = {
    // history: PropTypes.object,
    user_info: PropTypes.object,
    city_name: PropTypes.string,
    user_name: PropTypes.string,
    portrait_url: PropTypes.string,
    age: PropTypes.number,
    store_info: PropTypes.object,
  }
  showPicture = () => {
    return /\.(jpe?g|png|gif|jpg)$/gi.test(String(this.props.user_info.portrait_url))
      ? this.props.user_info.portrait_url
      : userDefaultHead
  }
  render() {
    return (
      <div className={style.bosstitle_wap}>
        <div style={{backgroundImage: `url(${this.showPicture()
        })`}}
          className={style.head_img}
        />
        <div className={style.name}>{this.props.user_info.user_name}</div>
        <div className={style.jobname}>{this.props.store_info.user_job_name}／{this.props.store_info.store_name}</div>
        <div className={style.age_job_sel}>
          <div className={style.age}>{this.props.user_info.age}岁</div>
          <span />
          <div className={style.job}>{this.props.store_info.industry_str}</div>
          <span />
          <div className={style.sel}>{this.props.store_info.by_collect_count}人收藏</div>
        </div>
        <div className={style.hometown}>家乡·{this.props.user_info.city_name}</div>
        <div className={style.font}>{this.props.store_info.store_desc || <p className={style.no_desc}>暂无介绍</p>}</div>
      </div>
    )
  }
}

export default BossTitle
