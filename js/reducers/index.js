import { combineReducers } from 'redux'

import drawer from './drawer'
import auth from './auth'
import feedback from './feedback'

export default combineReducers({
  drawer,
  auth,
  feedback,
})
