import {
  COLLECTSTORE_COLLECT_LIST_INIT,
  COLLECTSTORE_COLLECT_LIST,
  COLLECTSTORE_DEL_COLLECT,
  COLLECTSTORE_ADD_STOTRE,
  COLLECTSTORE_COLLECT_LODING,
  COLLECTSTORE_COLLECT_ISLOADING,
} from '../actions/collect_store'

const initState = { // 收藏模块 user/collect_list
  type: 2,
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
    case COLLECTSTORE_COLLECT_LODING:
      return {
        ...state,
        refreshing: true,
      }
    case COLLECTSTORE_COLLECT_ISLOADING:
      return {
        ...state,
        isLoading: true,
      }
    case COLLECTSTORE_COLLECT_LIST_INIT:
      return {
        ...state,
        ...action.data,
        page: 1,
      }
    case COLLECTSTORE_COLLECT_LIST:
      return {
        ...state,
        ...action.data,
        page: 1,
        refreshing: false,
      }
    case COLLECTSTORE_ADD_STOTRE:
      return {
        ...state,
        collect_list: [
          ...state.collect_list,
          ...action.data.collect_list,
        ],
        isLoading: false,
        page: action.args.page,
      }
    case COLLECTSTORE_DEL_COLLECT:
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
