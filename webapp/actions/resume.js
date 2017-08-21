// 清酒稻香
import { authApi } from '@helper/reduxFetch'
export const RESUME_GET_INFO = 'RESUME_GET_INFO' // 获取简历信息
export const RESUME_GET_INFO_BEGIN = `${RESUME_GET_INFO}_BEGIN`
export const RESUME_UPDATE_INFO = 'RESUME_UPDATE_INFO' // 修改简历信息

// 获取简历信息
export const getInfo = authApi({
  url: '/api/resume/get_info',
  action: (_, json) => ({
    type: RESUME_GET_INFO,
    resume: json.data,
  }),
  prelude: () => ({
    type: RESUME_GET_INFO_BEGIN,
  }),
  should: (_, state) => !state.resume.loading,
})

// 修改简历信息
// updateInfo
//   resume_id,
//   user_name,
//   wechat_no,
//   gender,
//   birthday,
//   hometown_provinceid,
//   hometown_cityid,
//   purpose_post_ids,
//   salary_range,
//   join_work_year,
//   job_status,
//   desc,
//   do_post_ids,
//   degree,
//   is_hidden,
export const updateInfo = authApi({
  url: '/api/resume/update_info',
  action: (args, json) => ({
    type: RESUME_UPDATE_INFO,
    args,
    resume: json.data,
  }),
})
