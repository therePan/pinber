import React from 'react'
import PropTypes from 'prop-types'
import style from './style.less'
class BossAbout extends React.Component {
  static propTypes = {
    // history: PropTypes.object,
    benefit_label_list: PropTypes.object,
  }
  render() {
    // console.log(this.props)
    const label = this.props.benefit_label_list || {}
    return (
      <div className={style.boss_about_wrap}>
        <div className={style.title}>关于本店</div>
        <ul>
          {
            Object.keys(label).map((v) => {
              return <li key={v}>{label[v]}</li>
            })
          }
        </ul>
      </div>
    )
  }
}
export default BossAbout
