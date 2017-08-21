// 清酒稻香
import { authApi } from '@helper/reduxFetch'
export const PHOTO_UPLOAD_PHOTO = 'PHOTO_UPLOAD_PHOTO' // 上传生活照
export const PHOTO_DELETE_PHOTO = 'PHOTO_DELETE_PHOTO' // 删除生活照

// uploadPhoto
//   is_save,
//   image,
export const uploadPhoto = authApi({
  url: '/api/user/upload_photo',
  action: (args, json) => ({
    type: PHOTO_UPLOAD_PHOTO,
    args,
    photo: json.data,
  }),
})

// deletePhoto
//   photo_id,
export const deletePhoto = authApi({
  url: '/api/user/delete_photo',
  action: (args, json) => ({
    type: PHOTO_DELETE_PHOTO,
    args,
    photo: json.data,
  }),
})
