import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import i18n from '@helper/i18n'
import { getCode } from '@helper/auth'
import { updateMobile } from '@actions/user'
import formReg from '@helper/formReg'
import style from './style.less'
import { List, Button, InputItem, WingBlank, WhiteSpace, Flex, Toast, NavBar } from 'antd-mobile'
import { createForm } from 'rc-form'

@connect(state => {
  return {
    user: state.user,
  }
})
@createForm()
class ChangeMobile extends React.Component {
  static propTypes = {
    form: PropTypes.object,
    dispatch: PropTypes.func,
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
      if (!value.mobile) {
        this.codeClear(timer)
        return Toast.info('请输入手机号', 1)
      }
      if (!formReg.mobile(value.mobile)) {
        this.codeClear(timer)
        return Toast.fail(i18n.err_mobile, 1)
      }
      getCode(value)
        .then(data => {
          if (data.status) {
            return Toast.info(i18n.send_code_success, 1)
          } else {
            this.codeClear(timer)
          }
        })
    })
  }
  changeMoile = () => {
    this.props.form.validateFields((err, value) => {
      if (err) return
      if (!value.mobile) {
        return Toast.info(i18n.input_mobile, 1)
      }
      if (!formReg.mobile(value.mobile)) {
        return Toast.info(i18n.err_mobile, 1)
      }
      if (!formReg.mobileCode(value.code)) {
        return Toast.info(i18n.input_mobile_code, 1)
      }

      this.props.dispatch(updateMobile(value))
        .then(json => {
          // const { state } = this.props.location
          if (json.status) {
            Toast.info(i18n.update_mobile_success, 1)
            return json
          }
        })
    })
  }

  render() {
    return (
      <div>
        <NavBar
          mode="dark"
          onLeftClick={() => this.props.history.go(-1)}>
          更换手机号
        </NavBar>
        <List>
          <InputItem
            type="number"
            placeholder="请输入手机号"
            {...this.props.form.getFieldProps('mobile')}
            maxLength="11"
            clear
          />
          <Flex justify="between">
            <InputItem
              className={style.code}
              {...this.props.form.getFieldProps('code')}
              type="number"
              placeholder="请输入验证码"
            />
            <Button className={style.codeBtn}
              type="ghost"
              size="small"
              disabled={this.state.codeDisabled}
              onClick={this.handleGetCode}>{this.state.codeText}</Button>
          </Flex>
        </List>
        <WhiteSpace size="lg" />
        <WingBlank size="md">
          <Button type="primary" onClick={this.changeMoile}>更换</Button>
        </WingBlank>
      </div>
    )
  }
}

export default ChangeMobile
