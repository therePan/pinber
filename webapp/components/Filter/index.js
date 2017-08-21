import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Menu, ActivityIndicator, Icon } from 'antd-mobile'
import style from './style.less'
import { jobRecomendList } from '@actions/job'

@connect(state => {
  return {
    job: state.job,
    business: state.configuration.business,
    ads: state.ads,
    city_id: state.user.city_id,
  }
})
class Filter extends React.Component {
  static propTypes = {
    // choosecity: PropTypes.object,
    business: PropTypes.object,
    job: PropTypes.object,
    city_id: PropTypes.string,
    dispatch: PropTypes.func,
  }
  constructor(props) {
    super(props)
    this.state = {
      initData1: '',
      initData2: '',
      initData3: '',
      show1: false,
      show2: false,
      show3: false,
      title1: '全部商区',
      title2: '薪资范围',
      title3: '智能排序',
    }
  }
  onChange1 = (value, data, title) => {
    let label = ''
    data.forEach((dataItem) => {
      if (dataItem.value === value[0]) {
        label = dataItem.label
      }
    })
    this.props.dispatch(jobRecomendList({
      page: 1,
      city_id: this.props.job.city_id,
      area_id: value[0],
      order_by: this.props.job.order_by,
      page_size: this.props.job.page_size,
      salary_range: this.props.job.salary_range,
      post_type_id: this.props.job.post_type_id || '',
      title1: label,
    }))
    this.closeMenu()
  }
  onChange2 = (value, data, title) => {
    let label = ''
    data.forEach((dataItem) => {
      if (dataItem.value === value[0]) {
        label = dataItem.label
      }
    })
    this.props.dispatch(jobRecomendList({
      page: 1,
      city_id: this.props.job.city_id,
      page_size: this.props.job.page_size,
      salary_range: value[0],
      area_id: this.props.job.area_id,
      post_type_id: this.props.job.post_type_id || '',
      order_by: this.props.job.order_by,
      title2: label,
    }))
    this.closeMenu()
  }

  onChange3 = (value, data, title) => {
    let label = ''
    data.forEach((dataItem) => {
      if (dataItem.value === value[0]) {
        label = dataItem.label
      }
    })
    this.props.dispatch(jobRecomendList({
      page: 1,
      page_size: this.props.job.page_size,
      city_id: this.props.job.city_id,
      order_by: value[0],
      post_type_id: this.props.job.post_type_id || '',
      salary_range: this.props.job.salary_range,
      area_id: this.props.job.area_id,
      title3: label,
    }))
    this.closeMenu()
  }

  handleClick = (e, keys, data, initData) => {
    e.preventDefault()
    this.setState({
      [keys]: !this.state[keys],
    })
    if (!this.state[initData]) {
      this.setState({
        [initData]: data,
      })
    }
  }
  closeMenu = () => {
    this.setState({
      show1: false,
      show2: false,
      show3: false,
    })
  }
  showBuiness = () => {
    const arr = [
      {
        area_name: '全部商圈',
        id: '',
      },
      ...this.props.business.list,
    ]
    return arr.map((elem, index) => (
      {
        label: elem.area_name,
        value: elem.id,
      }
    ))
  }
  showSalary = () => {
    const salary = JSON.parse(localStorage['pinber:config']).salary // 薪资数据
    let arr = Object.keys(salary).map((elem, index) => (
      {
        label: salary[elem],
        value: elem,
      }
    ))
    arr.unshift({
      label: '不限',
      value: '',
    })
    return arr
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.job !== nextProps.job) {
      this.setState({
        title1: nextProps.job.title1,
        title2: nextProps.job.title2,
        title3: nextProps.job.title3,
      })
    }
    if (this.props.job.city_id !== nextProps.city_id) {
      this.setState({
        title1: '全部商圈',
        city_id: nextProps.city_id,
        title2: '薪资范围',
        title3: '智能排序',
      })
    }
  }

  render() {
    const { initData1, initData2, initData3, show1, show2, show3 } = this.state
    const business = this.props.business.list ? this.showBuiness() : null
    const salarys = JSON.parse(localStorage['pinber:config']).salary ? this.showSalary() : null
    const intelligent = [
      {
        label: '智能排序',
        value: 0,
      },
      {
        label: '离我最近',
        value: 1,
      },
      {
        label: '最近发布',
        value: 2,
      },
    ]
    const menuEl = (
      <Menu
        className="foo-menu"
        data={business}
        value={['1', '3']}
        level="1"
        onChange={(value) => this.onChange1(value, business, 'title1')}
        height={document.documentElement.clientHeight * 0.6}
      />
    )
    const menuE2 = (
      <Menu
        className="foo-menu"
        data={salarys}
        level="1"
        onChange={(value) => this.onChange2(value, salarys, 'title2')}
        height={document.documentElement.clientHeight * 0.55}
      />
    )
    const menuE3 = (
      <Menu
        className="foo-menu"
        data={intelligent}
        value={['1', '3']}
        onChange={(value) => this.onChange3(value, intelligent, 'title3')}
        level="1"
        height={document.documentElement.clientHeight * 0.3}
      />
    )
    const loadingEl = (
      <div style={{
        width: '100%',
        height: document.documentElement.clientHeight * 0.6,
        display: 'flex',
        justifyContent: 'center',
      }}>
        <ActivityIndicator size="large" />
      </div>
    )
    return (
      <div>
        <div className={style.filterBar}>
          <span
            onClick={(e) => { this.handleClick(e, 'show1', business, 'initData1') }}
            className={show1 ? style.hadFilter : ''}>
            <div className={style.area}>{this.state.title1}</div>
            <div className={style.icon}><Icon type={show1 ? 'up' : 'down'} /></div>
          </span>
          <span
            onClick={(e) => { this.handleClick(e, 'show2', salarys, 'initData2') }}
            className={show2 ? style.hadFilter : ''}>
            <div className={style.area}>{this.state.title2}</div>
            <div className={style.icon}><Icon type={show2 ? 'up' : 'down'} /></div>
          </span>
          <span
            onClick={(e) => { this.handleClick(e, 'show3', intelligent, 'initData3') }}
            className={show3 ? style.hadFilter : ''}>
            <div className={style.area}>{this.state.title3}</div>
            <div className={style.icon}><Icon type={show3 ? 'up' : 'down'} /></div>
          </span>
        </div>
        <div style={show1 || show2 || show3 ? {display: 'block'} : {display: 'none'}}>
          <div className={style.opcityCon} onClick={() => this.closeMenu()}>
            <div className={style.balckCon} />
          </div>
          <div className={style.filterCon}>
            {show1 ? initData1 ? menuEl : loadingEl : null}
            {show2 ? initData2 ? menuE2 : loadingEl : null}
            {show3 ? initData3 ? menuE3 : loadingEl : null}
          </div>
        </div>
      </div>
    )
  }
}

export default Filter
