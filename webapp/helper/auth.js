// 清酒稻香
import {
  shareFetch,
  authFetch,
} from './fetchForm'

export const getCode = (args) => {
  return shareFetch('/api/user/get_code', {
    mobile: args.mobile.replace(/ /g, ''),
  })
}

export const userLogin = (args) => {
  return shareFetch('/api/user/login', {
    ...args,
    mobile: args.mobile.replace(/ /g, ''),
  })
  .then(json => {
    localStorage['pinber:user'] = JSON.stringify({
      ...JSON.parse(localStorage['pinber:user'] || '{}'),
      ...json.data,
      mobile: args.mobile,
    })
    return json
  })
}

export const userLogout = () => {
  const userInfo = JSON.parse(localStorage['pinber:user'] || '{}')
  if (userInfo.user_ticket) {
    return authFetch('/api/user/logout')
    .then(json => {
      delete userInfo.user_ticket
      localStorage['pinber:user'] = JSON.stringify(userInfo)
      return json
    })
  } else {
    return Promise.resolve({
      status: 1,
      data: [],
    })
  }
}
