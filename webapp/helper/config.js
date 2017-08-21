/*
 配置信息
 */
import {
  shareFetch,
} from './fetchForm'

export const indexData = () => {
  let config = JSON.parse(localStorage['pinber:config'] || '{}')
  const now = Date.now()
  if (config.lastUpload && config.lastUpload > now - (1000 * 60 * 60 * 48)) {
    return Promise.resolve(config)
  } else {
    config = shareFetch('/api/index/data')
      .then(json => {
        const config = {
          ...json.data,
          lastUpload: now,
        }
        localStorage['pinber:config'] = JSON.stringify(config)
        return config
      })
    return config
  }
}

/*
 热门职位&店铺
 */
export const hotJobStore = () => {
  let hotList = JSON.parse(localStorage['pinber:hotList'] || '{}')
  const now = Date.now()
  if (hotList.lastUpload && hotList.lastUpload > now - (1000 * 60 * 60 * 12)) {
    return Promise.resolve(hotList)
  } else {
    hotList = shareFetch('/api/index/hot_list')
      .then(json => {
        const hotList = {
          ...json.data,
          lastUpload: now,
        }
        localStorage['pinber:hotList'] = JSON.stringify(hotList)
        return hotList
      })
    return hotList
  }
}
