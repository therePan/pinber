// 清酒稻香
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import moment from 'moment'
import 'moment/locale/zh-cn'
import { connect } from 'react-redux'
import { uploadHead, updateInfo as updateInfoUser } from '@actions/user'
import { getInfo, updateInfo as updateInfoResume } from '@actions/resume'
import i18n from '@helper/i18n'
import { errInfo, isRequired } from '@helper/formReg'
import style from './style.less'
import HeadPortrait from 'headportrait'
import Gender from '../../inputs/Gender'
import City from '../../inputs/City'
import PurposePost from '../../inputs/PurposePost'
import Salary from '../../inputs/Salary'
import JobWorkYear from '../../inputs/JobWorkYear'
import JobStatus from '../../inputs/JobStatus'
import Degree from '../../inputs/Degree'
import Photo from '../../components/Photo'
import SvgIcon from '../../components/SvgIcon'
import iconEdit from '@static/icon_edit.svg'
import userDefaultHead from '@static/user_default_head.png'
import { createForm } from 'rc-form'
import {
  NoticeBar, Card, WhiteSpace, List, NavBar, Steps, Tag, Toast,
  TextareaItem, InputItem, DatePicker, Switch,
} from 'antd-mobile'
const maxDate = moment(new Date())
const minDate = moment('1900-01-01', 'YYYY-MM-DD')
window.moment = moment

@connect(state => {
  return {
    user: state.user,
    resume: state.resume,
    workExperience: state.workExperience,
    educationExperience: state.educationExperience,
  }
})
@createForm()
class Resume extends React.Component {
  static propTypes = {
    user: PropTypes.object,
    resume: PropTypes.object,
    workExperience: PropTypes.object,
    educationExperience: PropTypes.object,
    dispatch: PropTypes.func,
    history: PropTypes.object,
    form: PropTypes.object,
  }

  constructor(props) {
    super(props)
    this.state = {
      portraitUrl: this.props.user.portrait_url,
    }
  }

  handleHeadChange = (base64, blob) => {
    Toast.info('正在上传')
    this.props.dispatch(uploadHead({
      is_save: 1,
      image: blob,
    })).then(() => {
      Toast.info('上传完成')
    })
  }

  handleFormSubmit = () => {
    this.props.form.validateFields((err, value) => {
      if (err) return

      if (!isRequired(value.user_name)) {
        return errInfo(i18n.userinfo_no_name)
      }

      Promise.all([
        this.props.dispatch(updateInfoUser({
          user_name: value.user_name,
          gender: value.gender[0],
          birthday: value.birthday.format('YYYY-MM-DD'),
          wechat_no: value.wechat_no,
          ...(value.hometown && {
            hometown_provinceid: `${value.hometown[1].match(/\d{2}/)}0000`,
            hometown_cityid: value.hometown[1],
          }),
        })),
        this.props.dispatch(updateInfoResume({
          ...value,
          birthday: value.birthday.format('YYYY-MM-DD'),
          degree: value.degree[0],
          salary_range: value.salary_range[0],
          join_work_year: value.join_work_year[0],
          job_status: value.job_status[0],
          resume_id: this.props.resume.id,
          is_hidden: value.is_hidden ? '1' : '0',
        })),
      ])
      .then(() => {
        Toast.info('保存成功', 1)
      })
    })
  }

  componentWillMount() {
    this.post_list = []
    JSON.parse(localStorage['pinber:config']).post_type.map(list => {
      this.post_list = [
        ...this.post_list,
        ...list.post_list,
      ]
    })
    this.props.dispatch(getInfo())
  }

  render() {
    const { form, user, resume, workExperience, educationExperience } = this.props
    const { getFieldProps } = form

    return (
      <div>
        <div className={style.navbar}>
          <NavBar
            mode="dark"
            rightContent={<span className={style.submit} onClick={this.handleFormSubmit}>提交</span>}
            onLeftClick={() => this.props.history.go(-1)}>
            我的简历
          </NavBar>
          <NoticeBar icon={null} className={style.info}>填写详细简历，企业更容易相中你哟~</NoticeBar>
        </div>

        <div className={style.resume}>
          <div className={style.headUpload}>
            <div
              className={style.headBox}
              style={{backgroundImage: `url(${this.props.user.portrait_url || userDefaultHead})`}}>
              <HeadPortrait
                className={style.headPro}
                onChange={this.handleHeadChange} />
            </div>
            <div className={style.headinfo}>请上传头像</div>
          </div>
          <WhiteSpace size="lg" />

          <Card full style={{padding: 0}}>
            <Card.Header
              thumb={<i className={style.cardi} />}
              title={<span className={style.cardt}>基本信息</span>}
              extra={<i className={style.cardExtra}>必填</i>} />
            <List>
              <InputItem
                {...getFieldProps('user_name', {
                  initialValue: user.user_name,
                })}
                clear>
                姓名
              </InputItem>
              <Gender
                {...getFieldProps('gender', {
                  initialValue: [user.gender],
                })}
                title="性别" />
              <PurposePost
                {...getFieldProps('purpose_post_ids', {
                  initialValue: resume.purpose_post_ids,
                })}
                title="期望职位" />
            </List>
          </Card>
          <WhiteSpace size="lg" />

          <Card full style={{padding: 0}}>
            <Card.Header
              thumb={<i className={style.cardi} />}
              title={<span className={style.cardt}>详细资料</span>}
              extra={
                <i className={style.cardExtra}>
                  <SvgIcon icon={iconEdit} className={style.icon} />
                  编辑
                </i>}
              />
            <List>
              <DatePicker
                {...getFieldProps('birthday', {
                  initialValue: moment((user.birthday && user.birthday !== '0000-00-00') ? user.birthday : new Date()),
                })}
                mode="date"
                format={val => val.format('YYYY-MM-DD')}
                minDate={minDate}
                maxDate={maxDate}>
                <List.Item arrow="horizontal">生日</List.Item>
              </DatePicker>
              <City
                {...getFieldProps('hometown', {
                  initialValue: user.hometown_cityid !== '0'
                    ? [user.hometown_provinceid, user.hometown_cityid] : null,
                })}
                title="家乡" />
              <Salary
                {...getFieldProps('salary_range', {
                  initialValue: [resume.salary_range],
                })}
                title="薪资要求" />
              <JobWorkYear
                {...getFieldProps('join_work_year', {
                  initialValue: [resume.join_work_year],
                })}
                title="参加工作年份" />
              <JobStatus
                {...getFieldProps('job_status', {
                  initialValue: [resume.job_status],
                })}
                title="求职状态" />
              <InputItem
                {...getFieldProps('wechat_no', {
                  initialValue: user.wechat_no,
                })}
                clear>
                微信
              </InputItem>
            </List>
          </Card>
          <WhiteSpace size="lg" />

          <List>
            <TextareaItem
              {...getFieldProps('desc', {
                initialValue: resume.desc,
              })}
              title="自我描述"
              placeholder="无"
              autoFocus
              autoHeight
              clear />
          </List>
          <WhiteSpace size="lg" />

          <List>
            <PurposePost
              {...getFieldProps('do_post_ids', {
                initialValue: resume.done_post_ids,
              })}
              maxLength={12}
              format={() => {}}
              title="我做过"
              subtitle={(keys) => (
                <span>{keys && keys.map(key => (
                  <Tag key={key} disabled className={style.tags}>
                    {this.post_list.filter(item => item.id === key)[0].name}
                  </Tag>
                ))}</span>
              )}>
              <List.Item className={style.ido} />
            </PurposePost>
            <List.Item>
              <Steps current={-1}>{resume.work_experience ? resume.work_experience.map(key => (
                <Steps.Step
                  key={key}
                  icon={<i className={style.stepIcon} />}
                  onClick={() => this.props.history.push(`resume/work/${resume.id}/${key}`)}
                  description={(
                    <div className={style.stepMain}>
                      {workExperience.list[key].start_year} - {workExperience.list[key].end_year}
                      <span>{workExperience.list[key].job_name}</span>
                      {workExperience.list[key].work_content}
                    </div>
                  )} />
              )) : <Steps.Step />}</Steps>
            </List.Item>
            <Link to={`resume/work/${resume.id}`}>
              <List.Item>
                <div className={style.listLink}>+ 完善工作经历，增加应聘竞争力</div>
              </List.Item>
            </Link>
          </List>
          <WhiteSpace size="lg" />

          <List>
            <Degree
              {...getFieldProps('degree', {
                initialValue: [resume.degree],
              })}
              title="学历" />
            <List.Item>
              <Steps current={-1}>{resume.education_experience ? resume.education_experience.map(key => (
                <Steps.Step
                  key={key}
                  icon={<i className={style.stepIcon} />}
                  onClick={() => this.props.history.push(`resume/education/${resume.id}/${key}`)}
                  description={(
                    <div className={style.stepMain}>
                      {educationExperience.list[key].start_year} - {educationExperience.list[key].end_year}
                      <span>{educationExperience.list[key].school_name}</span>
                      {educationExperience.list[key].major_name}
                    </div>
                  )} />
              )) : <Steps.Step />}</Steps>
            </List.Item>
            <Link to={`resume/education/${resume.id}`}>
              <List.Item>
                <div className={style.listLink}>+ 完善教育经历，增加应聘竞争力</div>
              </List.Item>
            </Link>
          </List>
          <WhiteSpace size="lg" />

          <Card className={style.imageList}>
            <Photo />
            <i style={{clear: 'both', display: 'block', height: 1, marginTop: -1}} />
          </Card>
          <WhiteSpace size="lg" />

          <List>
            <List.Item
              extra={(
                <Switch
                  {...getFieldProps('is_hidden', {
                    initialValue: parseInt(resume.is_hidden, 10),
                    valuePropName: 'checked',
                  })}
                  platform="ios" />
              )}>
              隐藏简历
            </List.Item>
          </List>

        </div>
      </div>
    )
  }
}

export default Resume
