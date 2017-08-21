import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import style from './style.less'
import userDefaultHead from '@static/user_default_head.png'

class LinkManCard extends React.Component {
  static propTypes = {
    user_info: PropTypes.object,
    job_info: PropTypes.object,
    user_id: PropTypes.string,
    // history: PropTypes.object,
  }
  showPicture = () => {
    return /\.(jpe?g|png|gif|jpg)$/gi.test(String(this.props.user_info.portrait_url))
      ? this.props.user_info.portrait_url
      : userDefaultHead
  }
  render() {
    // console.log(this.props)
    return (
      <Link className={style.nav}
        to={`/storeview/${this.props.user_info.storeInfo.user_id}/${this.props.user_info.storeInfo.id}`}
      >
        <div className={style.CardContent}>
          <div className={style.head}>
            <img src={this.showPicture()} />
          </div>
          <div className={style.rightCon}>
            <span className={style.name}>
              {this.props.user_info.user_name} / {this.props.user_info.storeInfo.user_job_name}
            </span>
            <span className={style.address}>店址：{this.props.user_info.storeInfo.store_address}</span>
            <span className={style.needNum}>招聘人数：{this.props.job_info.employ_num}</span>
          </div>
        </div>
      </Link>
    )
  }
}
export default LinkManCard
