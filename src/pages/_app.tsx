import type { AppProps } from 'next/app';
import Head from 'next/head';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@/styles/global-style';
import theme from '@/styles/theme';
import { Header } from '@/components/header';
import { useState } from 'react';
import { RecoilRoot } from 'recoil';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <Head>
            <title>CERTICOS BOOKS</title>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
          </Head>

          <GlobalStyle />
          <Header />
          <Component {...pageProps} />
        </ThemeProvider>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default MyApp;
