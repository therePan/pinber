import {
  HISTORY_SET_HISTORY,
} from '../actions/history'

export default (state = {}, action) => {
  switch (action.type) {
    case HISTORY_SET_HISTORY:
      return {
        ...state,
        ...action.history,
      }
    default:
      return state
  }
}
