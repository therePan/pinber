// 清酒稻香
import { Toast } from 'antd-mobile'

export const shareFetch = (uri, args = {}) => {
  const formData = new FormData()
  Object.keys(args).map((key) => {
    formData.append(key, args[key])
  })
  return fetch(uri, {
    method: 'POST',
    body: formData,
  })
  .then(res => res.json())
  .then(json => {
    if (!json.status) {
      throw json
    }
    return json
  })
  .catch(err => {
    Toast.info(err.errMsg || '后端的code monkey又开小差了!', 1)
    throw err
  })
}

const authError = {
  status: 0,
  errCode: 5004,
  errMsg: '用户凭证不正确',
}
export const authFetch = (uri, args = {}) => {
  const userInfo = JSON.parse(localStorage['pinber:user'] || '{}')
  if (userInfo.user_id && userInfo.user_ticket) {
    return shareFetch(uri, {
      ...args,
      user_id: userInfo.user_id,
      user_ticket: userInfo.user_ticket,
    })
  } else {
    return Promise.reject(authError)
  }
}
