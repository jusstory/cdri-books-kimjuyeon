import React from 'react';
import { useRouter } from 'next/router';
import { Text } from '@/components/common/text';
import { useRecoilValue } from 'recoil';
import { searchResultCountAtom } from '@/store/searchBook/atom';

function SearchCountBox() {
  const router = useRouter();
  const searchResultCount = useRecoilValue(searchResultCountAtom);

  return (
    <Text type="caption">
      {router.pathname == '/pickup' ? '찜한 책' : '도서 검색 결과'}{' '}
      &nbsp;&nbsp;&nbsp; 총{' '}
      <span className="search_count">{searchResultCount || '0'}</span>건
    </Text>
  );
}

export { SearchCountBox };
