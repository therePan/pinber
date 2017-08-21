/**
 * Created by huangchao on 2017/6/27.
 */
import {
  CONFIG_GET_BUSINESS,
} from '../actions/configuration'

const initState = {
  business: {},
}

export default (state = initState, action) => {
  switch (action.type) {
    case CONFIG_GET_BUSINESS:
      return {
        ...state,
        business: action.business,
      }
    default:
      return state
  }
}
