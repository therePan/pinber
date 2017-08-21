import {
  USER_GET_INFO,
  USER_UPLOAD_HEAD,
  USER_UPDATE_MOBILE,
  USER_UPDATE_INFO,
  USER_GET_POSITION,
  USER_INITAL_RESUME,
} from '../actions/user'
import {
  COLLECTSTORE_DEL_COLLECT, // 收藏店铺里的取消收藏
} from '../actions/collect_store'
import {
  COLLECTPOST_DEL_POST, // 收藏职位里的取消收藏
} from '../actions/collect_post'
import {
  STORE_DETAIL_CANCEL_COLIECT, // 店铺详情页取消收藏
  STORE_DETAIL_ADD_COLIECT, // 店铺详情页添加收藏
} from '../actions/store_detail'
import {
  POST_DETAIL_CANCEL_COLIECT, // 职位详情页取消收藏
  POST_DETAIL_ADD_COLIECT, // 职位详情页添加收藏
} from '../actions/post_detail'

export default (state = {}, action) => {
  switch (action.type) {
    case USER_INITAL_RESUME:
      return {
        ...state,
        ...action.args,
        resume_percent: 55,
      }
    case USER_GET_INFO:
      return {
        ...state,
        ...action.user,
      }
    case USER_UPDATE_INFO:
      return {
        ...state,
        ...action.args,
      }
    case USER_UPLOAD_HEAD:
      return {
        ...state,
        portrait_url: action.user.thumb_url,
      }
    case USER_UPDATE_MOBILE:
      return {
        ...state,
        mobile: action.args.mobile,
      }
    case COLLECTSTORE_DEL_COLLECT:
      return {
        ...state,
        collect_store_count: Number(state.collect_store_count) - 1,
      }
    case STORE_DETAIL_CANCEL_COLIECT:
      return {
        ...state,
        collect_store_count: Number(state.collect_store_count) - 1,
      }
    case STORE_DETAIL_ADD_COLIECT:
      return {
        ...state,
        collect_store_count: Number(state.collect_store_count) + 1,
      }
    case COLLECTPOST_DEL_POST:
      return {
        ...state,
        collect_job_count: Number(state.collect_job_count) - 1,
      }
    case POST_DETAIL_CANCEL_COLIECT:
      return {
        ...state,
        collect_job_count: Number(state.collect_job_count) - 1,
      }
    case POST_DETAIL_ADD_COLIECT:
      return {
        ...state,
        collect_job_count: Number(state.collect_job_count) + 1,
      }
    case USER_GET_POSITION:
      return {
        ...state,
        position: action.position,
      }
    default:
      return state
  }
}
