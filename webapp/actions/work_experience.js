// 清酒稻香
import { authApi } from '@helper/reduxFetch'
export const WORK_ADD_WORK = 'WORK_ADD_WORK' // 添加工作经历
export const WORK_UPDATE_WORK = 'WORK_UPDATE_WORK' // 修改工作经历
export const WORK_VIEW_WORK = 'WORK_VIEW_WORK' // 查看工作经历
export const WORK_DELETE_WORK = 'WORK_DELETE_WORK' // 删除工作经历

// addWork
//   resume_id,
//   job_name,
//   company_name,
//   start_year,
//   end_year,
//   work_content,
export const addWork = authApi('/api/resume/add_work', (_, json) => ({
  type: WORK_ADD_WORK,
  work: json.data,
}))

// updateWork
//   work_id,
//   job_name,
//   company_name,
//   start_year,
//   end_year,
//   work_content,
export const updateWork = authApi('/api/resume/update_work', (args, json) => ({
  type: WORK_UPDATE_WORK,
  args,
}))

// viewWork
//   work_id,
export const viewWork = authApi('/api/resume/view_work', (args, json) => ({
  type: WORK_VIEW_WORK,
  args,
  work: json.data,
}))

// deleteWork
//   work_id,
export const deleteWork = authApi('/api/resume/delete_work', (args, json) => ({
  type: WORK_DELETE_WORK,
  args,
}))
