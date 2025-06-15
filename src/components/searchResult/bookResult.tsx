import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Text } from '@components/common/text';
import { BookResultStyle, NoDataBoxStyle } from './resultStyle';
import BookList from './bookList';
import { useRecoilValue } from 'recoil';
import { searchResultAtom } from '@/store/searchBook/atom';
import { pickupBookListAtom } from '@/store/pickupBook/atom';

function BookResult({}) {
  const router = useRouter();
  const [isListData, setIsListData] = useState(false);
  const searchResults = useRecoilValue(searchResultAtom);
  const pickupBookList = useRecoilValue(pickupBookListAtom);

  useEffect(() => {
    if (router.pathname == '/pickup') {
      setIsListData(pickupBookList.length > 0);
    } else {
      setIsListData(searchResults.length > 0);
    }
  }, [pickupBookList, router.pathname, searchResults]);

  return (
    <BookResultStyle>
      {isListData ? (
        <BookList />
      ) : (
        <NoDataBoxStyle>
          <Image src="/images/icon_book.svg" alt="" width={80} height={80} />
          {router.pathname == '/pickup' ? (
            <Text type="caption">찜한 책이 없습니다.</Text>
          ) : (
            <Text type="caption">검색된 결과가 없습니다.</Text>
          )}
        </NoDataBoxStyle>
      )}
    </BookResultStyle>
  );
}

export { BookResult };
