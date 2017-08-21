/**
 * Created by huangchao on 2017/6/27.
 */
import { authApi } from '@helper/reduxFetch'
export const CONFIG_GET_BUSINESS = 'CONFIG_GET_BUSINESS' // 获取商圈列表

/*
 商圈
 */
export const getBusiness = authApi({
  url: '/api/index/get_business',
  action: (args, json) => ({
    type: CONFIG_GET_BUSINESS,
    ...args,
    business: json.data,
  }),
})
