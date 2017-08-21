/**
 * Created by huangchao on 2017/6/28.
 */
import {
  GET_ADV,
} from '../actions/ads'

export default (state = {}, action) => {
  switch (action.type) {
    case GET_ADV:
      return action.ads
    default:
      return state
  }
}
