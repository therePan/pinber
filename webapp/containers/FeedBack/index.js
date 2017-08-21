import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createForm } from 'rc-form'
import userFeedimg from '@static/user_beedback.png'
import style from './style.less'
import i18n from '@helper/i18n'
import formReg from '@helper/formReg'
import { feedBack } from '@helper/feedBack'
import { List, InputItem, TextareaItem, WhiteSpace, Button, WingBlank, Picker, Toast, NavBar } from 'antd-mobile'

@connect(state => {
  return {}
})
@createForm()
class FeedBack extends React.Component {
  static propTypes = {
    history: PropTypes.object,
    form: PropTypes.object,
  }
  initData = () => {
    const feedbackType = JSON.parse(localStorage['pinber:config']).feedback_type
    return Object.keys(feedbackType).map((v) => ({
      value: v,
      label: feedbackType[v],
    }))
  }

  feedBack = () => {
    this.props.form.validateFields((err, value) => {
      if (err) return
      if (!value.type) {
        return Toast.info(i18n.feedback_no_type, 1)
      }
      if (!value.content) {
        return Toast.info(i18n.feedback_no_contact, 1)
      }
      if (!value.contact_method) {
        return Toast.info(i18n.feedback_no_contact_method, 1)
      }
      if (!formReg.contact_method(value.contact_method)) {
        return Toast.info(i18n.feedback_err_contact_method, 1)
      }
      feedBack(value, {value: value.type[0]})
        .then(json => {
          if (json.status) {
            this.props.form.resetFields()
            return Toast.info(i18n.feedback_success, 1)
          } else {
            return Toast.info(json.errMsg, 1)
          }
        })
    })
  }
  componentWillMount() {
  }
  render() {
    const { getFieldProps } = this.props.form
    return (
      <div>
        <NavBar
          mode="dark"
          onLeftClick={() => this.props.history.go(-1)}>
          反馈
        </NavBar>
        <div className={style.top}>
          <img src={userFeedimg} alt="反馈头像" />
          <p>对不起,我们有许多做的不足的地方<br />有什么建议请尽量反馈给我们<br />采纳有礼哟~</p>
        </div>
        <List>
          <Picker
            extra=""
            cols="1"
            data={this.initData()}
            title="反馈类型"
            {...getFieldProps('type')}
          >
            <List.Item arrow="horizontal">反馈类型</List.Item>
          </Picker>
        </List>
        <WhiteSpace size="lg" />
        <List>
          <TextareaItem
            {...getFieldProps('content', {
              initialValue: '',
            })}
            clear
            placeholder={i18n.feedback_contact_placeholder}
            rows={5}
            count={100}
          />
        </List>
        <WhiteSpace size="lg" />
        <List>
          <InputItem
            {...getFieldProps('contact_method', {
              initialValue: '',
            })}
            maxLength="11"
            placeholder={i18n.feedback_method_placeholder} />
        </List>
        <WhiteSpace size="lg" />
        <WhiteSpace size="lg" />
        <WingBlank size="md">
          <Button type="primary" onClick={this.feedBack} >提交</Button>
        </WingBlank>
      </div>
    )
  }
}

export default FeedBack
