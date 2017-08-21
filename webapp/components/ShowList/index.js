import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Nothing from '../Nothing'
import JobCard from '../JobCard'
import Banner from '../Banner'
import { jobRecomendList, jobRecomendListAdd, jobRecomendListInit } from '@actions/job'
import style from './style.less'
import { ListView, RefreshControl } from 'antd-mobile'

@connect(state => {
  return {
    user: state.user,
    job: state.job,
  }
})

class ShowList extends React.Component {
  static propTypes = {
    // history: PropTypes.object,
    dispatch: PropTypes.func,
    user: PropTypes.object,
    job: PropTypes.object,
  }
  constructor(props) {
    super(props)
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    })
    this.initData = []
    this.state = {
      dataSource: dataSource.cloneWithRows(this.initData),
      page: 1,
      isLoading: true,
      count: '',
    }
  }

  showItem = (list) => {
    return list.map((v, k) => {
      return <JobCard key={k} item={k} {...v} />
    })
  }
  onRefresh = () => {
    if (!this.props.job.refreshing) {
      this.setState({
        page: 1,
      })
      this.reloadList()
    }
  }
  onEndReached = () => {
    let page = ''
    if (!this.props.job.isLoding) {
      return
    } else {
      page = this.props.job.page + 1
      this.setState({
        page: page,
      })
    }

    let count = this.state.count
    if (page <= count) {
      this.setState({
        isLoading: true,
      })
      this.props.dispatch(jobRecomendListAdd({
        page: page,
        page_size: this.props.job.page_size,
        city_id: this.props.user.city_id,
        area_id: this.props.job.area_id,
        order_by: this.props.job.order_by,
        post_type_id: this.props.job.post_type_id || '',
        salary_range: this.props.job.salary_range,
      }))
    } else {
      this.setState({
        isLoading: false,
      })
    }
  }

  reloadList = () => {
    this.props.dispatch(jobRecomendList({
      page: 1,
      page_size: this.props.job.page_size,
      city_id: this.props.user.city_id,
      area_id: this.props.job.area_id,
      order_by: this.props.job.order_by,
      post_type_id: this.props.job.post_type_id || '',
      salary_range: this.props.job.salary_range,
    }))
  }

  componentWillMount() {
    // this.reloadList()
    this.props.dispatch(jobRecomendListInit({
      page: 1,
      page_size: this.props.job.page_size,
      city_id: this.props.user.city_id,
      area_id: this.props.job.area_id,
      order_by: this.props.job.order_by,
      post_type_id: this.props.job.post_type_id || '',
      salary_range: this.props.job.salary_range,
    }))
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.job !== this.props.job) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(nextProps.job.job_list),
        count: nextProps.job.page_count,
      })
    }
  }
  render() {
    const row = (rowData) => {
      return <JobCard {...rowData} />
    }
    return (
      <div className={style.search_page}>
        {this.props.job.job_list.length
          ? <div className={style.listBox}>
            <ListView
              dataSource={this.state.dataSource}
              renderHeader={() => <div className={style.bannerCon}>
                <span className={style.banner}>
                  <Banner />
                </span></div>
              }
              renderFooter={() => (<div style={{ textAlign: 'center' }}>
                {this.state.isLoading ? 'Loading...' : 'Loaded'}
              </div>)}
              renderRow={row}
              initialListSize={0}
              pageSize={10}
              scrollRenderAheadDistance={500}
              scrollEventThrottle={200}
              style={{
                height: 'calc(100vh - 2.8rem)',
                // height: window.innerHeight - parseInt(document.getElementsByTagName('html')[0].style.fontSize) * 2.8,
                background: 'none',
              }}
              refreshControl={<RefreshControl
                refreshing={this.props.job.refreshing}
                onRefresh={this.onRefresh}
              />}
              onEndReached={this.onEndReached}
              onEndReachedThreshold={200}
            /></div>
            : <Nothing />}
      </div>
    )
  }
}

export default ShowList
