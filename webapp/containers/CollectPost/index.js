import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { collectPostinit, collectPost, addPost } from '@actions/collect_post'
import PostList from '../../components/CollectPostList'
import Nothing from '../../components/Nothing'
import style from './style.less'
import { ListView, RefreshControl, NavBar } from 'antd-mobile'
@connect(state => {
  return {
    collectPost: state.collectPost,
  }
})
class CollectBoss extends React.Component {
  static propTypes = {
    history: PropTypes.object,
    dispatch: PropTypes.func,
    collectPost: PropTypes.object,
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
    }
  }
  onRefresh = () => {
    if (!this.props.collectPost.refreshing) {
      this.setState({
        page: 1,
      })
      this.props.dispatch(collectPost({
        page: 1,
        type: 1,
        page_size: this.props.collectPost.page_size,
      }))
    }
  }
  onEndReached = () => {
    let page = this.state.page + 1
    this.setState({
      page: page,
    })
    if (!this.props.collectPost.isLoading && page === 1) {
      return
    }

    let count = this.props.collectPost.page_count
    // console.log(page)
    if (page <= count) {
      this.props.dispatch(addPost({
        page: page,
        type: 1,
        page_size: this.props.collectPost.page_size,
      }))
    }
  }
  componentWillMount() {
    this.props.dispatch(collectPostinit({
      page: 1,
      type: 1,
      page_size: this.props.collectPost.page_size,
    }))
  }
  componentWillReceiveProps(nextProps) {
    // console.log(this.props.collectPost)
    if (nextProps.collectPost.collect_list !== this.props.collectPost.collect_list) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(nextProps.collectPost.collect_list),
      })
    }
  }
  render() {
    // console.log(this.props.collectPost.collect_list)
    const row = (rowData) => {
      return <PostList {...rowData} />
    }
    return (
      <div className={style.collectstore}>
        <NavBar
          mode="dark"
          className={style.navbar}
          onLeftClick={() => this.props.history.go(-1)}>
          收藏的职位
        </NavBar>
        {
          this.props.collectPost.collect_list.length
          ? <div className={style.listBox}>
            <ListView
              dataSource={this.state.dataSource}
              renderRow={row}
              initialListSize={0}
              pageSize={10}
              style={{
                height: 'calc(100vh - 0.9rem)',
              }}
              scrollRenderAheadDistance={500}
              scrollEventThrottle={200}
              refreshControl={<RefreshControl // 上啦刷新
                refreshing={this.props.collectPost.refreshing}
                onRefresh={this.onRefresh}
            />}
              onEndReached={this.onEndReached} // 下啦加载
              onEndReachedThreshold={20}
              /></div>
          : <Nothing />
        }

      </div>
    )
  }
}

export default CollectBoss
