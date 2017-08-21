/**
 * Created by huangchao on 2017/7/13.
 */
import { authApi } from '@helper/reduxFetch'
export const SEARCH_ITEM_INIT_DATA = 'SEARCH_ITEM_INIT_DATA' // 初始化数据
export const SEARCH_ITEM_GET_LIST = 'SEARCH_ITEM_GET_LIST' // 搜索list
export const SEARCH_ITEM_STARE_GET = 'SEARCH_ITEM_STARE_GET' // 请求开启开始前清楚数据
export const SEARCH_ITEM_ADD_SEARCH = 'SEARCH_ITEM_ADD_SEARCH' // 下啦加载
export const SEARCH_ITEM_ADD_ISLOADING = 'SEARCH_ITEM_ADD_ISLOADING' // isLoading

export const getSearchInit = authApi({
  url: '/api/search/do',
  action: (args, json) => {
    return {
      type: SEARCH_ITEM_INIT_DATA,
      args,
      data: json.data,
    }
  },
})

export const getSearchItem = authApi({
  url: '/api/search/do',
  action: (args, json) => {
    return {
      type: SEARCH_ITEM_GET_LIST,
      args,
      data: json.data,
    }
  },
  prelude: () => {
    return {
      type: SEARCH_ITEM_STARE_GET,
    }
  },
})

export const addSearch = authApi({
  url: '/api/search/do',
  action: (args, json) => {
    return {
      type: SEARCH_ITEM_ADD_SEARCH,
      args,
      data: json.data,
    }
  },
  prelude: () => {
    return {
      type: SEARCH_ITEM_ADD_ISLOADING,
    }
  },
})
