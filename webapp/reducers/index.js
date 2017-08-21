import { combineReducers } from 'redux'
import history from './history'
import user from './user'
import searchItem from './seatch_item'
import configuration from './configuration'
import chat from './chat'
import job from './job'
import collectStore from './collect_store'
import collectPost from './collect_post'
import resume from './resume'
import search from './search'
import workExperience from './work_experience'
import educationExperience from './education_experience'
import ads from './ads'
import storeDetail from './store_detail'
import postDetail from './post_detail'
import photo from './photo'
import interview from './interview'

const pinberApp = combineReducers({
  history,
  user,
  searchItem,
  configuration,
  chat,
  job,
  collectStore,
  collectPost,
  resume,
  search,
  workExperience,
  educationExperience,
  ads,
  storeDetail,
  postDetail,
  photo,
  interview,
})

export default pinberApp
