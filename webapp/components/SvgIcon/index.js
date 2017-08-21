// 清酒稻香
import React from 'react'
import PropTypes from 'prop-types'

class SvgIcon extends React.Component {
  static propTypes = {
    icon: PropTypes.shape({
      id: PropTypes.string,
      viewBox: PropTypes.string,
    }),
    color: PropTypes.string,
    fill: PropTypes.string,
  }

  render() {
    const { icon, fill, color } = this.props
    return (
      <svg {...this.props} icon={null} viewBox={icon.viewBox} width={24}>
        <use xlinkHref={`#${icon.id}`} fill={fill || color || '#888'} />
      </svg>
    )
  }
}

export default SvgIcon
