/**
 * Created by huangchao on 2017/7/13.
 */
import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getSearchInit, getSearchItem, addSearch } from '../../actions/search_item'
import SearchItem from '../../components/SearchItem'
import Nothing from '../../components/Nothing'
import style from './style.less'
import { ListView, RefreshControl } from 'antd-mobile'

@connect(state => {
  return {
    user: state.user,
    searchItem: state.searchItem,
  }
})
class SearchPage extends React.Component {
  static propTypes = {
    match: PropTypes.object,
    // history: PropTypes.object,
    dispatch: PropTypes.func,
    user: PropTypes.object,
    searchItem: PropTypes.object,
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
      more: true,
    }
  }
  onRefresh = () => { // 上啦刷新
    if (!this.props.searchItem.refreshing) {
      this.setState({
        page: 1,
        more: true,
      })
      this.reloadList(this.props.match.params.keyword)
    }
  }
  onEndReached = () => { // 下啦加载
    let page = this.state.page + 1
    this.setState({
      page: page,
    })
    // 防止一次下啦加载很多次
    if (!this.props.searchItem.isLoading && page === 1) {
      return
    }

    let count = this.props.searchItem.page_count
    if (page <= count) {
      this.props.dispatch(addSearch({
        page: page,
        page_size: this.props.searchItem.page_size,
        keyword: this.props.match.params.keyword,
        city_id: this.props.user.city_id,
      }))
    } else {
      this.setState({
        more: false,
      })
    }
  }
  reloadList = (keyword) => {
    this.props.dispatch(getSearchItem({
      page: 1,
      page_size: this.props.searchItem.page_size,
      keyword: keyword || this.props.match.params.keyword,
      city_id: this.props.user.city_id,
    }))
  }

  componentWillMount() {
    // this.onRefresh(this.props.match.params.keyword)
    this.props.dispatch(getSearchInit({
      page: 1,
      page_size: this.props.searchItem.page_size,
      keyword: this.props.match.params.keyword,
      city_id: this.props.user.city_id,
    }))
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.keyword !== this.props.match.params.keyword) {
      this.reloadList(nextProps.match.params.keyword)
    }
    if (nextProps.searchItem.list !== this.props.searchItem.list) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(nextProps.searchItem.list),
      })
    }
  }

  render() {
    // console.log(this.props.searchItem.refreshing)
    const row = (rowData) => {
      return <SearchItem {...rowData} />
    }
    return (
      <div className={style.search_page}>
        {this.props.searchItem.list.length
          ? <div className={style.listBox}>
            <ListView
              dataSource={this.state.dataSource}
              renderRow={row}
              renderFooter={() => (<div style={{ textAlign: 'center' }}>
                {this.state.more ? 'Loading...' : '没有更多了'}
              </div>)}
              initialListSize={0}
              pageSize={10}
              scrollRenderAheadDistance={500}
              scrollEventThrottle={200}
              style={{
                height: 'calc(100vh - 1rem)',
              }}
              refreshControl={<RefreshControl // 上啦刷新
                refreshing={this.props.searchItem.refreshing}
                onRefresh={this.onRefresh}
            />}
              onEndReached={this.onEndReached} // 下啦加载
              onEndReachedThreshold={50}
            /></div>
          : <Nothing />}
      </div>
    )
  }
}

export default SearchPage
