/**
 * Created by huangchao on 2017/6/28.
 */
import {
  WORK_ADD_WORK,
  WORK_UPDATE_WORK,
  WORK_VIEW_WORK,
  WORK_DELETE_WORK,
} from '../actions/work_experience'
import {
  RESUME_GET_INFO,
} from '../actions/resume'

const initialState = {
  list: {
    // id: {
    //   id: null,
    //   job_name: null,
    //   company_name: null,
    //   work_content: null,
    //   start_year: null,
    //   end_year: null,
    // }
  },
}

export default (state = initialState, action) => {
  switch (action.type) {
    case RESUME_GET_INFO:
      let list = state.list || {}
      action.resume.work_experience.map(item => {
        list[item.id] = {
          ...(list[item.id] || {}),
          ...parse(item),
        }
      })
      return {
        ...state,
        list,
      }
    case WORK_ADD_WORK:
      return {
        ...state,
        ...action.args,
      }
    case WORK_UPDATE_WORK:
      return {
        ...state,
        ...action.args,
      }
    case WORK_VIEW_WORK:
      return {
        ...state,
        list: {
          ...state.list,
          [action.args.work_id]: {
            ...(state.list[action.args] || {}),
            ...parse(action.work),
            id: action.args.work_id,
          },
        },
      }
    case WORK_DELETE_WORK:
      return {
        ...state,
        ...action.args,
      }
    default:
      return state
  }
}

function parse(item) {
  const now = Date.now()
  return {
    ...item,
    start_year: item.start_year === '至今' ? now : item.start_year,
    end_year: item.end_year === '至今' ? now : item.end_year,
  }
}
