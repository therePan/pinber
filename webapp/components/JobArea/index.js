import React from 'react'
import PropTypes from 'prop-types'
import style from './style.less'

class JobArea extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    position: PropTypes.string,
    distant: PropTypes.string,
    detailsPositon: PropTypes.array,
  }
  render() {
    // const {title, position, distant, list} = this.props;
    return (
      <div className={style.CardContent}>
        <div className={style.top}>
          {this.props.title}
          {this.props.position
            ? <span className={style.position}>{this.props.position}：距我<a>{this.props.distant}</a></span>
            : null}
        </div>
        <ul className={style.content}>
          {this.props.detailsPositon.map((index, elem) => {
            return (this.props.position
              ? <li key={'position' + elem}>{index}</li>
              : <li key={'job' + elem}>{elem + 1}.{index}</li>)
          })}
        </ul>
        {this.props.position ? null : <div className={style.getDetails}>展开</div>}
      </div>
    )
  }
}
export default JobArea
