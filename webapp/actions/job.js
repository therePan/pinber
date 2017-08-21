/**
 * Created by huangchao on 2017/6/27.
 */
import { authApi } from '@helper/reduxFetch'
export const JOB_RECOMMEND_LIST = 'JOB_RECOMMEND_LIST' // 首页推荐职位列表 order_by:排序(0:智能排序1:离我最近 2：最新发布)
export const JOB_GET_JOB_INFO = 'JOB_GET_JOB_INFO' // 获取职位信息
export const MAIN_PAGE_STARE_GET = 'MAIN_PAGE_STARE_GET' //
export const JOB_RECOMMEND_LIST_ADD = 'JOB_RECOMMEND_LIST_ADD' //
export const MAIN_PAGE_ADD_ISLOADING = 'MAIN_PAGE_ADD_ISLOADING' //
export const JOB_RECOMMEND_LIST_INIT = 'JOB_RECOMMEND_LIST_INIT' //

/*
 首页推荐职位列表
*/
export const jobRecomendListInit = authApi({
  url: '/api/job/recommend_list',
  action: (args, json) => ({
    type: JOB_RECOMMEND_LIST_INIT,
    args,
    data: json.data,
  }),
})

export const jobRecomendList = authApi({
  url: '/api/job/recommend_list',
  action: (args, json) => ({
    type: JOB_RECOMMEND_LIST,
    args,
    data: json.data,
  }),
  prelude: () => {
    return {
      type: MAIN_PAGE_STARE_GET,
    }
  },
})

export const jobRecomendListAdd = authApi({
  url: '/api/job/recommend_list',
  action: (args, json) => ({
    type: JOB_RECOMMEND_LIST_ADD,
    args,
    data: json.data,
  }),
  prelude: () => {
    return {
      type: MAIN_PAGE_ADD_ISLOADING,
    }
  },
})

// export const recommendList = ({
//   page,
//   page_size,
//   purpose_post_name,
//   city_id,
//   area_id,
//   business_areaid,
//   salary_range,
//   order_by,
// }) => ({
//   type: JOB_RECOMMEND_LIST,
//   args: {
//     page,
//     page_size,
//     purpose_post_name,
//     city_id,
//     area_id,
//     business_areaid,
//     salary_range,
//     order_by,
//   },
// })

export const getJobInfo = ({
  job_id,
}) => ({
  type: JOB_GET_JOB_INFO,
  args: {
    job_id,
  },
})
