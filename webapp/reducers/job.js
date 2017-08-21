/**
 * Created by huangchao on 2017/6/27.
 */
import {
  JOB_RECOMMEND_LIST,
  JOB_GET_JOB_INFO,
  MAIN_PAGE_STARE_GET,
  JOB_RECOMMEND_LIST_ADD,
  MAIN_PAGE_ADD_ISLOADING,
  JOB_RECOMMEND_LIST_INIT,
} from '../actions/job'

const initState = {
  page_count: null, // 首位推荐职位列表/job/recommend_list
  job_list: [],
  job_info: {}, // 查看职位信息job_info
  user_info: {},
  benefit_label_list: {},
  photo_list: [],
  page_size: 10,
  page: 1,
  refreshing: false,
  isLoding: false,
  area_id: '',
  salary_range: '',
  order_by: '',
  purpose_post_name: '',
  title1: '全部商区',
  title2: '薪资范围',
  title3: '智能排序',
  headJob: '全部职位',
}

export default (state = initState, action) => {
  switch (action.type) {
    case MAIN_PAGE_STARE_GET:
      return {
        ...state,
        refreshing: true,
      }
    case MAIN_PAGE_ADD_ISLOADING:
      return {
        ...state,
        isLoding: false,
      }
    case JOB_RECOMMEND_LIST:
      return {
        ...state,
        ...action.args,
        ...action.data,
        refreshing: false,
      }
    case JOB_RECOMMEND_LIST_INIT:
      return {
        ...state,
        ...action.args,
        ...action.data,
        isLoding: true,
      }
    case JOB_RECOMMEND_LIST_ADD:
      return {
        ...state,
        ...action.args,
        job_list: [
          ...state.job_list,
          ...action.data.job_list,
        ],
        isLoding: true,
        page: action.args.page,
      }
    case JOB_GET_JOB_INFO:
      return {
        ...state,
      }
    default:
      return state
  }
}
