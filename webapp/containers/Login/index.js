import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'
import queryString from 'query-string'
import { connect } from 'react-redux'
import { getCode, userLogin } from '@helper/auth'
import formReg, { errInfo } from '@helper/formReg'
import i18n from '@helper/i18n'
import style from './style.less'
import SvgIcon from '../../components/SvgIcon'
import logoTitle from '@static/logo_title.svg'
import mobileIcon from '@static/mobile.svg'
import mobileCodeIcon from '@static/mobile_code.svg'
import { List, InputItem, Flex, Button, Toast, Checkbox } from 'antd-mobile'
import { createForm } from 'rc-form'
const AgreeItem = Checkbox.AgreeItem

@connect(state => {
  return {
    user: state.user,
  }
})
@createForm()
class Login extends React.Component {
  static propTypes = {
    form: PropTypes.object,
    history: PropTypes.object,
    // location: PropTypes.object,
    // user: PropTypes.object,
  }

  state = {
    codeDisabled: false,
    codeText: i18n.fetch_mobile_code,
  }

  codeClear = (timer) => {
    this.setState({
      codeDisabled: false,
      codeText: i18n.fetch_mobile_code,
    })
    clearInterval(timer)
  }

  handleGetCode = () => {
    this.setState({
      codeDisabled: true,
    })
    var index = 60
    const timer = setInterval(() => {
      if (--index === 0) {
        return this.codeClear(timer)
      }
      this.setState({
        codeText: `${index}${i18n.refetch_mobile_code}`,
      })
    }, 999)
    this.props.form.validateFields((err, value) => {
      if (err) return

      if (!formReg.mobile(value.mobile)) {
        this.codeClear(timer)
        return errInfo(i18n.input_mobile)
      }
      getCode(value)
        .then(data => {
          if (data.status) {
            return Toast.info(i18n.send_code_success, 1)
          } else {
            this.codeClear(timer)
          }
        }).catch(err => {
          this.codeClear(timer)
          throw err
        })
    })
  }
  handleLogin = () => {
    this.props.form.validateFields((err, value) => {
      if (err) return
      if (!formReg.mobile(value.mobile)) {
        return errInfo(i18n.input_mobile)
      }
      if (!formReg.mobileCode(value.code)) {
        return errInfo(i18n.input_mobile_code)
      }
      if (!value.protocol) {
        return errInfo(i18n.read_user_protocol)
      }
      // formReg.mobile(value.mobile, {reject: () => Toast.info(i18n.input_mobile, 1)}) &&
      // formReg.mobileCode(value.code, {reject: () => Toast.info(i18n.input_mobile_code, 1)}) &&
      userLogin(value)
        .then(json => {
          // const { state } = this.props.location
          if (json.status) {
            if (json.data.user_type === 0) { // 用户首次进入
              this.props.history.replace('/userinfo')
            } else {
              const redirectUri = queryString.parse(window.location.search).redirect
              if (redirectUri) {
                window.location.href = redirectUri
              } else {
                this.props.history.replace('/tabs/find')
              }
              // this.props.history.replace((state && state.from && state.from.pathname) || '/')
            }
            Toast.info(i18n.login_success, 1)
            return json
          }
        })
    })
  }
  keyLogin = (event) => {
    const theEvent = event || window.event
    if (theEvent.keyCode === 13) {
      this.handleLogin()
    }
  }
  componentDidMount() {
    window.addEventListener('keydown', this.keyLogin)
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.keyLogin)
  }
  render() {
    return (
      <div className={style.login_wrap}>
        <SvgIcon icon={logoTitle} color="#fff" className={style.logo} />
        <List className={style.wrap}>
          <InputItem className={style.bgc}
            {...this.props.form.getFieldProps('mobile')}
            type="tel" placeholder="手机号" maxLength="11">
            <div><SvgIcon icon={mobileIcon} color="#fff" className={style.icon} /></div>
          </InputItem>
          <Flex justify="between">
            <InputItem className={style.bgc}
              {...this.props.form.getFieldProps('code')}
              type="tel" placeholder="验证码" maxLength="6">
              <div><SvgIcon icon={mobileCodeIcon} color="#fff" className={style.icon} /></div>
            </InputItem>
            <Button className={style.codeBtn} type="ghost" size="small"
              disabled={this.state.codeDisabled}
              onClick={this.handleGetCode}>{this.state.codeText}</Button>
          </Flex>
          <Flex>
            <AgreeItem className={style.write} defaultChecked
              {...this.props.form.getFieldProps('protocol', {
                initialValue: true,
              })}>
              已阅读协议<a target="_black" href="/protocol">《最佳东方注册用户协议》</a>
            </AgreeItem>
          </Flex>
          <Button className={style.btn} type="primary" onClick={this.handleLogin}>登录</Button>
        </List>
      </div>
    )
  }
}

export default Login
