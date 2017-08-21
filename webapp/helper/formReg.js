import React from 'react'
import { Toast, Icon } from 'antd-mobile'

const formReg = (reg) => {
  return (text, {resolve, reject} = {}) => {
    const bool = text && reg.test(String(text).trim())
    bool && resolve && resolve()
    !bool && reject && reject()
    return Boolean(bool)
  }
}

module.exports = {
  errInfo: (err) => Toast.info((
    <span>
      <Icon type="cross-circle" />
      <div>{err}</div>
    </span>
  ), 1),

  isRequired: (text) => Boolean(text && String(text).trim()),

  // 手机号
  mobile: formReg(/1[3578]\d{9}/),

  // 手机验证码
  mobileCode: formReg(/\d{6}/),

  // 反馈页面的联系方式
  contact_method: formReg(/\d/),

  // 选择年月
  timeMonth: formReg(/\d{4}-(0[1-9]|1[0-2])/),
}
