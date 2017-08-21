/**
 * Created by huangchao on 2017/6/27.
 */
import {
  CHAT_MASSAGE_LIST,
  CHAT_MESSAGE_COUNT,
  CHAT_GENERATE_CARD,
  CHAT_INTERVIEW_DEAL,
  CHAT_MESSAGE_INFO,
  CHAT_MESSAGE_USER,
  CHAT_DEL_USER,
} from '../actions/chat'

const initialState = {
  jobs: [],
  deal: 0,
  users: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CHAT_MASSAGE_LIST:
      let indexKey = `index_${action.args.type}`
      const list = {}
      let index = [...(state[indexKey] || [])]
      action.data.message_list.map(item => {
        list[item.id] = item
        index.indexOf(item.id) < 0 && index.push(item.id)
      })
      return {
        ...state,
        message_list: {
          ...state.message_list,
          ...list,
        },
        [indexKey]: index,
      }
    case CHAT_MESSAGE_COUNT:
      return {
        ...state,
        ...action.args,
      }
    case CHAT_MESSAGE_INFO:
      return {
        ...state,
        ...action.args,
      }
    case CHAT_MESSAGE_USER:
      return {
        ...state,
        ...action.args,
      }
    case CHAT_DEL_USER:
      return {
        ...state,
        users: state.users.filter((v) => {
          return v.account !== action.args.account
        }),
      }
    case CHAT_GENERATE_CARD:
      return {
        ...state,
        jobs: action.data,
      }
    case CHAT_INTERVIEW_DEAL:
      return {
        ...state,
        deal: action.status,
      }
    default:
      return state
  }
}
