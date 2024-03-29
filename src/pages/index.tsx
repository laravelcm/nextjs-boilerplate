import Head from 'next/head'

import { useAppSelector } from '@hooks/use-redux-helpers'
import { getAppName } from '@/redux/features/app/appSlice'

const Home = () => {
  const appName = useAppSelector(getAppName)

  return (
    <>
      <Head>
        <title>Next App Boilerplate</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen items-center justify-center antialiased">
        <h1 className="text-5xl font-medium text-secondary-500">
          {appName !== '' ? appName : 'NextJS Boilerplate'}
        </h1>
      </main>
    </>
  )
}

export default Home
