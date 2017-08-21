import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { uploadPhoto, deletePhoto } from '@actions/photo'
import { ImagePicker } from 'antd-mobile'

@connect(state => {
  return {
    resume: state.resume,
    photo: state.photo,
  }
})
class Photo extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func,
    resume: PropTypes.object,
    photo: PropTypes.object,
  }

  handleImagePickerChange = (list, action, index) => {
    if (action === 'add') {
      const image = list[list.length - 1]
      this.zipImage(image.url, image.orientation, (_, blob) => {
        this.props.dispatch(uploadPhoto({
          is_save: 1,
          image: blob,
        }))
      })
    }
    if (action === 'remove') {
      this.props.dispatch(deletePhoto({
        photo_id: this.props.resume.photo[index],
      }))
    }
  }

  zipImage = (base64, orientation, callback) => {
    const side = 640
    const ctx = document.createElement('canvas').getContext('2d')
    const img = document.createElement('img')
    function toUint8Array(base64) {
      const data = window.atob(base64.split(',')[1])
      var cache = new Uint8Array(data.length)
      for (var i = 0; i < data.length; i++) {
        cache[i] = data.charCodeAt(i)
      }
      return cache
    }
    img.onload = () => {
      const { naturalWidth, naturalHeight } = img
      const horizontal = naturalWidth > naturalHeight
      const shortSide = horizontal ? naturalHeight : naturalWidth
      const destWidth = shortSide > side ? side : shortSide
      ctx.canvas.width = ctx.canvas.height = destWidth
      ctx.clearRect(0, 0, destWidth, destWidth)
      switch (orientation) {
        case 6:
          ctx.translate(destWidth, 0)
          ctx.rotate(90 * Math.PI / 180)
          break
        case 3:
          ctx.translate(destWidth, destWidth)
          ctx.rotate(180 * Math.PI / 180)
          break
        case 8:
          ctx.translate(0, destWidth)
          ctx.rotate(270 * Math.PI / 180)
          break
        default:
      }
      ctx.drawImage(
        img,
        horizontal ? (naturalWidth - naturalHeight) / 2 : 0,
        horizontal ? 0 : (naturalHeight - naturalWidth) / 2,
        shortSide, shortSide, 0, 0, destWidth, destWidth,
      )
      const resultBase64 = ctx.canvas.toDataURL('image/jpeg', 0.32)
      var blob = new Blob([toUint8Array(resultBase64)], {
        type: 'image/jpeg',
        endings: 'transparent',
      })
      callback(resultBase64, blob)
    }
    img.src = base64
  }

  render() {
    const { resume, photo } = this.props

    return (
      <ImagePicker
        files={resume.photo && resume.photo.map((key) => ({
          ...photo.list[key],
          url: photo.list[key].thumb_url,
        }))}
        onChange={this.handleImagePickerChange}
        // onImageClick={(index, fs) => console.log(index, fs)}
        selectable
      />
    )
  }
}

export default Photo
