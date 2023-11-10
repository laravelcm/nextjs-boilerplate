import { AnyAction, CombinedState, configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import type { PersistConfig } from 'redux-persist'

import { NODE_ENV } from '@/shared/environment'
import { State } from '@/shared/types/state'
import rootReducer from './reducers'

const persistConfig: PersistConfig<CombinedState<State>> = {
  key: 'root',
  whitelist: ['auth'],
  storage,
}

const persistedReducer = persistReducer<CombinedState<State>, AnyAction>(
  persistConfig,
  rootReducer
)

export const store = configureStore({
  devTools: NODE_ENV !== 'production',
  reducer: persistedReducer,
  middleware: [],
})
export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
