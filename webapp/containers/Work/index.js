// 清酒稻香
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import moment from 'moment'
import 'moment/locale/zh-cn'
import i18n from '@helper/i18n'
import { errInfo } from '@helper/formReg'
import { viewWork, addWork, updateWork, deleteWork } from '@actions/work_experience'
import style from './style.less'
import { createForm } from 'rc-form'
import {
  Card, List, NavBar, Button,
  TextareaItem, InputItem, DatePicker,
} from 'antd-mobile'
const maxDate = moment(new Date())
const minDate = moment('1900-01-01', 'YYYY-MM-DD')
window.moment = moment

@connect(state => {
  return {
    workExperience: state.workExperience,
  }
})
@createForm()
class Work extends React.Component {
  static propTypes = {
    workExperience: PropTypes.object,
    dispatch: PropTypes.func,
    history: PropTypes.object,
    match: PropTypes.object,
    form: PropTypes.object,
  }

  handleFormSubmit = () => {
    this.props.form.validateFields((err, value) => {
      if (err) return

      if (!value.job_name) {
        return errInfo(i18n.resume_degree)
      }
      if (!value.company_name) {
        return errInfo(i18n.resume_school_name)
      }
      if (value.start_year.valueOf() >= value.end_year.valueOf()) {
        return errInfo(i18n.time_interval)
      }
      if (!value.work_content) {
        return errInfo(i18n.resume_major_name)
      }

      const args = {
        ...value,
        start_year: value.start_year.format('YYYY-MM'),
        end_year: value.end_year.format('YYYY-MM'),
      }
      this.props.dispatch((this.props.match.params.work_id ? updateWork : addWork)(args))
        .then(() => {
          this.props.history.go(-1)
        })
    })
  }

  handleDeleteIt = () => {
    this.props.dispatch(deleteWork({
      work_id: this.props.match.params.work_id,
    }))
    .then(() => {
      this.props.history.go(-1)
    })
  }

  componentWillMount() {
    this.props.match.params.work_id && this.props.dispatch(viewWork({
      work_id: this.props.match.params.work_id,
    }))
  }

  render() {
    const { form, match, workExperience } = this.props
    const { getFieldProps } = form
    const workItem = workExperience.list[match.params.work_id] || {}

    return (
      <div>
        <div className={style.navbar}>
          <NavBar
            mode="dark"
            rightContent={<span className={style.submit} onClick={this.handleFormSubmit}>提交</span>}
            onLeftClick={() => this.props.history.go(-1)}>
            工作经历
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
              {match.params.work_id && (
                <input
                  type="hidden"
                  {...getFieldProps('work_id', {
                    initialValue: match.params.work_id,
                  })} />
              )}
              <InputItem
                {...getFieldProps('job_name', {
                  initialValue: workItem.job_name,
                })}
                clear>
                职位名称
              </InputItem>
              <InputItem
                {...getFieldProps('company_name', {
                  initialValue: workItem.company_name,
                })}
                clear>
                公司名称
              </InputItem>
              <DatePicker
                {...getFieldProps('start_year', {
                  initialValue: moment(workItem.start_year || new Date()),
                })}
                mode="month"
                format={val => val.format('YYYY-MM')}
                minDate={minDate}
                maxDate={maxDate}>
                <List.Item arrow="horizontal">开始时间</List.Item>
              </DatePicker>
              <DatePicker
                {...getFieldProps('end_year', {
                  initialValue: moment(workItem.end_year || new Date()),
                })}
                mode="month"
                format={val => val.format('YYYY-MM')}
                minDate={minDate}
                maxDate={maxDate}>
                <List.Item arrow="horizontal">终止时间</List.Item>
              </DatePicker>
              <TextareaItem
                {...getFieldProps('work_content', {
                  initialValue: workItem.work_content,
                })}
                title="工作内容"
                placeholder="无"
                autoFocus
                autoHeight
                clear />
            </List>
          </Card>
        </div>
        {match.params.work_id &&
          <Button
            className={style.btn} type="primary"
            onClick={this.handleDeleteIt}>
            删除工作经历
          </Button>
        }
      </div>
    )
  }
}

export default Work
