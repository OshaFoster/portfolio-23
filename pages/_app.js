import '@/styles/globals.css';
import StackProvider from '../context/Context';
import { Oswald } from 'next/font/google';

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['200', '300', '400', '700'],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={oswald.className}>
      <StackProvider>
        <Component {...pageProps} />
      </StackProvider>
    </main>
  );
}
