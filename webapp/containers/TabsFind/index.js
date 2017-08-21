import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getBusiness } from '@actions/configuration'
import { jobRecomendList } from '@actions/job'
import { updateInfo } from '@actions/user'
import { getAdv } from '@actions/ads'
import { updateInfo as updateInfoResume, getInfo } from '@actions/resume'
import ShowList from '../../components/ShowList'
import ChooseCity from '../../components/ChooseCity'
import Filter from '../../components/Filter'
import SvgIcon from '../../components/SvgIcon'
import PurposePost from '../../inputs/PurposePost'
import iconDown from '@static/icon_down.svg'
import { NavBar, Icon } from 'antd-mobile'
import citys from '@helper/province'
import style from './style.less'

@connect(state => {
  return {
    user: state.user,
    job: state.job,
    business: state.configuration.business,
    resume: state.resume,
    ads: state.ads,
    position: state.user.position,
  }
})

class TabsFind extends React.Component {
  static propTypes = {
    // choosecity: PropTypes.object,
    history: PropTypes.object,
    // location: PropTypes.object,
    job: PropTypes.object,
    dispatch: PropTypes.func,
    user: PropTypes.object,
    resume: PropTypes.object,
    ads: PropTypes.object,
    business: PropTypes.object,
  }
  static contextTypes = {
    router: PropTypes.shape({
      history: PropTypes.object.isRequired,
    }),
  }
  state = {
    salary: JSON.parse(localStorage['pinber:config']).salary,
    bShowJosb: false,
    // modal1: false,
    city: '0',
    title: '城市',
    area_id: '',
    salary_range: '',
    order_by: '',
    purjobs: this.props.resume.purpose_post_ids || null,
  }

  componentWillMount() {
    this.postType = JSON.parse(localStorage['pinber:config']).post_type
    this.props.dispatch(getAdv({
      show_position: '1',
    }))
    this.props.dispatch(getInfo())
    this.dataList = {}
    this.postType.map(list => list.post_list.map(item => {
      this.dataList[item.id] = item.name
    }))
    this.props.dispatch(getBusiness({ // 商圈数据请求
      city_id: this.props.user.city_id,
    }))
    citys.map((itme, index) => {
      itme.city_list.map((a, b) => {
        if (a.id === this.props.user.city_id) {
          this.setState({
            title: a.city_name,
          })
        }
      })
    })
  }

  showList = () => {
    return this.props.ads.list.map((e, index) => {
      return <img key={index} src={e.img_path} />
    })
  }

  showID = () => {
    return this.props.business.list.map((e, index) => {
      return <div key={index}>{e.id}</div>
    })
  }

  // selectCity = (city) => {
  //   this.props.history.replace('/select/City', {
  //     location: this.props.location,
  //     city: city,
  //   })
  // }

  JobList = () => {
    let wishjob = JSON.parse(localStorage['pinber:user']).purpose_post
    this.setState({bShowJosb: !this.state.bShowJosb})
    this.setState({jobs: wishjob})
  }

  hideList = () => {
    this.setState({bShowJosb: !this.state.bShowJosb})
  }

  showModal(e) {
    this.props.history.push('/tabs/find#-choosecity')
  }
  closePop = () => {
    this.props.history.go(-1)
  }
  presentCity = (key, titl) => {
    this.setState({
      city: key,
      title: titl,
    })
    this.props.dispatch(getBusiness({ // 商圈数据请求
      city_id: key,
    }))
    this.props.dispatch(updateInfo({ // 改变目标城市
      city_id: key,
    }))
    this.props.dispatch(jobRecomendList({ // 改变目标城市
      title1: '全部商圈',
      title2: '薪资范围',
      title3: '智能排序',
      city_id: key,
      page_size: this.props.job.page_size,
      order_by: this.props.job.order_by,
      salary_range: this.props.job.salary_range,
    }))
  }
  purpostJob = (value, maps) => {
    this.props.dispatch(updateInfoResume({
      purpose_post_ids: value,
      resume_id: this.props.resume.id,
    }))
  }
  purposeFilter = (post, name) => {
    this.props.dispatch(jobRecomendList({
      page_size: this.props.job.page_size,
      city_id: this.props.job.city_id,
      order_by: this.props.job.order_by,
      salary_range: this.props.job.salary_range,
      post_type_id: post,
      area_id: this.props.job.area_id,
      headJob: name,
    }))
    this.hideList()
  }
  render() {
    this.purjob = this.props.resume.purpose_post_ids && this.props.resume.purpose_post_ids.map((a, b) => (
      {[a]: this.dataList[a]}
    ))
    return (
      <div className={style.content}>
        <div className={style.headerContent}>
          <NavBar
            iconName={null}
            leftContent={<span className={style.bar}><span>{ this.state.title }</span> <Icon type="down" /></span>}
            mode="dark"
            onLeftClick={(e) => this.showModal()}
            rightContent={[
              <Icon key="0" type="search" onClick={() => { this.props.history.push('/search') }} />,
              // <Icon key="1" type="ellipsis" />,
            ]}>
            <div className={style.intention}>
              <span onClick={() => this.JobList()}>
                {this.props.job.headJob}
                <SvgIcon icon={iconDown} className={style.icon} color="white" />
              </span>
              <div
                className={style.listContent} style={{display: this.state.bShowJosb ? 'block' : 'none'}}
                onClick={() => this.hideList()} />
              <ul className={style.list} style={{display: this.state.bShowJosb ? 'block' : 'none'}}>
                <li onClick={() => { this.purposeFilter('', '全部职位') }}>
                  全部职位
                </li>
                {this.purjob && this.purjob.map((value, index) => (
                  <li
                    key={Object.keys(value)}
                    onClick={() => { this.purposeFilter(Object.keys(value), value[Object.keys(value)]) }}>
                    {value[Object.keys(value)]}
                  </li>
                ))}
                <PurposePost
                  {...this.props}
                  value={this.props.resume.purpose_post_ids || []}
                  extra="管理意向职位"
                  data={this.postType}
                  onChange={(args, maps) => { this.purpostJob(args, maps) }}
                  format={() => {}}>
                  <span className={style.manegerJob}>管理意向职位</span>
                </PurposePost>
                <div className={style.arrow} />
              </ul>
            </div>
          </NavBar>
          <Filter city={this.state.title} />
        </div>
        <ChooseCity
          // modal1={this.state.modal1}
          {...this.props}
          closePop={() => this.closePop()}
          choose={(cit, titl) => this.presentCity(cit, titl)}
        />
        {this.props.job.job_list ? <ShowList {...this.props} /> : null}
      </div>
    )
  }
}

export default TabsFind
