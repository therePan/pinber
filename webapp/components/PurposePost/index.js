import React from 'react'
import PropTypes from 'prop-types'
import style from './style.less'
import { Modal, List, NavBar, Button, Toast } from 'antd-mobile'

const title = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.func,
  PropTypes.element,
])

class PurposePost extends React.Component {
  static propTypes = {
    data: PropTypes.array,
    children: PropTypes.element,
    title,
    subtitle: title,
    maxLength: PropTypes.number,
    value: PropTypes.array,
    onChange: PropTypes.func,
    extra: PropTypes.string,
    format: PropTypes.func,
  }

  static defaultProps = {
    maxLength: 5,
    value: [],
  }

  static contextTypes = {
    router: PropTypes.object,
  }

  state = {
    actionTitle: '1',
    selected: [],
  }

  constructor(props) {
    super(props)
    this.hash = parseInt(Math.random() * 1e12).toString(36)
  }

  beginEditing = () => {
    this.context.router.history.push(`${this.context.router.history.location.pathname}#-post-${this.hash}`)
    this.setState({
      selected: this.props.value,
    })
  }

  handleChange = () => {
    this.props.onChange(this.state.selected, this.dataList)
    this.context.router.history.go(-1)
  }

  handleTitle = (key) => {
    const _list = this.refs.list
    const _listI = this.refs[`list_${key}`]
    _list.scrollTop = _listI.offsetTop - _list.offsetTop
    this.setState({
      actionTitle: key,
    })
  }

  scrollEvent = (ev) => {
    const keys = Object.keys(this.refs).filter(key => /list_\d+/.test(key))
    const _list = this.refs.list
    for (let i = keys.length - 1; i >= 0; i--) {
      if (this.refs.list.scrollTop > this.refs[keys[i]].offsetTop - _list.offsetTop - 100) {
        const key = keys[i].match(/list_(\d+)/)[1]
        if (key !== this.state.actionTitle) {
          this.setState({
            actionTitle: key,
          })
        }
        return
      }
    }
  }

  itemSelect = (key) => {
    if (this.state.selected.length < this.props.maxLength) {
      this.setState({
        selected: [
          ...this.state.selected,
          key,
        ],
      })
    } else {
      Toast.info(`最多只能选择${this.props.maxLength}个哦!`, 1)
    }
  }

  itemCancel = (key) => {
    let result = [...this.state.selected]
    result.splice(result.indexOf(key), 1)
    this.setState({
      selected: result,
    })
  }

  format = (value) => value.map(key => this.dataList[key]).join(',')

  componentWillUpdate() {
    this.refs.list && this.refs.list.removeEventListener('scroll', this.scrollEvent)
  }

  componentDidUpdate() {
    this.refs.list && this.refs.list.addEventListener('scroll', this.scrollEvent)
  }

  componentWillUnmount() {
    this.refs.list && this.refs.list.removeEventListener('scroll', this.scrollEvent)
  }

  componentWillMount() {
    this.dataList = {}
    this.props.data.map(list => list.post_list.map(item => {
      this.dataList[item.id] = item.name
    }))
  }

  render() {
    const { title = '意向职位', subtitle } = this.props

    const Purpose = (
      <div>
        {title}
        {subtitle instanceof Function ? subtitle(this.props.value) : subtitle}
        <Modal
          visible={this.context.router.history.location.hash === `#-post-${this.hash}`}>
          <div className={style.mbox}>
            <NavBar
              mode="dark"
              rightContent={<span className={style.submit} onClick={this.handleChange}>保存</span>}
              onLeftClick={() => this.context.router.history.go(-1)}>
              {title}
            </NavBar>
            {this.state.selected.length
              ? <div className={style.hot}>{this.state.selected.map(key => (
                <Button
                  className={style.hotItem}
                  key={key} size="small"
                  onClick={() => this.itemCancel(key)}>
                  {this.dataList[key]}
                </Button>
              ))}</div>
              : null}
            <div className={style.listBox} ref="main"
              style={{height: `calc(100% - ${this.refs.main && this.refs.main.offsetTop}px)`}}>
              <List className={style.postTitle}>{this.props.data.map(list => (
                <List.Item
                  key={list.id} className={list.id === this.state.actionTitle ? style.titAction : style.tit}
                  onClick={() => this.handleTitle(list.id)}>{list.name}</List.Item>
              ))}</List>
              <div className={style.postList} ref="list">{this.props.data.map(list => (
                <div className={style.npost} key={list.id} ref={`list_${list.id}`}>{list.post_list.map(item => (
                  <Button
                    className={style.item}
                    key={item.id} size="small"
                    type={this.state.selected.indexOf(item.id) >= 0 ? 'primary' : null}
                    onClick={() => this.state.selected.indexOf(item.id) >= 0
                      ? this.itemCancel(item.id) : this.itemSelect(item.id)}>
                    {item.name}
                  </Button>
                ))}</div>
              ))}</div>
            </div>
          </div>
        </Modal>
      </div>
    )

    const extra = this.props.value.length ? (this.props.format || this.format)(this.props.value) : this.props.extra
    return React.cloneElement(this.props.children, {
      onClick: this.beginEditing,
      ...(this.props.children.type === List.Item ? {
        extra,
      } : {}),
    }, Purpose)
  }
}

export default PurposePost
