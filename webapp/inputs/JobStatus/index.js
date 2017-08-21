// 清酒稻香
import React from 'react'
import PropTypes from 'prop-types'
import { Picker, List } from 'antd-mobile'

class JobStatus extends React.Component {
  static propTypes = {
    title: PropTypes.string,
  }

  initialJobStatusData = () => {
    const opts = JSON.parse(localStorage['pinber:config']).job_status
    return Object.keys(opts).map((key) => ({
      value: key,
      label: opts[key],
    }))
  }

  render() {
    return (
      <Picker
        {...this.props}
        title={this.props.title}
        extra="请选择"
        cols={1}
        data={this.initialJobStatusData()}>
        <List.Item arrow="horizontal">{this.props.title}</List.Item>
      </Picker>
    )
  }
}

export default JobStatus
