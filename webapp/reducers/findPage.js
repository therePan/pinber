/**
* Created by huangchao on 2017/6/28.
*/
import {
  FINDPAGE_CHANGE_CITY,
  FINDPAGE_CHANGE_SALARY,
} from '../actions/findPage'

const initState = {
  page: 1, // 当前页
  page_size: 10, // 一页10条数据
  city_id: null,
  area_id: null,
  // business_areaid, // 商圈id
  salary_range: 0, // 薪资范围 JSON.parse(localStorage['pinber:config']).salary
  order_by: 0, // 排序方式0：智能排序1：离我最近 2：最新发布
  purpose_post_name: , // 意向职位名称
}

export default (state = initState, action) => {
  switch (action.type) {
    case FINDPAGE_CHANGE_CITY:
      return action.
    default:
      return state
  }
}
