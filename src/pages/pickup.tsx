import React from 'react';
import Head from 'next/head';
import { Container } from '@/components/common/container';
import { Title } from '@/components/common/title';
import { SearchCountBox } from '@/components/searchBox';
import { BookResult } from '@/components/searchResult';

function Pickup() {
  return (
    <>
      <Head>
        <title>내가 찜한 책</title>
        <meta name="description" content="" />
      </Head>
      <main>
        <Container>
          <Title role={1}>내가 찜한 책</Title>
          <SearchCountBox />
          <BookResult />
        </Container>
      </main>
    </>
  );
}

export default Pickup;
