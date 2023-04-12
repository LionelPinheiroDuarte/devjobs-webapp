import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
  <>
    <h1>Change me to the global header component</h1>
    <Component {...pageProps} />
  </>)
}
