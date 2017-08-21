// 清酒稻香
import {
  RESUME_GET_INFO,
  RESUME_GET_INFO_BEGIN,
  RESUME_UPDATE_INFO,
} from '../actions/resume'
import {
  PHOTO_UPLOAD_PHOTO,
  PHOTO_DELETE_PHOTO,
} from '../actions/photo'

// const initState = {
//   resume_id: null, // 获取简历信息 /resume/get_info
//   degree: null,
//   salary_range: null,
//   join_work_year: null,
//   desc: null,
//   job_status: null,
//   is_hidden: null,
//   degree_str: null,
//   salary_range_str: null,
//   job_status_str: null,
//   photo: [],
//   done_post_ids: [],
//   purpose_post_ids: [{
//     purpose_post_id: null,
//     name: null,
//   }],
//   update_resume: null, // 修改简历信息 /resume/update_info
// }
export default (state = {}, action) => {
  switch (action.type) {
    case RESUME_GET_INFO:
      return {
        ...state,
        ...action.resume,
        photo: action.resume.photo.map(item => item.id),
        done_post_ids: action.resume.done_post_ids.map(item => item.done_post_id),
        purpose_post_ids: action.resume.purpose_post_ids.map(item => item.purpose_post_id),
        work_experience: action.resume.work_experience.map(item => item.id),
        education_experience: action.resume.education_experience.map(item => item.id),
        loading: false,
      }
    case RESUME_GET_INFO_BEGIN:
      return {
        ...state,
        loading: true,
      }
    case RESUME_UPDATE_INFO:
      return {
        ...state,
        ...action.args,
        ...(action.args.do_post_ids ? {
          done_post_ids: action.args.do_post_ids,
        } : {}),
      }
    case PHOTO_UPLOAD_PHOTO:
      return {
        ...state,
        photo: [
          ...state.photo,
          action.photo.id,
        ],
      }
    case PHOTO_DELETE_PHOTO:
      const photo = [
        ...state.photo,
      ]
      photo.splice(photo.indexOf(action.args.photo_id), 1)
      return {
        ...state,
        photo,
      }
    default:
      return state
  }
}
