/**
 * Created by huangchao on 2017/7/13.
 */
import {
  SEARCH_ITEM_INIT_DATA,
  SEARCH_ITEM_GET_LIST,
  SEARCH_ITEM_STARE_GET,
  SEARCH_ITEM_ADD_SEARCH,
  SEARCH_ITEM_ADD_ISLOADING,
} from '../actions/search_item'

const initState = { // 搜索模块
  page: 1,
  refreshing: false,
  isLoading: false,
  list: [],
  page_size: 10,
  page_count: null,
}

export default (state = initState, action) => {
  switch (action.type) {
    case SEARCH_ITEM_STARE_GET:
      return {
        ...state,
        refreshing: true,
      }
    case SEARCH_ITEM_ADD_ISLOADING:
      return {
        ...state,
        isLoading: true,
      }
    case SEARCH_ITEM_INIT_DATA:
      return {
        ...state,
        ...action.data,
      }
    case SEARCH_ITEM_GET_LIST:
      return {
        ...state,
        ...action.data,
        refreshing: false,
      }
    case SEARCH_ITEM_ADD_SEARCH:
      return {
        ...state,
        list: [
          ...state.list,
          ...action.data.list,
        ],
        isLoading: false,
        page: action.args.page,
      }
    default:
      return state
  }
}
