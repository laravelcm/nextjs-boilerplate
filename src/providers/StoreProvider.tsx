import React from 'react'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'

const StoreProvider = ({ children }: { children: React.ReactNode }) => (
  <Provider store={store}>{children}</Provider>
)

export default StoreProvider
