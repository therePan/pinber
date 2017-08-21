import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Icon } from 'antd-mobile'
import userDefaultHead from '@static/user_default_head.png'
// import { Link } from 'react-router-dom'
import style from './style.less'

class JobCard extends React.Component {
  static propTypes = {
    job_name: PropTypes.string,
    user_name: PropTypes.string,
    user_job_name: PropTypes.string,
    salary_range: PropTypes.string,
    store_name: PropTypes.string,
    photo_list: PropTypes.array,
    id: PropTypes.string,
    business_areaname: PropTypes.string,
    mini_image_url: PropTypes.string,
    longitude: PropTypes.string,
  }
  state = {
    distance: '',
  }

  showDistance = (props) => {
    const BMap = window.BMap
    const map = new BMap.Map()
    const _this = this
    const geolocation = new BMap.Geolocation()
    geolocation.getCurrentPosition(function(r) {
      if (this.getStatus() === 0) {
        const PointMe = new BMap.Point(r.point.lng, r.point.lat)
        const PointStore = new BMap.Point(props.longitude, props.latitude)
        const distance = Number(map.getDistance(PointMe, PointStore).toFixed(2)) // 获取两点距离,保留小数点后两位
        _this.unmounted || _this.setState({
          distance: distance < 1000 ? distance + 'm' : (Math.round(distance / 100) / 10).toFixed(1) + 'Km',
        })
      } else {
      }
    }, {enableHighAccuracy: true})
  }
  showPicture = () => {
    return /\.(jpe?g|png|gif|jpg)$/gi.test(String(this.props.mini_image_url))
      ? this.props.mini_image_url
      : userDefaultHead
  }
  componentWillMount() {
    this.showDistance(this.props)
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.longitude !== this.props.longitude) {
      this.showDistance(nextProps)
    }
  }

  componentWillUnmount() {
    this.unmounted = true
  }

  render() {
    const salary = JSON.parse(localStorage['pinber:config']).salary
    ? JSON.parse(localStorage['pinber:config']).salary[this.props.salary_range]
    : ''
    return (
      <div className={style.cardContent}>
        <Link className={style.nav} to={`/postview/${this.props.id}`}>
          <div className={style.top}>
            <div className={style.leftIcon}>
              <span className={style.jobName}>{ this.props.job_name }</span>
              <span className={style.salary}>{ salary }</span>
              <span className={style.hotelName}>{ this.props.store_name }</span>
            </div>
            <div className={style.rightContent}>
              <span className={style.distant}>
                距离指针：
                <span>{this.state.distance ? this.state.distance : <Icon size="xs" type="loading" />}</span>
              </span>
              <span className={style.distant}>{ this.props.business_areaname }</span>
            </div>
          </div>
          <div className={style.photoContent}>
            {this.props.photo_list && this.props.photo_list.length
              ? <ul>{this.props.photo_list.map((elem, index) => (
                <li className={style.images} key={index}>
                  <img src={elem.thumb_url} />
                </li>
              ))}</ul> : null
            }
          </div>
          <div className={style.linkman}>
            <span className={style.linkmanHead}>
              <img src={this.showPicture()} />
            </span>
            <span className={style.linkIntroduce}>{this.props.user_name}/{this.props.user_job_name}</span>
            <span className={style.tlakBtn}>聊工作</span>
          </div>
        </Link>
      </div>
    )
  }
}
export default JobCard
