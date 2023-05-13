import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { Provider } from 'react-redux';
import store from '../features/store';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="font-Gmarket mx-auto w-full max-w-[375px]">
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </div>
  );
}
