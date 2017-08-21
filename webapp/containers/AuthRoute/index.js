// 清酒稻香
import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import { authFetch } from '@helper/fetchForm'
import { connect } from 'react-redux'
import { getInfo, getCurrentPosition } from '@actions/user'
import { setHistory } from '@actions/history'
import { indexData, hotJobStore } from '@helper/config'
import province from '@helper/province'
import { ActivityIndicator } from 'antd-mobile'

@connect(state => {
  return {
    user: state.user,
  }
})
class AuthRoute extends React.Component {
  static propTypes = {
    location: PropTypes.object,
    dispatch: PropTypes.func,
    user: PropTypes.object,
  }

  static contextTypes = {
    router: PropTypes.shape({
      history: PropTypes.object.isRequired,
    }),
  }

  state = {
    redirect: false,
  }

  componentWillMount() {
    let cityMap = []
    province.map(list => list.city_list.map(item => {
      cityMap.push(item)
    }))
    this.props.dispatch(setHistory(this.context.router.history))
    const userInfo = JSON.parse(localStorage['pinber:user'] || '{}')

    if (userInfo.user_ticket) {
      const bmap = new window.BMap.Geolocation()
      bmap.getCurrentPosition((result) => {
        const address = `${result.address.province}${result.address.city}${result.address.district}` +
          `${result.address.street}${result.address.street_number}`
        authFetch('/api/user/record_login_info', {
          client_type: /iPhone/.test(navigator.userAgent) ? 1 : 2,
          address,
          longitude: result.longitude,
          latitude: result.latitude,
          device_no: userInfo.user_id,
          ip: '0.0.0.0',
        })
        const city = cityMap.filter(city => result.address.city.indexOf(city.city_name) === 0)[0]
        this.props.dispatch(getCurrentPosition({
          ...result,
          address: {
            ...result.address,
            city_id: city.id,
          },
        }))
      })
      Promise.all([
        indexData(),
        hotJobStore(),
      ])
      .then(() => {
        if (userInfo.user_type === 0 && this.context.router.history.location.pathname !== '/userinfo') {
          this.context.router.history.replace('/userinfo')
        }
        this.props.dispatch(getInfo())
      })
    } else {
      this.setState({
        redirect: true,
      })
    }
  }

  render() {
    return this.props.user.mobile ? <Route {...this.props} /> : this.state.redirect ? (
      <Redirect to={{pathname: '/login', state: {from: this.props.location}}} />
    ) : <ActivityIndicator toast animating text="Loading..." />
  }
}

export default AuthRoute
