import { authApi } from '@helper/reduxFetch'
export const COLLECTPOST_COLLECT_POST_INIT = 'COLLECTPOST_COLLECT_POST_INIT' // 初始化数据
export const COLLECTPOST_COLLECT_POST = 'COLLECTPOST_COLLECT_POST' // 获取收藏列表（type: 收藏的类型（职位、店铺、简历））
export const COLLECTPOST_DEL_POST = 'CCOLLECTPOST_DEL_POST' // 取消收藏
export const COLLECTPOST_COLLECT_POST_LODING = 'COLLECTPOST_COLLECT_POST_LODING' // 请求开始
export const COLLECTPOST_ADD_POST = 'COLLECTPOST_ADD_POST' // 下啦加载
export const COLLECTPOST_COLLECT_POST_ISLODING = 'COLLECTPOST_COLLECT_POST_ISLODING' // isLoading

export const collectPostinit = authApi({
  url: '/api/user/collect_list',
  action: (args, json) => {
    return {
      type: COLLECTPOST_COLLECT_POST_INIT,
      data: json.data,
    }
  },
})

export const collectPost = authApi({
  url: '/api/user/collect_list',
  action: (args, json) => {
    return {
      type: COLLECTPOST_COLLECT_POST,
      data: json.data,
    }
  },
  prelude: () => {
    return {
      type: COLLECTPOST_COLLECT_POST_LODING,
    }
  },
})

export const addPost = authApi({
  url: '/api/user/collect_list',
  action: (args, json) => {
    return {
      type: COLLECTPOST_ADD_POST,
      args,
      data: json.data,
    }
  },
  prelude: () => {
    return {
      type: COLLECTPOST_COLLECT_POST_ISLODING,
    }
  },
})

export const delCollectPost = authApi({
  url: '/api/user/delete_collect',
  action: (args, json) => {
    return {
      type: COLLECTPOST_DEL_POST,
      args,
      date: json.date,
    }
  },
})
