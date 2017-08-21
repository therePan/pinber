import { authApi } from '@helper/reduxFetch'
export const GET_ADV = 'GET_ADV' // 获取banner列表

export const getAdv = authApi(
  '/api/user/get_adv',
  (args, json) => ({
    type: GET_ADV,
    ads: json.data,
  })
)

// export const getAdv = ({
//   show_position,
// }) => ({
//   type: GET_ADV,
//   args: {
//     show_position,
//   },
// })
