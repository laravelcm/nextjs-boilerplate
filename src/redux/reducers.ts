import { AnyAction, combineReducers } from 'redux'
import appReducer from './features/app/appSlice'
import { State } from '@/shared/types/global'

const rootReducer = combineReducers<State, AnyAction>({
  app: appReducer,
})

export default rootReducer
