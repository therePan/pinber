// 清酒稻香
import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Tabs from './containers/Tabs'
import AuthRoute from './containers/AuthRoute'

export default (
  <Switch>
    <Route
      path="/login"
      component={require('./containers/Login').default} />
    <AuthRoute
      path="/tabs/:tab"
      component={props => (<Tabs {...props} />)} />
    <AuthRoute
      path="/storeview/selpost"
      component={require('./containers/SelPost').default} />
    <AuthRoute
      path="/storeview/:user_id/:store_id"
      component={require('./containers/StoreView').default} />
    <AuthRoute
      path="/postview/:id"
      component={require('./containers/PostView').default} />
    <AuthRoute
      path="/chat/interview"
      component={require('./containers/Interview').default} />
    <AuthRoute
      path="/chat/look"
      component={require('./containers/Look').default} />
    <AuthRoute
      path="/chat/message"
      component={require('./containers/Message').default} />
    <AuthRoute
      path="/user/resume/work/:resume_id/:work_id"
      component={require('./containers/Work').default} />
    <AuthRoute
      path="/user/resume/work/:resume_id"
      component={require('./containers/Work').default} />
    <AuthRoute
      path="/user/resume/education/:resume_id/:education_id"
      component={require('./containers/Education').default} />
    <AuthRoute
      path="/user/resume/education/:resume_id"
      component={require('./containers/Education').default} />
    <AuthRoute
      path="/user/resume"
      component={require('./containers/Resume').default} />
    <AuthRoute
      path="/user/collectstore"
      component={require('./containers/Collectstore').default} />
    <AuthRoute
      path="/user/collectpost"
      component={require('./containers/CollectPost').default} />
    <AuthRoute
      path="/user/feedback"
      component={require('./containers/FeedBack').default} />
    <AuthRoute
      path="/user/seeting/changemobile"
      component={require('./containers/ChangeMobile').default} />
    <AuthRoute
      path="/user/seeting/aboutous"
      component={require('./containers/AboutOus').default} />
    <AuthRoute
      path="/user/seeting"
      component={require('./containers/Seeting').default} />
    <AuthRoute
      path="/search/:keyword"
      component={require('./containers/Search').default} />
    <AuthRoute
      path="/search"
      component={require('./containers/Search').default} />
    <AuthRoute
      path="/userinfo"
      component={require('./containers/UserInfo').default} />
    <AuthRoute
      path="/chat/:id"
      component={require('./containers/Chat').default} />
    <Route
      path="/protocol"
      component={require('./containers/Protocol').default} />
    <Redirect to="/tabs/find" />
    {/* <Route component={() => <h1>404</h1>} /> */}
  </Switch>
)
