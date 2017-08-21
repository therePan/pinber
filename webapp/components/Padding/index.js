import React from 'react'
import PropTypes from 'prop-types'

class Padding extends React.Component {
  static propTypes = {
    discribe: PropTypes.string,
  }
  render() {
    return (
      <div style={{width: '100%', height: '.30rem', lineHeight: '.30rem', fontSize: '.24rem'}}>
        {this.props.discribe}
      </div>
    )
  }
}
export default Padding
