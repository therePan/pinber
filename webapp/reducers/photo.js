// 清酒稻香
import {
  PHOTO_UPLOAD_PHOTO,
  PHOTO_DELETE_PHOTO,
} from '../actions/photo'
import {
  RESUME_GET_INFO,
} from '../actions/resume'

const initialState = {
  list: {
    // id: {
    //   id: null,
    //   img_url: null,
    //   thumb_url: null,
    // }
  },
}

export default (state = initialState, action) => {
  switch (action.type) {
    case RESUME_GET_INFO:
      let list = state.list || {}
      action.resume.photo.map(item => {
        list[item.id] = {
          ...(list[item.id] || {}),
          ...item,
        }
      })
      return {
        ...state,
        list,
      }
    case PHOTO_UPLOAD_PHOTO:
      return {
        ...state,
        list: {
          ...state.list,
          [action.photo.id]: action.photo,
        },
      }
    case PHOTO_DELETE_PHOTO:
      return {
        ...state,
      }
    default:
      return state
  }
}
