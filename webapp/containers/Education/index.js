// 清酒稻香
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import moment from 'moment'
import 'moment/locale/zh-cn'
import i18n from '@helper/i18n'
import { errInfo } from '@helper/formReg'
import { viewEducation, addEducation, updateEducation, deleteEducation } from '@actions/education_experience'
import Degree from '../../inputs/Degree'
import style from './style.less'
import { createForm } from 'rc-form'
import {
  Card, List, NavBar, Button,
  InputItem, DatePicker,
} from 'antd-mobile'
const maxDate = moment(new Date())
const minDate = moment('1900-01', 'YYYY-MM')
window.moment = moment

@connect(state => {
  return {
    educationExperience: state.educationExperience,
  }
})
@createForm()
class Work extends React.Component {
  static propTypes = {
    educationExperience: PropTypes.object,
    dispatch: PropTypes.func,
    history: PropTypes.object,
    match: PropTypes.object,
    form: PropTypes.object,
  }

  handleFormSubmit = () => {
    this.props.form.validateFields((err, value) => {
      if (err) return

      if (!value.degree[0]) {
        return errInfo(i18n.resume_degree)
      }
      if (!value.school_name) {
        return errInfo(i18n.resume_school_name)
      }
      if (!value.major_name) {
        return errInfo(i18n.resume_major_name)
      }
      if (value.start_year.valueOf() >= value.end_year.valueOf()) {
        return errInfo(i18n.time_interval)
      }

      const args = {
        ...value,
        start_year: value.start_year.format('YYYY-MM'),
        end_year: value.end_year.format('YYYY-MM'),
      }
      this.props.dispatch((this.props.match.params.education_id ? updateEducation : addEducation)(args))
        .then(() => {
          this.props.history.go(-1)
        })
    })
  }

  handleDeleteIt = () => {
    this.props.dispatch(deleteEducation({
      education_id: this.props.match.params.education_id,
    }))
    .then(() => {
      this.props.history.go(-1)
    })
  }

  componentWillMount() {
    this.props.match.params.education_id && this.props.dispatch(viewEducation({
      education_id: this.props.match.params.education_id,
    }))
  }

  render() {
    const { form, match, educationExperience } = this.props
    const { getFieldProps } = form
    const educationItem = educationExperience.list[match.params.education_id] || {}

    return (
      <div>
        <div className={style.navbar}>
          <NavBar
            mode="dark"
            rightContent={<span className={style.submit} onClick={this.handleFormSubmit}>提交</span>}
            onLeftClick={() => this.props.history.go(-1)}>
            {match.params.education_id ? '编辑' : '添加'}教育经历
          </NavBar>
        </div>
        <div className={style.resume}>
          <Card full style={{padding: 0}}>
            <List>
              <input
                type="hidden"
                {...getFieldProps('resume_id', {
                  initialValue: match.params.resume_id,
                })} />
              {match.params.education_id && (
                <input
                  type="hidden"
                  {...getFieldProps('education_id', {
                    initialValue: match.params.education_id,
                  })} />
              )}
              <Degree
                {...getFieldProps('degree', {
                  initialValue: [educationItem.degree],
                })}
                title="学历" />
              <InputItem
                {...getFieldProps('school_name', {
                  initialValue: educationItem.school_name,
                })}
                clear>
                学校
              </InputItem>
              <InputItem
                {...getFieldProps('major_name', {
                  initialValue: educationItem.major_name,
                })}
                clear>
                专业
              </InputItem>
              <DatePicker
                {...getFieldProps('start_year', {
                  initialValue: moment(educationItem.start_year || new Date()),
                })}
                mode="month"
                format={val => val.format('YYYY-MM')}
                minDate={minDate}
                maxDate={maxDate}>
                <List.Item arrow="horizontal">开始时间</List.Item>
              </DatePicker>
              <DatePicker
                {...getFieldProps('end_year', {
                  initialValue: moment(educationItem.end_year || new Date()),
                })}
                mode="month"
                format={val => val.format('YYYY-MM')}
                minDate={minDate}
                maxDate={maxDate}>
                <List.Item arrow="horizontal">终止时间</List.Item>
              </DatePicker>
            </List>
          </Card>
        </div>
        {match.params.education_id &&
          <Button
            className={style.btn} type="primary"
            onClick={this.handleDeleteIt}>
            删除教育经历
          </Button>
        }
      </div>
    )
  }
}

export default Work
