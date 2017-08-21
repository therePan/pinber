/**
 * Created by huangchao on 2017/6/27.
 */
import {
  SEARCH_SEARCH,
} from '../actions/search'

const initState = {
  search_page_count: null, // 搜索 /search/do
  search_list: [],
}

export default (state = initState, {type, args}) => {
  switch (type) {
    case SEARCH_SEARCH:
      return {
        ...state,
        ...args,
      }
    default:
      return state
  }
}
