import '@/styles/globals.css'
import { Kumbh_Sans } from 'next/font/google'

const kumbh_sans = Kumbh_Sans({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
  <main className={kumbh_sans.className}>
    <h1>Change me to the global header component</h1>
    <Component {...pageProps} />
  </main>)
}
