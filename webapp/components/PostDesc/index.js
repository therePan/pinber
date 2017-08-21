import React from 'react'
import PropTypes from 'prop-types'
import style from './style.less'

class PostDesc extends React.Component {
  static propTypes = {
    job_info: PropTypes.object,
  }
  state = {
    initShow: false,
  }
  showMore = () => {
    this.setState({
      initShow: !this.state.initShow,
    })
  }
  render() {
    // console.log(this.props)
    return (
      <div className={style.CardContent}>
        <div className={style.top}>
          职位描述
        </div>
        <ul className={style.content}>
          <li
            style={!this.state.initShow ? {maxHeight: 386, overflow: 'hidden'}
            : {maxHeight: 'none'}}>{this.props.job_info.desc}
          </li>
        </ul>
        <div onClick={this.showMore} className={style.getDetails}>{!this.state.initShow ? '展开' : '收起'}</div>
      </div>
    )
  }
}
export default PostDesc
