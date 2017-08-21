import { authApi } from '@helper/reduxFetch'
export const COLLECTSTORE_COLLECT_LIST_INIT = 'COLLECTSTORE_COLLECT_LIST_INIT' // 初始化数据
export const COLLECTSTORE_COLLECT_LIST = 'COLLECTSTORE_COLLECT_LIST' // 获取收藏列表（type: 收藏的类型（职位、店铺、简历））
export const COLLECTSTORE_DEL_COLLECT = 'COLLECTSTORE_DEL_COLLECT' // 取消搜藏（type: 收藏的类型（职位、店铺、简历））
export const COLLECTSTORE_ADD_STOTRE = 'COLLECTSTORE_ADD_STOTRE' // 收藏的单店下啦加载
export const COLLECTSTORE_COLLECT_LODING = 'COLLECTSTORE_COLLECT_LODING' // 请求开始
export const COLLECTSTORE_COLLECT_ISLOADING = 'COLLECTSTORE_COLLECT_ISLOADING' // isLoading

// export const collectList = ({
//   type,
//   page,
//   page_size,
// }) => ({
//   type: COLLECT_COLLECT_LIST,
//   args: {
//     type,
//     page,
//     page_size,
//   },
// })

export const getCollectStoreInit = authApi({
  url: '/api/user/collect_list',
  action: (args, json) => {
    return {
      type: COLLECTSTORE_COLLECT_LIST_INIT,
      data: json.data,
    }
  },
})

export const getCollectStore = authApi({
  url: '/api/user/collect_list',
  action: (args, json) => {
    return {
      type: COLLECTSTORE_COLLECT_LIST,
      data: json.data,
    }
  },
  prelude: () => {
    return {
      type: COLLECTSTORE_COLLECT_LODING,
    }
  },
})

export const delCollectStore = authApi({
  url: '/api/user/delete_collect',
  action: (args, json) => {
    return {
      type: COLLECTSTORE_DEL_COLLECT,
      args,
      date: json.date,
    }
  },
})

export const addStore = authApi({
  url: '/api/user/collect_list',
  action: (args, json) => {
    return {
      type: COLLECTSTORE_ADD_STOTRE,
      args,
      data: json.data,
    }
  },
  prelude: () => {
    return {
      type: COLLECTSTORE_COLLECT_ISLOADING,
    }
  },
})

// export const addStore = () => {
//   return {
//     type: COLLECT_ADD_STOTRE,
//     args,
//   }
// }

export const delCollectStor = ({
  type,
  relative_id,
}) => ({
  type: COLLECTSTORE_DEL_COLLECT,
  args: {
    type,
    relative_id,
  },
})
