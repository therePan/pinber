import {
  COLLECTPOST_COLLECT_POST_INIT,
  COLLECTPOST_COLLECT_POST,
  COLLECTPOST_DEL_POST,
  COLLECTPOST_COLLECT_POST_LODING,
  COLLECTPOST_ADD_POST,
  COLLECTPOST_COLLECT_POST_ISLODING,
} from '../actions/collect_post'

const initState = { // 收藏模块 user/collect_list
  type: 1,
  page: 1,
  refreshing: false,
  isLoading: false,
  collect_list: [],
  page_size: 10,
  page_count: null,
  collect_count: null,
}

export default (state = initState, action) => {
  switch (action.type) {
    case COLLECTPOST_COLLECT_POST_LODING:
      return {
        ...state,
        refreshing: true,
      }
    case COLLECTPOST_COLLECT_POST_ISLODING:
      return {
        ...state,
        isLoading: true,
      }
    case COLLECTPOST_COLLECT_POST_INIT:
      return {
        ...state,
        ...action.data,
        page: 1,
      }
    case COLLECTPOST_COLLECT_POST:
      return {
        ...state,
        ...action.data,
        page: 1,
        refreshing: false,
      }
    case COLLECTPOST_ADD_POST:
      return {
        ...state,
        collect_list: [
          ...state.collect_list,
          ...action.data.collect_list,
        ],
        isLoading: false,
        page: action.args.page,
      }
    case COLLECTPOST_DEL_POST:
      return {
        ...state,
        collect_list: state.collect_list.filter((v) => {
          return v.collect_id !== action.args.collect_id
        }),
      }
    default:
      return state
  }
}
