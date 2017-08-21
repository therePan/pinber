/**
 * Created by huangchao on 2017/7/11.
 */
import { authApi } from '@helper/reduxFetch'
export const POST_DETAIL_GET = 'POST_DETAIL_GET' // POST_DETAIL_CANCEL_COLIECT
export const POST_DETAIL_CANCEL_COLIECT = 'POST_DETAIL_CANCEL_COLIECT' // 取消职位收藏
export const POST_DETAIL_ADD_COLIECT = 'POST_DETAIL_ADD_COLIECT' // 添加职位收藏
export const POST_DETAIL_WILL_UNMOUNT = 'POST_DETAIL_WILL_UNMOUNT' // 组件卸载

/*
 获取职位详情
 */
export const getPostDetaill = authApi({
  url: '/api/job/view_info',
  action: (args, json) => ({
    type: POST_DETAIL_GET,
    args,
    data: json.data,
  }),
})

/*
 添加职位收藏
 */
export const addColiectPost = authApi({
  url: '/api/user/add_collect',
  action: (args, json) => ({
    type: POST_DETAIL_ADD_COLIECT,
    args,
    data: json.data,
  }),
})

/*
  取消职位收藏
 */
export const cancelColiectPost = authApi({
  url: '/api/user/delete_collect',
  action: (args, json) => ({
    type: POST_DETAIL_CANCEL_COLIECT,
    args,
    data: json.data,
  }),
})

/*
组件卸载
*/
export const delpost = () => {
  return {
    type: POST_DETAIL_WILL_UNMOUNT,
  }
}
