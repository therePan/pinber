export const REQUEST_FETCH = 'REQUEST_FETCH' // 请求开始
export const RESPONSE_FETCH = 'RESPONSE_FETCH' // 请求结束

export const requestFetch = (action) => ({
  type: REQUEST_FETCH,
  action,
})

export const responseFetch = (action) => ({
  type: RESPONSE_FETCH,
  action,
})
