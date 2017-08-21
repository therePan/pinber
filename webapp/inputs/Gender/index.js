import React from 'react'
import PropTypes from 'prop-types'
import { Picker, List } from 'antd-mobile'

class Gender extends React.Component {
  static propTypes = {
    title: PropTypes.string,
  }

  state = {
    data: [{
      value: '1',
      label: '男',
    },
    {
      value: '2',
      label: '女',
    }],
  }

  render() {
    return (
      <Picker
        extra="请选择"
        cols={1}
        data={this.state.data}
        title={this.props.title}
        {...this.props}>
        <List.Item arrow="horizontal">{this.props.title}</List.Item>
      </Picker>
    )
  }
}

export default Gender
