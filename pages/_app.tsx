import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import { GoogleOAuthProvider } from '@react-oauth/google'
// import { CLIENT_ID } from 'constants/googleAuth'
import { SessionProvider } from 'next-auth/react'
import { Session } from 'next-auth'
import Header from '@components/Header'
import NextHead from '@components/NextHead'

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { staleTime: Infinity },
    },
  })
  return (
    // <GoogleOAuthProvider clientId={CLIENT_ID}>
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <NextHead
          title="Next.js Commerce"
          desc="Next.js로 구현한 커머스 서비스 프로젝트"
        />
        <div className="px-24">
          <Header />
          <Component {...pageProps} />
        </div>
      </QueryClientProvider>
    </SessionProvider>
    // </GoogleOAuthProvider>
  )
}

export default MyApp
