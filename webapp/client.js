// 清酒稻香
import 'whatwg-fetch'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import 'normalize.css'
import './style/theme.less'
import './style/style.less'
import routes from './routes'

import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import pinberApp from './reducers'
const composeEnhancers = typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose
let store = createStore(
  pinberApp,
  composeEnhancers && composeEnhancers(applyMiddleware(
    thunkMiddleware,
  )),
)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      {routes}
    </BrowserRouter>
  </Provider>,
  document.getElementById('container')
)
