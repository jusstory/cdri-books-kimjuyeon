import Container from '@/components/common/container';
import Header from '@/components/header';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | My Next App</title>
        <meta name="description" content="" />
      </Head>
      <main>
        <Header />
        <Container>
          <h1>Welcome to My Next.js App!</h1>
        </Container>
      </main>
    </>
  );
}
