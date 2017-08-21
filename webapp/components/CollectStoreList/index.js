/**
 * Created by huangchao on 2017/7/11.
 */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import style from './style.less'
import stare from '../../static/stare.png'
import uncollect from '../../static/uncollect.png'
import userDefaultHead from '@static/user_default_head.png'
import { delCollectStore } from '@actions/collect_store'
import { SwipeAction, List } from 'antd-mobile'

@connect(state => {
  return {
    collectStore: state.collectStore,
  }
})
class CollectStoreList extends React.Component {
  static propTypes = {
    portrait_url: PropTypes.string,
    store_name: PropTypes.string,
    job_list: PropTypes.array,
    user_name: PropTypes.string,
    user_job_name: PropTypes.string,
    collect_id: PropTypes.string,
    user_id: PropTypes.string,
    propkey: PropTypes.number,
    dispatch: PropTypes.func,
    store_id: PropTypes.string,
    mini_image_url: PropTypes.string,
    is_collect: PropTypes.number,
  }
  state = {
  }
  calcelCollect = () => {
    // console.log(`'取消收藏id:'${this.props.collect_id}`)
    this.props.dispatch(delCollectStore({ // 取消收藏
      collect_id: this.props.collect_id,
      type: 2,
    }))
  }
  render() {
    return (
      <div key={this.props.propkey} className={style.list_wrap}>
        <SwipeAction
          style={{ backgroundColor: '#efefef' }}
          autoClose
          right={[
            {
              text: '取消收藏',
              onPress: () => { this.calcelCollect() },
              style: { backgroundColor: '#F4333C', color: 'white' },
            },
          ]}
        >
          <List.Item className={style.wrap}>
            <Link className={style.nav} to={`/storeview/${this.props.user_id}/${this.props.store_id}`}>
              <div className={style.store_info}>
                <div
                  className={style.store_img}
                  style={{backgroundImage: `url(${this.props.portrait_url ||
                  this.props.mini_image_url ||
                  userDefaultHead})`}}
                />
                <div className={style.boss_info}>
                  <div className={style.boss}>{this.props.user_name}/{this.props.user_job_name}</div>
                  <div className={style.company}>{this.props.store_name}</div>
                </div>
                <div className={style.stare}>
                  <img src={
                    this.props.hasOwnProperty('is_collect') ? this.props.is_collect ? stare : uncollect : stare
                  } alt="stare" />
                </div>
              </div>
            </Link>
            {
              this.props.job_list.map((v, k) => {
                return <Link className={style.nav} key={k} to={`/postview/${v.id}`}>
                  <div className={style.list_item} data-id={v.id} data-range={v.salary_range}>
                    <div className={style.job_name}>{v.job_name}</div>
                    <div className={style.salary_range_str}>{v.salary_range_str}</div>
                  </div>
                </Link>
              })
            }
          </List.Item>
        </SwipeAction>
      </div>
    )
  }
}

export default CollectStoreList
