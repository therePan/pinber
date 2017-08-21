// 清酒稻香
import React from 'react'
import PropTypes from 'prop-types'
import { Picker, List } from 'antd-mobile'

class Salary extends React.Component {
  static propTypes = {
    title: PropTypes.string,
  }

  initialSalaryData = () => {
    const salary = JSON.parse(localStorage['pinber:config']).salary
    return Object.keys(salary).map((key) => ({
      value: key,
      label: salary[key],
    }))
  }

  render() {
    return (
      <Picker
        {...this.props}
        title={this.props.title}
        extra="请选择"
        cols={1}
        data={this.initialSalaryData()}>
        <List.Item arrow="horizontal">{this.props.title}</List.Item>
      </Picker>
    )
  }
}

export default Salary
