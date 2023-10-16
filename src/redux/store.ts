import {
  AnyAction,
  CombinedState,
  configureStore,
  Store,
} from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import type { PersistConfig } from 'redux-persist'

import { NODE_ENV } from '@/shared/environment'
import rootReducer from './reducers'

const persistConfig: PersistConfig<Store> = {
  key: 'root',
  whitelist: ['auth'],
  storage,
}

const persistedReducer = persistReducer<CombinedState<any>, AnyAction>(
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
