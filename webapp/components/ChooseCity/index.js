import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
import citys from '@helper/province'
import style from './style.less'

// import { province } from 'antd-mobile-demo-data'
import { Modal, SearchBar, NavBar, ListView, List } from 'antd-mobile'
const { Item } = List

const cityTemp = {}
citys.map(function(item, index) {
  item.city_list.map(function(a, b) {
    let letter = a.city_pinyin_code.substring(0, 1).toLocaleUpperCase()
    cityTemp[letter] = cityTemp[letter] || []
    cityTemp[letter].push({
      label: a.city_name,
      spell: `${a.city_pinyin_code}${a.city_name}`,
      value: a.id,
    })
  })
})
const cityResult = {}
Object.keys(cityTemp).sort().map(char => {
  cityResult[char] = cityTemp[char]
})
var dataBlob = {}

// @connect(state => {
//   return {
//     user: state.user,
//   }
// })
@connect(state => {
  return {
    user: state.user,
  }
})
class ChooseCity extends React.Component {
  static propTypes = {
    location: PropTypes.object,
    // dispatch: PropTypes.func,
    user: PropTypes.object,
    // job: PropTypes.object,
    // ads: PropTypes.object,
    // business: PropTypes.object,
    closePop: PropTypes.func,
    choose: PropTypes.func,
    // match: PropTypes.object,
  }
  constructor(props) {
    super(props)
    const getSectionData = (dataBlob, sectionID) => dataBlob[sectionID]
    const getRowData = (dataBlob, sectionID, rowID) => dataBlob[rowID]

    const dataSource = new ListView.DataSource({
      getRowData,
      getSectionHeaderData: getSectionData,
      rowHasChanged: (row1, row2) => row1 !== row2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
    })

    this.state = {
      dataSource: this.createDs(dataSource, cityResult),
      headerPressCount: 0,
      title: dataBlob[this.props.user.city_id],
      city_id: this.props.user.city_id,
      positionname: '',
      positionid: '',
    }
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.user.position !== nextProps.user.position) {
      this.setState({
        positionname: nextProps.user.position.address.city,
        positionid: nextProps.user.position.address.city_id,
      })
    }
  }
  createDs = (ds, cityResult) => {
    dataBlob = {}
    const sectionIDs = []
    const rowIDs = []
    Object.keys(cityResult).forEach((item, index) => {
      sectionIDs.push(item)
      dataBlob[item] = item
      rowIDs[index] = []

      cityResult[item].forEach((jj) => {
        rowIDs[index].push(jj.value)
        dataBlob[jj.value] = jj.label
      })
    })
    return ds.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs)
  }

  onSearch = (val) => {
    const pd = { ...cityResult }
    Object.keys(pd).forEach((item) => {
      pd[item] = pd[item].filter(jj => jj.spell.toLocaleLowerCase().indexOf(val) > -1)
    })
    this.setState({
      inputValue: val,
      dataSource: this.createDs(this.state.dataSource, pd),
    })
  }

  onClicked = (key, title) => {
    this.props.closePop()
    this.props.choose(key, title)
    this.setState({
      title: title,
    })
  }

  hotCity = () => {
    const hotCitys = JSON.parse(localStorage['pinber:config']).hot_city_list || {}
    return Object.keys(hotCitys).map((item, index) => (
      <li key={item} onClick={() => { this.onClicked(item, hotCitys[item]) }}>{hotCitys[item]}</li>
    ))
  }
  render() {
    return (
      <Modal
        visible={this.props.location.hash === '#-choosecity'}
        footer={[{ text: '确定' }]}
      >
        <div className={style.content}>
          <NavBar
            mode="dark"
            onLeftClick={() => { this.props.closePop() }}
          >
            请选择目标城市
          </NavBar>
          <SearchBar
            value={this.state.inputValue}
            placeholder="Search"
            onChange={this.onSearch}
            onClear={() => { console.log('onClear') }}
            showCancelButton
          />
          <div className={style.contain}>
            <ListView.IndexedList
              dataSource={this.state.dataSource}
              renderHeader={() => (
                <div className={style.top}>
                  <div className={style.presentCity}>当前城市：<span>{this.state.title}</span></div>
                  <div className={style.presentCity}>
                    定位城市：
                    {this.props.user.position
                      ? <span onClick={() => { this.onClicked(this.state.positionid, this.state.positionname) }}>
                        {this.state.positionname}
                      </span> : <span />
                    }
                  </div>
                  <div className={style.hotCity}>
                    <span>人气城市</span>
                    <ul className={style.hotList}>
                      { this.hotCity() }
                    </ul>
                  </div>
                </div>
              )}
              renderFooter={() => <span>custom footer</span>}
              renderSectionHeader={sectionData => (<div className="ih">{sectionData}</div>)}
              renderRow={(title, index, key) => (
                <Item onClick={() => { this.onClicked(key, title) }}>{title}</Item>
              )}
              style={{
                height: 'calc(100vh - 2rem)', // document.documentElement.clientHeight * 3 / 4,
              }}
              quickSearchBarStyle={{
                position: 'absolute',
                top: '2rem',
              }}
              delayTime={30}
            />
          </div>
        </div>
      </Modal>
    )
  }
}

export default ChooseCity
