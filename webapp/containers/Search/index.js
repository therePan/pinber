import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { SearchBar } from 'antd-mobile'
import SearchHistory from '../../components/SearchHistore'
import SearchPage from '../../containers/SearchPage'
// import { getSearchItem } from '../../actions/search_item'

import style from './style.less'

@connect(state => {
  return {
    user: state.user,
    searchItem: state.searchItem,
  }
})
class Search extends React.Component {
  static propTypes = {
    match: PropTypes.object,
    history: PropTypes.object,
    // user: PropTypes.object,
    // searchItem: PropTypes.object,
    // dispatch: PropTypes.func,
  }

  constructor(props) {
    super(props)
    this.state = {
      keyword: this.props.match.params.keyword,
      focused: true,
    }
  }

  handleSearchBarChange = (value) => {
    this.setState({
      keyword: value,
    })
  }

  searchSubmit = (val) => {
    const historySearch = JSON.parse(localStorage['pinber:historyList'] || '[]').slice(0, 4)
    historySearch.unshift(val.replace(/(^\s*)|(\s*$)/g, ''))
    localStorage['pinber:historyList'] = JSON.stringify([...new Set(historySearch)])
    this.props.history.replace(`/search/${val.replace(/(^\s*)|(\s*$)/g, '')}`)
  }
  searchEndToBack = () => {
    this.setState({
      keyword: '',
    })
    this.props.history.replace(`/search`)
  }
  componentWillMount() {
    this.props.match.params.keyword ? this.setState({focused: false}) : this.setState({focused: true})
  }
  render() {
    return (
      <div className={style.search}>
        <div className={style.searchBar}>
          <SearchBar
            placeholder={this.props.match.params.keyword || '请输入职位或店铺名称'}
            onChange={this.handleSearchBarChange}
            onSubmit={(value) => { this.searchSubmit(value) }}
            onCancel={() => {
              this.props.match.params.keyword
                ? this.searchEndToBack()
                : this.props.history.go(-1)
            }}
             // focused={this.state.focused}
            showCancelButton
          />
        </div>
        {this.props.match.params.keyword
          ? <SearchPage {...this.props} />
          : <SearchHistory {...this.props} />}
      </div>
    )
  }
}

export default Search
