import React from 'react'
import PropTypes from 'prop-types'
import CPurposePost from '../../components/PurposePost'
// import style from './style.less'
import { List } from 'antd-mobile'

class PurposePost extends React.Component {
  static propTypes = {
    title: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func,
      PropTypes.element,
    ]),
    children: PropTypes.element,
    format: PropTypes.func,
  }

  componentWillMount() {
    this.postType = JSON.parse(localStorage['pinber:config']).post_type
  }

  render() {
    return (
      <CPurposePost
        {...this.props}
        extra="请选择"
        data={this.postType}
        format={this.props.format}>
        {this.props.children ? this.props.children : (
          <List.Item
            arrow="horizontal">
            {this.props.title}
          </List.Item>
        )}
      </CPurposePost>
    )
  }
}

export default PurposePost
