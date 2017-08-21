// 清酒稻香
import {
  shareFetch,
  authFetch,
} from './fetchForm'

export function shareApi(...args) {
  const { url, action, prelude, should } = getArgs(args)

  return (args = {}) => (dispatch, getState) => {
    const state = getState()
    if (!should || should(args, state)) {
      prelude && dispatch(prelude())
      return shareFetch(url, args)
        .then(json => dispatch(action(args, json)))
    }
  }
}

export function authApi(...args) {
  const { url, action, prelude, should } = getArgs(args)

  return (args = {}) => (dispatch, getState) => {
    const state = getState()
    if (!should || should(args, state)) {
      prelude && dispatch(prelude())
      return authFetch(url, args)
        .then(json => {
          dispatch(action(args, json))
          return json
        })
        .catch(err => {
          if (err.errCode === 5004) {
            state.history.replace('/login')
          }
          throw err
        })
    }
  }
}

function getArgs(args) {
  if (args[0] instanceof Object) {
    return args[0]
  } else {
    return {
      url: args[0],
      action: args[1],
    }
  }
}
