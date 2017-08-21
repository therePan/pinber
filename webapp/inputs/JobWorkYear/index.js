// 清酒稻香
import React from 'react'
import PropTypes from 'prop-types'
import { Picker, List } from 'antd-mobile'

class JobWorkYear extends React.Component {
  static propTypes = {
    title: PropTypes.string,
  }

  initialJobWorkYearData = () => {
    const opts = JSON.parse(localStorage['pinber:config']).join_work_year
    return Object.keys(opts).map((key) => ({
      value: opts[key],
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
        data={this.initialJobWorkYearData()}>
        <List.Item arrow="horizontal">{this.props.title}</List.Item>
      </Picker>
    )
  }
}

export default JobWorkYear
