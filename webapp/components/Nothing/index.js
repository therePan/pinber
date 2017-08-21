/**
 * Created by huangchao on 2017/7/13.
 */
import React from 'react'
// import PropTypes from 'prop-types'
import style from './style.less'
import searchNull from '@static/search_null.png'

class Nothing extends React.Component {
  static propTypes = {
    // match: PropTypes.object,
  }

  render() {
    return (
      <div className={style.nothing}>
        <img src={searchNull} alt="什么都没有" />
      </div>
    )
  }
}

export default Nothing
