/**
 * Created by huangchao on 2017/7/13.
 */
import React from 'react'
import PropTypes from 'prop-types'
import style from './style.less'

class SearchHistory extends React.Component {
  static propTypes = {
    // match: PropTypes.object,
    history: PropTypes.object,
  }
  componentWillMount() {
  }
  render() {
    // console.log(this.props)
    const hotJob = JSON.parse(localStorage['pinber:hotList']).hot_job || {}
    const historySearch = JSON.parse(localStorage['pinber:historyList'] || '[]')
    const hotStore = JSON.parse(localStorage['pinber:hotList']).hot_store || {}
    return (
      <div className={style.search}>
        <div className={style.container}>
          <h3>历史记录</h3>
          <ul className={style.historyList}>
            {historySearch.map((item, index) => {
              return <li
                key={index}
                onClick={() => { this.props.history.replace(`/search/${item}`) }}>
                {item}
              </li>
            })}
          </ul>
        </div>
        <div className={style.container}>
          <h3>人气职位</h3>
          <ul className={style.hotJob}>
            {Object.keys(hotJob).map((item, index) => (
              <li
                key={index}
                onClick={() => { this.props.history.replace(`/search/${hotJob[item]}`) }}>
                {hotJob[item]}
              </li>
            ))}
          </ul>
        </div>
        <div className={style.container}>
          <h3>热门商家</h3>
          <ul className={style.hotCom}>
            {Object.keys(hotStore).map((item, index) => (
              <li
                key={index}
                onClick={() => { this.props.history.replace(`/search/${hotStore[item]}`) }}>
                {hotStore[item]}
              </li>
           ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SearchHistory
