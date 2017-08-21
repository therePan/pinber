/**
 * Created by huangchao on 2017/7/11.
 */
import {
  STORE_DETAIL_GET,
  STORE_DETAIL_CANCEL_COLIECT,
  STORE_DETAIL_ADD_COLIECT,
  STORE_DETAIL_WILL_UNMOUNT,
} from '../actions/store_detail'

export default (state = {}, action) => {
  switch (action.type) {
    case STORE_DETAIL_GET:
      return {
        ...state,
        ...action.data,
      }
    case STORE_DETAIL_CANCEL_COLIECT:
      return {
        ...state,
        store_info: {
          ...state.store_info,
          is_collect: false,
        },
      }
    case STORE_DETAIL_ADD_COLIECT:
      return {
        ...state,
        store_info: {
          ...state.store_info,
          is_collect: true,
        },
      }
    case STORE_DETAIL_WILL_UNMOUNT:
      return {
        state: {},
      }
    default:
      return state
  }
}
