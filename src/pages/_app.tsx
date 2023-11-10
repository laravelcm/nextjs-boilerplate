import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'

import QueryProvider from '@/providers/query-provider'
import StoreProvider from '@/providers/store-provider'
import '@/styles/globals.css'

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <QueryProvider>
        <main className={`${inter.variable} font-sans`}>
          <Component {...pageProps} />
        </main>
      </QueryProvider>
    </StoreProvider>
  )
}
