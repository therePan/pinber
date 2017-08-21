import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Carousel } from 'antd-mobile'

@connect(state => {
  return {
    ads: state.ads,
  }
})
class Banner extends React.Component {
  static propTypes = {
    ads: PropTypes.object,
  }
  state = {
    initialHeight: 200,
  }
  clickLink = (val) => {
    window.location.href = val
  }
  render() {
    const hProp = this.state.initialHeight ? { height: this.state.initialHeight } : {}
    return (
      <Carousel
        className="my-carousel"
        infinite
        dots={false}
        selectedIndex={0}
        swipeSpeed={35}
        // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
        // afterChange={index => console.log('slide to', index)}
      >
        {this.props.ads.list && this.props.ads.list.map((ii, index) => (
          <div key={index} style={hProp} onClick={() => { this.clickLink(ii.img_src) }}>
            <img
              src={ii.img_path}
              alt="icon"
              style={{width: '100%'}}
              onLoad={() => {
                // fire window resize event to change height
                window.dispatchEvent(new Event('resize'))
                this.setState({
                  initialHeight: null,
                })
              }}
            />
          </div>
        ))}
      </Carousel>
    )
  }
}

export default Banner
