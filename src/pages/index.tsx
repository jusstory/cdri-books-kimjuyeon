import Head from 'next/head';
import { Container } from '@/components/common/container';
import { Title } from '@/components/common/title';

import { SearchBox } from '@/components/searchBox';
import { BookResult } from '@/components/searchResult';

export default function Home() {
  return (
    <>
      <Head>
        <title>도서 검색</title>
        <meta name="description" content="" />
      </Head>
      <main>
        <Container>
          <Title role={1}>도서 검색</Title>
          <SearchBox />
          <BookResult />
        </Container>
      </main>
    </>
  );
}
