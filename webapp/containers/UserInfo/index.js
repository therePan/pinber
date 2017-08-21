import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { initResume } from '../../actions/user'
import i18n from '@helper/i18n'
import style from './style.less'
import SelCity from '../../inputs/City'
import Gender from '../../inputs/Gender'
import PurposePost from '../../inputs/PurposePost'
import { createForm } from 'rc-form'
import { WingBlank, WhiteSpace, Button, Toast, InputItem, List } from 'antd-mobile'

@connect(state => {
  return {
    user: state.user,
  }
})
@createForm()
class UserInfo extends React.Component {
  static propTypes = {
    form: PropTypes.object,
    user: PropTypes.object,
    dispatch: PropTypes.func,
  }

  static contextTypes = {
    router: PropTypes.shape({
      history: PropTypes.object.isRequired,
    }),
  }

  submitUserInfo = () => {
    this.props.form.validateFields((err, value) => {
      if (err) return
      if (!value.user_name) {
        return Toast.info(i18n.userinfo_no_name, 1)
      }
      if (!value.gender) {
        return Toast.info(i18n.userinfo_no_gener, 1)
      }
      if (!value.city_id) {
        return Toast.info(i18n.userinfo_no_city, 1)
      }
      if (!value.purpose_post_ids || !value.purpose_post_ids[0]) {
        return Toast.info(i18n.userinfo_no_post, 1)
      }
      // initResume({
      //   ...value,
      //   city_id: value.city_id[1],
      // })
      this.props.dispatch(initResume({
        ...value,
        city_id: value.city_id[1],
      }))
      .then(json => {
        localStorage['pinber:user'] = JSON.stringify({
          ...JSON.parse(localStorage['pinber:user'] || '{}'),
          user_type: 1,
        })
        this.context.router.history.replace('/tabs/find')
      })
    })
  }

  componentWillMount() {
    if (JSON.parse(localStorage['pinber:user'] || '{}').user_type === 1) {
      this.context.router.history.replace('/')
    }
  }

  render() {
    const position = this.props.user.position
    return (
      <div className={style.wrap}>
        <WingBlank size="md">
          <WhiteSpace size="lg" />
          <WhiteSpace size="lg" />
          <div className={style.tit}>BOSS想知道你的：</div>
          <WhiteSpace size="lg" />
        </WingBlank>
        <List>
          <input
            {...this.props.form.getFieldProps('user_type', {
              initialValue: 1,
            })}
            type="hidden" />
          <InputItem
            {...this.props.form.getFieldProps('user_name')}
            clear>
            {i18n.input_user_name}
          </InputItem>
          <Gender
            {...this.props.form.getFieldProps('gender')}
            title={i18n.input_gender} />
          <SelCity
            {...this.props.form.getFieldProps('city_id', {
              initialValue: position ? [
                position.address.city_id.substr(0, 2) + '0000',
                position.address.city_id,
              ] : [],
            })}
            title={i18n.input_city_id} />
          <PurposePost
            {...this.props.form.getFieldProps('purpose_post_ids')}
            title={i18n.input_purpose_post_ids} />
        </List>
        <WingBlank className={style.btn}>
          <p>适合你的工作已经在等你咯</p>
          <WhiteSpace size="lg" />
          <WhiteSpace size="lg" />
          <WhiteSpace size="md" />
          <Button type="primary" onClick={() => this.submitUserInfo()}>
            快去看看
          </Button>
        </WingBlank>
      </div>
    )
  }
}

export default UserInfo
