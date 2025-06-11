import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@/styles/global-style';
import theme from '@/styles/theme';
import { Header } from '@/components/header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>CERTICOS BOOKS</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
