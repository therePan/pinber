import React from 'react'
import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
import province from '@helper/province'
import { Picker, List } from 'antd-mobile'

class City extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    // user: PropTypes.object,
  }

  initCityDate = () => {
    // const position = this.props.user.position
    const hotCity = JSON.parse(localStorage['pinber:config']).hot_city_list || {}
    const arr = province.map(value => ({
      value: value.id,
      label: value.province_name,
      children: [
        ...value.city_list.map(v => ({
          value: v.id,
          label: v.city_name,
        })),
      ],
    }))
    let hostCity = {
      value: '000000',
      label: '热门城市',
      children: [
        ...Object.keys(hotCity).map((value) => (
          {
            value: value,
            label: hotCity[value],
          })),
      ],
    }
    arr.unshift(hostCity)
    // let NowCity = {
    //   value: '111111',
    //   label: '当前城市',
    //   children: [
    //     {
    //       label: position && position.address.city,
    //       value: position && position.address.city_id,
    //     },
    //   ],
    // }
    // arr.unshift(NowCity)
    return arr
  }

  render() {
    return (
      <Picker
        {...this.props}
        title={this.props.title}
        extra="请选择"
        cols="2"
        format={v => (v[v.length - 1])}
        data={this.initCityDate()}>
        <List.Item arrow="horizontal">{this.props.title}</List.Item>
      </Picker>
    )
  }
}

export default City
