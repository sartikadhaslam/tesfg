import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {Mulish, Montserrat} from '@next/font/google'

const mulish = Mulish({subsets:['latin'],variable: '--font-mulish',})
const montserrat = Montserrat({subsets:['latin'],variable: '--font-montserrat',})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={`${mulish.variable} ${montserrat.variable}`}>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
