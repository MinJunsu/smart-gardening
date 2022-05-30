import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navigator from '../components/navigator';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <div className="relative w-full h-[100vh] overflow-x-hidden">
        <div className="-z-50 fixed -top-28 -left-28 w-[500px] h-[500px] rounded-full bg-[#D3E5FF] opacity-70  blur-[120px]" />
        <div className="-z-50 fixed -bottom-28 -right-28 w-[500px] h-[500px] rounded-full bg-[#D5EEC9] opacity-70 blur-[120px]" />
        <Component {...pageProps} />
        <div className="fixed bottom-3 left-0 w-full flex justify-center">
          <Navigator />
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default MyApp;
