import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { List } from '../common/list';
import { useRecoilValue } from 'recoil';
import { searchResultAtom } from '@store/searchBook/atom';
import { pickupBookListAtom } from '@/store/pickupBook/atom';
import BookListItem from './bookListItem';

function BookList() {
  const router = useRouter();
  const [listData, setListData] = useState([]);
  const searchResults = useRecoilValue(searchResultAtom);
  const pickupBookList = useRecoilValue(pickupBookListAtom);

  useEffect(() => {
    if (router.pathname == '/pickup') {
      setListData(pickupBookList);
    } else {
      setListData(searchResults);
    }
  }, [pickupBookList, router.pathname, searchResults]);

  return (
    <List
      listItemData={listData.map((item) => {
        return {
          id: item.id,
          contents: <BookListItem itemData={item} />,
        };
      })}
    />
  );
}

export default BookList;
