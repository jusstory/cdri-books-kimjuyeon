import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Text } from '@/components/common/text';
import { useRecoilValue } from 'recoil';
import { searchResultCountAtom } from '@/store/searchBook/atom';
import { pickupBookListAtom } from '@/store/pickupBook/atom';

function SearchCountBox() {
  const router = useRouter();
  const searchResultCount = useRecoilValue(searchResultCountAtom);
  const pickupBookList = useRecoilValue(pickupBookListAtom);

  const [countNum, setCountNum] = useState(0);

  useEffect(() => {
    if (router.pathname == '/pickup') {
      if (pickupBookList && pickupBookList.length > 0) {
        setCountNum(pickupBookList.length);
      }
    } else {
      if (searchResultCount && searchResultCount > 0) {
        setCountNum(searchResultCount);
      }
    }
  }, [pickupBookList, router.pathname, searchResultCount]);

  return (
    <Text type="caption">
      {router.pathname == '/pickup' ? '찜한 책' : '도서 검색 결과'}{' '}
      &nbsp;&nbsp;&nbsp; 총{' '}
      <span className="search_count">{countNum || '0'}</span>건
    </Text>
  );
}

export { SearchCountBox };
