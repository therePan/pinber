import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Icon } from 'antd-mobile'
import style from './style.less'

@connect(state => {
  return {
    user: state.user,
  }
})
class PostAddress extends React.Component {
  static propTypes = {
    user_info: PropTypes.object,
    // user: PropTypes.object,
  }
  state = {
    distance: '',
  }
  showDistance = (props) => {
    const position = props.user.position
    const storeInfo = props.user_info.storeInfo
    const BMap = window.BMap
    const map = new BMap.Map()
    const PointStore = new BMap.Point(storeInfo.longitude, storeInfo.latitude)
    const _this = this
    if (!position) {
      const geolocation = new BMap.Geolocation()
      geolocation.getCurrentPosition(function(r) {
        if (this.getStatus() === 0) {
          const PointMe = new BMap.Point(r.point.lng, r.point.lat)
          const distance = Number(map.getDistance(PointMe, PointStore).toFixed(2))
          return _this.setState({
            distance: distance < 1000 ? distance + 'm' : (Math.round(distance / 100) / 10).toFixed(1) + 'Km',
          })
        } else {
          console.log('failed' + this.getStatus())
        }
      }, {enableHighAccuracy: true})
    } else {
      const PointMe = new BMap.Point(position.longitude, position.latitude)
      const distance = Number(map.getDistance(PointMe, PointStore).toFixed(2)) // 获取两点距离,保留小数点后两位
      this.setState({
        distance: distance < 1000 ? distance + 'm' : (Math.round(distance / 100) / 10).toFixed(1) + 'Km',
      })
    }
  }
  componentDidMount() {
    this.showDistance(this.props)
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.user_info.storeInfo.longitude !== nextProps.user_info.storeInfo.longitude) {
      this.showDistance(nextProps)
    }
  }
  render() {
    // console.log(this.props.user_info.storeInfo)
    return (
      <div className={style.CardContent}>
        <div className={style.top}>
          工作地址<span className={style.position}>距我 <a>
            {this.state.distance
              ? this.state.distance
              : <span className={style.loding}><Icon size="xs" type="loading" /></span>}
          </a></span>
        </div>
        <ul className={style.content}>
          <li>{this.props.user_info.storeInfo.store_address}</li>
        </ul>
      </div>
    )
  }
}
export default PostAddress
