/**
 * Created by huangchao on 2017/7/11.
 */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getCollectStoreInit, getCollectStore, addStore } from '@actions/collect_store'
import StoreList from '../../components/CollectStoreList'
import Nothing from '../../components/Nothing'
import style from './style.less'
import { ListView, RefreshControl, NavBar } from 'antd-mobile'

@connect(state => {
  return {
    collectStore: state.collectStore,
  }
})
class CollectStore extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func,
    collectStore: PropTypes.object,
    history: PropTypes.object,
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
    if (!this.props.collectStore.refreshing) {
      // console.log('上啦刷新')
      this.setState({
        page: 1,
      })
      this.props.dispatch(getCollectStore({
        page: 1,
        page_size: this.props.collectStore.page_size,
        type: this.props.collectStore.type,
      }))
    }
  }
  onEndReached = () => { // 下拉加载
    let page = this.state.page + 1
    this.setState({
      page: page,
    })
    if (!this.props.collectStore.isLoading && page === 1) {
      return
    }

    let count = this.props.collectStore.page_count
    // console.log(page)
    if (page <= count) {
      this.props.dispatch(addStore({
        page: page,
        type: 2,
        page_size: this.props.collectStore.page_size,
      }))
    }
  }
  componentWillMount() {
    this.props.dispatch(getCollectStoreInit({
      page: 1,
      page_size: this.props.collectStore.page_size,
      type: this.props.collectStore.type,
    }))
  }

  componentWillReceiveProps(nextProps) {
    // console.log(this.props.collectStore)
    if (nextProps.collectStore.collect_list !== this.props.collectStore.collect_list) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(nextProps.collectStore.collect_list),
      })
    }
  }

  render() {
    // console.log(this.props.collectStore)
    const row = (rowData) => {
      return <StoreList {...rowData} />
    }
    return (
      <div className={style.collectstore}>
        <NavBar
          className={style.navbar}
          mode="dark"
          onLeftClick={() => this.props.history.go(-1)}>
          收藏的老板
        </NavBar>
        {
          this.props.collectStore.collect_list.length
          ? <div className={style.listBox}>
            <ListView
              dataSource={this.state.dataSource}
              renderRow={row}
              style={{
                height: 'calc(100vh - 1rem)',
              }}
              initialListSize={0}
              pageSize={10}
              scrollRenderAheadDistance={500}
              scrollEventThrottle={20}
              refreshControl={<RefreshControl // 上啦刷新
                refreshing={this.props.collectStore.refreshing}
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
  componentWillUnmount() {
    this.setState({
      page: 0,
    })
  }
}

export default CollectStore
