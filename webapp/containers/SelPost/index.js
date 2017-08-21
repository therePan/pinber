/**
 * Created by huangchao on 2017/7/20.
 */
/**
 * Created by huangchao on 2017/7/11.
 */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { NavBar } from 'antd-mobile'
import style from './style.less'
import jiantou from '@static/c_right.png'

@connect(state => {
  return {
    storeDetail: state.storeDetail,
    user: state.user,
  }
})
class SelPost extends React.Component {
  static propTypes = {
    // match: PropTypes.object,
    // dispatch: PropTypes.func,
    storeDetail: PropTypes.object,
    history: PropTypes.object,
  }
  showList = () => {
    return this.props.storeDetail.store_info.job_list.map((v, k) => {
      return <div key={k} className={style.item} onClick={() => { this.goChat(v.id) }}>
        <div className={style.item_left}>
          <div className={style.name}>{v.job_name}（{v.employ_num}）</div>
          <div className={style.slary}>{v.salary_range_str}</div>
        </div>
        <div>
          <img src={jiantou} alt="右方" />
        </div>
      </div>
    })
  }
  goChat = (id) => {
    const jobId = id // 职位id
    const merchantId = this.props.storeDetail.user_info.id // 商户id
    const userName = this.props.storeDetail.user_info.user_name // 老板姓名
    this.props.history.push({pathname: `/chat/${merchantId}`, state: {'id': jobId, 'userName': userName}})
    // console.log(merchantId, jobId)
  }
  render() {
    console.log(this.props)
    return (
      <div className={style.selpost_view}>
        <NavBar
          className={style.navbar}
          mode="dark"
          onLeftClick={() => this.props.history.go(-1)}
        >
          选择职位
        </NavBar>
        <div className={style.title}>
          您希望和Ta沟通那个职位？
        </div>
        { this.props.storeDetail.hasOwnProperty('store_info')
          ? this.showList()
          : this.props.history.go(-1)
        }
      </div>
    )
  }
}

export default SelPost
