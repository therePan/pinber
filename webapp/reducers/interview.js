import {
  INTERVIEW_LIST,
  INTERVIEW_DEAL,
} from '../actions/interview'

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case INTERVIEW_LIST:
      let indexKey = `index_${action.args.status}`
      let list = {}
      let index = [...(state[indexKey] || [])]
      action.data.list.map(item => {
        list[item.id] = item
        index.indexOf(item.id) < 0 && index.push(item.id)
      })
      return {
        ...state,
        list: {
          ...state.list,
          ...list,
        },
        [indexKey]: index,
      }
    case INTERVIEW_DEAL:
      if (action.args.deal_type === 'agree') {
        let index1 = [...(state.index_1 || [])]
        let item = index1.splice(index1.indexOf(action.args.interview_id), 1)
        let index2 = [item, ...state.index_2]
        return {
          ...state,
          index_1: index1,
          index_2: index2,
        }
      }
      if (action.args.deal_type === 'refuse') {
        let index1 = [...(state.index_1 || [])]
        index1.splice(index1.indexOf(action.args.interview_id), 1)
        return {
          ...state,
          index_1: index1,
        }
      }
      return state
    default:
      return state
  }
}
