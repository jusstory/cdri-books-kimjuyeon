import Head from 'next/head';
import Container from '@/components/common/container';
import Title from '@/components/common/title';

import Header from '@/components/header';
import SearchBox from '@/components/searchBox';
import BookResult from '@/components/bookResult';

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
          <Title role={1}>도서 검색</Title>
          <SearchBox />
          <BookResult />
        </Container>
      </main>
    </>
  );
}
