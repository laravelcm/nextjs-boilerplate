import { combineReducers } from 'redux'
import appReducer from './features/app/appSlice'

const rootReducer = combineReducers({
  app: appReducer,
})

export default rootReducer
