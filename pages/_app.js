import '@/styles/globals.css'
import StackProvider from '../context/Context'
export default function App({ Component, pageProps }) {
  return <StackProvider><Component {...pageProps} /></StackProvider>
}
