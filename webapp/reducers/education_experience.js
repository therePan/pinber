/**
 * Created by huangchao on 2017/6/28.
 */
import {
  RESUME_ADD_EDUCATION,
  RESUME_UPDATE_EDUCATION,
  RESUME_VIEW_EDUCATION,
  RESUME_DELETE_EDUCATION,
} from '../actions/education_experience'
import {
  RESUME_GET_INFO,
  // RESUME_UPDATE_INFO,
} from '../actions/resume'

const initialState = {
  list: {
    // id: {
    //   id: null,
    //   degree: null,
    //   school_name: null,
    //   major_name: null,
    //   start_year: null,
    //   end_year: null,
    // },
  },
}

export default (state = initialState, action) => {
  switch (action.type) {
    case RESUME_GET_INFO:
      let list = state.list || {}
      action.resume.education_experience.map(item => {
        list[item.id] = {
          ...(list[item.id] || {}),
          ...item,
        }
      })
      return {
        ...state,
        list,
      }
    case RESUME_UPDATE_EDUCATION:
      return {
        ...state,
        ...action.args,
      }
    case RESUME_VIEW_EDUCATION:
      return {
        ...state,
        list: {
          ...state.list,
          [action.args.education_id]: {
            ...(state.list[action.args] || {}),
            ...parse(action.education),
            id: action.args.education_id,
          },
        },
      }
    case RESUME_ADD_EDUCATION:
      return {
        ...state,
        ...action.args,
      }
    case RESUME_DELETE_EDUCATION:
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
