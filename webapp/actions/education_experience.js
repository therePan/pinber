// 清酒稻香
import { authApi } from '@helper/reduxFetch'
export const RESUME_ADD_EDUCATION = 'RESUME_ADD_EDUCATION' // 添加教育经历
export const RESUME_UPDATE_EDUCATION = 'RESUME_UPDATE_EDUCATION' // 修改教育经历
export const RESUME_VIEW_EDUCATION = 'RESUME_VIEW_EDUCATION' // 查看教育经历
export const RESUME_DELETE_EDUCATION = 'RESUME_DELETE_EDUCATION'// 删除教育经历

// addEducation
//   resume_id,
//   degree,
//   school_name,
//   start_year,
//   end_year,
//   major_name,
export const addEducation = authApi({
  url: '/api/resume/add_education',
  action: (args, json) => ({
    type: RESUME_ADD_EDUCATION,
    args,
    education: json.data,
  }),
})

// updateEducation
//   education_id,
//   degree,
//   school_name,
//   start_year,
//   end_year,
//   major_name,
export const updateEducation = authApi({
  url: '/api/resume/update_education',
  action: (args, json) => ({
    type: RESUME_UPDATE_EDUCATION,
    args,
  }),
})

// viewEducation
//   education_id,
export const viewEducation = authApi({
  url: '/api/resume/view_education',
  action: (args, json) => ({
    type: RESUME_VIEW_EDUCATION,
    args,
    education: json.data,
  }),
})

// deleteEducation
//   education_id,
export const deleteEducation = authApi({
  url: '/api/resume/delete_education',
  action: (args, json) => ({
    type: RESUME_DELETE_EDUCATION,
    args,
  }),
})
