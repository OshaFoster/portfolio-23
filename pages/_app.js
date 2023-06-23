import '@/styles/globals.css'
import StackProvider from '../context/StackContext'
export default function App({ Component, pageProps }) {
  return <StackProvider><Component {...pageProps} /></StackProvider>
}
