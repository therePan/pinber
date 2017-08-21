/**
 * Created by huangchao on 2017/7/11.
 */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import style from './style.less'
import { SwipeAction, List } from 'antd-mobile'
import { delCollectPost } from '@actions/collect_post'

@connect(state => {
  return {
    collectPost: state.collectPost,
  }
})
class CollectStoreList extends React.Component {
  static propTypes = {
    store_address: PropTypes.string,
    id: PropTypes.string,
    store_name: PropTypes.string,
    job_name: PropTypes.string,
    salary_range_str: PropTypes.string,
    collect_id: PropTypes.string,
    salary_range: PropTypes.string,
    dispatch: PropTypes.func,
  }
  state = {
  }
  calcelCollect = () => {
    // console.log(`'取消收藏id:'${this.props.collect_id}`)
    this.props.dispatch(delCollectPost({ // 取消收藏
      collect_id: this.props.collect_id,
      type: 1,
    }))
  }
  render() {
    return (
      <div className={style.list_wrap}>
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
          <List.Item className={style.bottom}>
            <Link className={style.nav} to={`/postview/${this.props.id}`}>
              <div className={style.job_name}>{this.props.job_name}</div>
              <div className={style.salary} data-salary_range={this.props.salary_range}>
                {this.props.salary_range_str}
              </div>
              <div className={style.company_name}>{this.props.store_name}</div>
              <div className={style.location}>{this.props.store_address}</div>
            </Link>
          </List.Item>
        </SwipeAction>
      </div>
    )
  }
}

export default CollectStoreList
