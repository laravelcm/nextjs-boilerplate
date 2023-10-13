import type { AppProps } from 'next/app'
import QueryProvider from '@/providers/QueryProvider'
import StoreProvider from '@/providers/StoreProvider'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <QueryProvider>
        <Component {...pageProps} />
      </QueryProvider>
    </StoreProvider>
  )
}
