// 清酒稻香
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { interviewList, interviewDeal } from '@actions/interview'
import JobInterviewCard from '../../components/JobInterviewCard'
import style from './style.less'
import { NavBar, Tabs } from 'antd-mobile'

@connect(state => {
  return {
    user: state.user,
    interview: state.interview,
  }
})
class Interview extends React.Component {
  static propTypes = {
    history: PropTypes.object,
    dispatch: PropTypes.func,
    interview: PropTypes.object,
  }

  componentWillMount() {
    this.props.dispatch(interviewList({
      status: 1, // 1：未处理
    }))
    this.props.dispatch(interviewList({
      status: 2, // 2：待面试
    }))
  }

  // agree refuse
  handleInterview = (interviewId, dealType) => {
    this.props.dispatch(interviewDeal({
      interview_id: interviewId,
      deal_type: dealType,
    }))
  }

  render() {
    const { index_1: index1, index_2: index2, list } = this.props.interview
    console.log(index1, index2, list)

    return (
      <div>
        <div className={style.navbar}>
          <NavBar
            mode="dark"
            onLeftClick={() => this.props.history.go(-1)}>
            我的面试
          </NavBar>
        </div>

        <Tabs className={style.tabs}>
          <Tabs.TabPane tab="未处理" key="1">
            <div className={style.list}>
              {index1 && index1.map(key => (
                <JobInterviewCard
                  key={key}
                  data={list[key]}
                  onChange={this.handleInterview}
                  show />
              ))}
            </div>
          </Tabs.TabPane>
          <Tabs.TabPane tab="待面试" key="2">
            <div className={style.list}>
              {index2 && index2.map(key => (
                <JobInterviewCard
                  key={key}
                  data={list[key]} />
              ))}
            </div>
          </Tabs.TabPane>
        </Tabs>
      </div>
    )
  }
}

export default Interview
