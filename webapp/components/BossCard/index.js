import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import SvgIcon from '../../components/SvgIcon'
import iconEye2 from '@static/icon_eye2.svg'
import userDefaultHead from '@static/user_default_head.png'
import style from './style.less'
import moment from 'moment'
import { Icon } from 'antd-mobile'

class BossCard extends React.Component {
  static propTypes = {
    data: PropTypes.object,
    position: PropTypes.object,
  }
  render() {
    const { data, position } = this.props
    const BMap = window.BMap
    let distance
    if (position) {
      const map = new BMap.Map()
      const PointMe = position.point
      const PointStore = new BMap.Point(data.user_info.longitude, data.user_info.latitude)
      distance = Number(map.getDistance(PointMe, PointStore).toFixed(2))
      distance = distance < 1000 ? distance + 'm' : (Math.round(distance / 100) / 10).toFixed(1) + 'Km'
    }

    return (
      <Link className={style.cardContent} to={`/storeview/00/${data.user_info.id}`}>
        <header>
          <div className={style.leftCon}>
            <span style={{color: '#ccf0be'}}>
              <SvgIcon icon={iconEye2} className={style.icon} />
            </span>
            <span>{data.user_info.user_name}</span>
            <span style={{color: '#999'}}>&ensp;查看了您</span>
          </div>
          <div className={style.rightCon}>{moment(data.created_time).format('YYYY-MM-DD')}</div>
        </header>
        <div className={style.middleCon}>
          <span className={style.head}>
            <img src={data.user_info.mini_image_url || userDefaultHead} />
          </span>
          <div className={style.jobImformation}>
            <span className={style.company}>{data.user_info.store_name}</span>
            <span className={style.jobName}>在招&nbsp;<a>{data.user_info.online_job_names}</a></span>
          </div>
          <span className={style.distant}>距离指针：<a>{distance || <Icon size="xs" type="loading" />}</a></span>
        </div>
      </Link>
    )
  }
}

export default BossCard
