/**
 * Created by huangchao on 2017/7/11.
 */
import {
  POST_DETAIL_GET,
  POST_DETAIL_CANCEL_COLIECT,
  POST_DETAIL_ADD_COLIECT,
  POST_DETAIL_WILL_UNMOUNT,
} from '../actions/post_detail'

export default (state = {}, action) => {
  switch (action.type) {
    case POST_DETAIL_GET:
      return {
        ...state,
        ...action.data,
      }
    case POST_DETAIL_CANCEL_COLIECT:
      return {
        ...state,
        job_info: {
          ...state.job_info,
          collect: 0,
        },
      }
    case POST_DETAIL_ADD_COLIECT:
      return {
        ...state,
        job_info: {
          ...state.job_info,
          collect: 1,
        },
      }
    case POST_DETAIL_WILL_UNMOUNT:
      return {
        state: {},
      }
    default:
      return state
  }
}
