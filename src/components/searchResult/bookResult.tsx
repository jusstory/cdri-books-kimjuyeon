import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Text } from '@components/common/text';
import { BookResultStyle, NoDataBoxStyle } from './resultStyle';
import BookList from './bookList';

function BookResult({}) {
  const router = useRouter();

  return (
    <BookResultStyle>
      <NoDataBoxStyle>
        <Image src="/images/icon_book.svg" alt="" width={80} height={80} />
        {router.pathname == '/pickup' ? (
          <Text type="caption">찜한 책이 없습니다.</Text>
        ) : (
          <Text type="caption">검색된 결과가 없습니다.</Text>
        )}
      </NoDataBoxStyle>
      <BookList />
    </BookResultStyle>
  );
}

export { BookResult };
