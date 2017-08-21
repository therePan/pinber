import React from 'react'
import PropTypes from 'prop-types'
import style from './style.less'
class BossAddresss extends React.Component {
  static propTypes = {
    // history: PropTypes.object,
    store_address: PropTypes.string,
    style: PropTypes.string,
  }
  showMap = (props) => {
    // 百度地图API功能
    const longitude = props.longitude
    const latitude = props.latitude
    const BMap = window.BMap
    const map = new BMap.Map('allmap') // 创建Map实例
    const point = new BMap.Point(longitude, latitude)
    const marker = new BMap.Marker(point)  // 创建标注
    map.centerAndZoom(point, 15) // 初始化地图,设置中心点坐标和地图级别
    map.addControl(new BMap.MapTypeControl()) // 添加地图类型控件
    map.setCurrentCity('') // 设置地图显示的城市 此项是必须设置的
    map.enableScrollWheelZoom(true) // 开启鼠标滚轮缩放
    map.addOverlay(marker)
    marker.setAnimation('BMAP_ANIMATION_BOUNCE') // 跳动的动画
  }
  componentDidMount() {
    this.showMap(this.props)
  }
  componentWillReceiveProps(nextProps) {
    this.showMap(nextProps)
  }
  render() {
    // console.log(this.props)
    return (
      <div className={this.props.style ? style.chat_address_map : style.boss_address_wrap}>
        <div className={style.title}>工作地址</div>
        <div className={style.address}>{this.props.store_address}</div>
        <div id="allmap" className={this.props.style ? this.props.style : style.map}>
          {/* { `纬度longitude:${longitude}` ,`经度latitude:${latitude}` } */}
        </div>
      </div>
    )
  }
}

export default BossAddresss
