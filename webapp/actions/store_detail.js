/**
 * Created by huangchao on 2017/7/11.
 */
import { authApi } from '@helper/reduxFetch'
export const STORE_DETAIL_GET = 'STORE_DETAIL_GET' // 获取店铺详情页
export const STORE_DETAIL_CANCEL_COLIECT = 'STORE_DETAIL_CANCEL_COLIECT' // 取消店铺收藏
export const STORE_DETAIL_ADD_COLIECT = 'STORE_DETAIL_ADD_COLIECT' // 添加收藏
export const STORE_DETAIL_WILL_UNMOUNT = 'STORE_DETAIL_WILL_UNMOUNT' // 组件卸载

/*
 获取店铺详情页
 */

export const getStoreDetaill = authApi('/api/store/view_info', (args, json) => ({
  type: STORE_DETAIL_GET,
  args,
  data: json.data,
}))
/*
 取消店铺收藏 type = 2  collect_id
 */
export const cancelColiectStore = authApi('/api/user/delete_collect', (args, json) => ({
  type: STORE_DETAIL_CANCEL_COLIECT,
  args,
  data: json.data,
}))
/*
 添加店铺收藏 type = 2
 */
export const addCollectStore = authApi('/api/user/add_collect', (args, json) => ({
  type: STORE_DETAIL_ADD_COLIECT,
  args,
  data: json.data,
}))
/*

 */
export const delStore = () => {
  return {
    type: STORE_DETAIL_WILL_UNMOUNT,
  }
}
