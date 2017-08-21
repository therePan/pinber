export const HISTORY_SET_HISTORY = 'HISTORY_SET_HISTORY' // 设置路由

export const setHistory = (history) => ({
  type: HISTORY_SET_HISTORY,
  history,
})
