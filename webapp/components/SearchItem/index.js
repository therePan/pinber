/**
 * Created by huangchao on 2017/7/13.
 */
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Icon } from 'antd-mobile'
import StoreList from '../../components/CollectStoreList'
import userDefaultHead from '@static/user_default_head.png'
import style from './style.less'

class SearchItem extends React.Component {
  static propTypes = {
    mini_image_url: PropTypes.string,
    job_name: PropTypes.string,
    user_name: PropTypes.string,
    user_job_name: PropTypes.string,
    salary_range_str: PropTypes.string,
    business_area_name: PropTypes.string,
    store_name: PropTypes.string,
    job_id: PropTypes.string,
    // item: PropTypes.number,
    // longitude: PropTypes.string,
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
        _this.setState({
          distance: distance < 1000 ? distance + 'm' : (Math.round(distance / 100) / 10).toFixed(1) + 'Km',
        })
      } else {
        console.log('failed' + this.getStatus())
      }
    }, {enableHighAccuracy: true})
  }
  showStoreList = () => {
    return <StoreList {...this.props} />
  }
  showJobList = () => {
    return <Link className={style.nav} to={`/postview/${this.props.job_id}`}>
      <div className={style.search_box}>
        <div className={style.top}>
          <div className={style.left}>
            <div className={style.name}>{this.props.job_name}</div>
            <div className={style.salary}>{this.props.salary_range_str}</div>
            <div className={style.company_name}>{this.props.store_name}</div>
          </div>
          <div className={style.right}>
            <p>{this.state.distance ? this.state.distance : <Icon size="xs" type="loading" />}</p>
            <p>{this.props.business_area_name}</p>
          </div>
        </div>
        <div className={style.bottom}>
          <div className={style.bottom_left}>
            <img className={style.user_img} src={this.props.mini_image_url || userDefaultHead} alt="头像" />
            <span>{this.props.user_name}／{this.props.user_job_name}</span>
          </div>
          <div className={style.chat_btn}>
            聊工作
          </div>
        </div>
      </div>
    </Link>
  }
  componentWillMount() {
    // console.log(this.props.item)
    this.showDistance(this.props)
  }
  render() {
    return (
      <div className={style.search_item}>
        {this.props.hasOwnProperty('store_id') ? this.showStoreList() : this.showJobList()}
      </div>
    )
  }
}

export default SearchItem
