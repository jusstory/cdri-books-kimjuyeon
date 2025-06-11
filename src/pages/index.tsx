import Head from 'next/head';
import { Container } from '@/components/common/container';
import { Title } from '@/components/common/title';

import { SearchBox } from '@/components/searchBox';
import { BookResult } from '@/components/searchResult';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { featchBookList } from '@/api/book/searchBook';

export default function Home() {
  const [keyword, setKeyword] = useState<string>('is');
  const [listData, setListData] = useState([]);

  const { data, refetch } = useQuery({
    queryKey: ['books', keyword],
    queryFn: () => featchBookList(keyword),
    enabled: false,
  });

  const handleSearch = async () => {
    if (keyword.trim()) {
      await refetch()
        .then((res) => setListData(res.data))
        .catch((err) => {
          console.log('error', err);
        });
    }
  };

  useEffect(() => {
    handleSearch();
  }, []);

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
