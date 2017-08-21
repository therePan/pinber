import { authApi } from '@helper/reduxFetch'
export const USER_INITAL_RESUME = 'USER_INITAL_RESUME' // 初始化简历
export const USER_PERSON_REGISTER = 'USER_PERSON_REGISTER' // 个人用户注册
export const USER_RECORD_LOGIN_INFO = 'USER_RECORD_LOGIN_INFO' // 记录登录信息
export const USER_UPDATE_INFO = 'USER_UPDATE_INFO' // 更新用户信息
export const USER_CHANGE_ID = 'USER_CHANGE_ID' // 切换身份
export const USER_GET_INFO = 'USER_GET_INFO' // 获取用户信息
export const USER_UPLOAD_HEAD = 'USER_UPLOAD_HEAD' // 上传头像
export const USER_UPDATE_MOBILE = 'USER_UPDATE_MOBILE' // 修改手机号
export const USER_GET_POSITION = 'USER_GET_POSITION' // 载入位置信息

// getImageCode

// 个人用户注册
// personRegister
//   user_type,
//   city_id,
//   user_name,
//   gender,
//   purpose_post_ids,

// 记录登录信息
// recordLoginInfo
//   device_no,
//   client_type,
//   ip,
//   address,
//   longitude,
//   latitude,

// 更新用户信息
// updateInfo
//   is_notify,
//   portrait_url,
//   mini_image_url,
//   user_name,
//   gender,
//   birthday,
//   wechat_no,
//   hometown_provinceid,
//   hometown_cityid,
//   city_id,
export const updateInfo = authApi({
  url: '/api/user/update_info',
  action: (args, json) => ({
    type: USER_UPDATE_INFO,
    args,
    user: json.data,
  }),
})

/*
初始化简历
*/
export const initResume = authApi({
  url: '/api/user/person_register',
  action: (args, json) => ({
    type: USER_INITAL_RESUME,
    args,
    user: json.data,
  }),
})

// 切换身份
// changeId
//   user_type,

// 获取用户信息
export const getInfo = authApi('/api/user/get_info', (_, json) => ({
  type: USER_GET_INFO,
  user: json.data,
}))

// 上传头像
//   is_save,
//   image,
export const uploadHead = authApi('/api/user/upload_head', (args, json) => ({
  type: USER_UPLOAD_HEAD,
  args,
  user: json.data,
}))

// 修改手机号
//   mobile,
//   code,
export const updateMobile = authApi('/api/user/update_mobile', (args, json) => {
  return {
    type: USER_UPDATE_MOBILE,
    args,
    user: json.data,
  }
})

export const getCurrentPosition = (position) => {
  return {
    type: USER_GET_POSITION,
    position,
  }
}
