import React, { useEffect, useState } from 'react';
import { BookListItemStyle } from './resultStyle';
import { List } from '../common/list';
import { useQueryClient } from '@tanstack/react-query';
import { useRecoilValue } from 'recoil';
import { keywordAtom } from '@store/searchBook/atom';

function BookList() {
  //   const [listData, setListData] = useState();
  const keyword = useRecoilValue(keywordAtom);
  const queryClient = useQueryClient();
  const cachedBooks = queryClient.getQueryData(['books', keyword]);

  const listData = [
    {
      id: 'a',
      contents: <p>aaa</p>,
    },
    {
      id: 'b',
      contents: <p>bbb</p>,
    },
  ];

  useEffect(() => {
    if (cachedBooks) {
      console.log(cachedBooks);
    }
  }, [cachedBooks]);

  return <List listItemData={listData} />;
}

const ListItem = () => {
  return <BookListItemStyle></BookListItemStyle>;
};

export default BookList;
