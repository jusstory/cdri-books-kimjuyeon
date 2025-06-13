import React, { useEffect, useState } from 'react';
import { BookListItemStyle } from './resultStyle';
import { List } from '../common/list';
import { useQueryClient } from '@tanstack/react-query';
import { useRecoilValue } from 'recoil';
import { keywordAtom, searchResultAtom } from '@store/searchBook/atom';
import Image from 'next/image';
import { Title } from '../common/title';
import { Text } from '@/components/common/text';
import { ButtonWrapStyle } from '../common/button/buttonStyle';
import { Button } from '../common/button';

function BookList() {
  //   const [listData, setListData] = useState();
  const keyword = useRecoilValue(keywordAtom);
  const queryClient = useQueryClient();
  const cachedBooks = queryClient.getQueryData(['books', keyword]);
  const listData = useRecoilValue(searchResultAtom);

  const ListItem = ({ itemData }) => {
    return (
      <BookListItemStyle>
        {itemData && (
          <>
            <Image
              src={itemData.thumbnail}
              alt=""
              width={48}
              height={68}
              className="thumbnail"
            />
            <div className="title_box">
              <Title role={3} className="book_title">
                {itemData.title}
              </Title>
              <Text type="body2" className="authors">
                {itemData.authors}
              </Text>
            </div>
            <Title role={3}>{itemData.sale_price.toLocaleString()}원</Title>
            <ButtonWrapStyle>
              <Button type="primary">
                <Text type="caption">구매하기</Text>
              </Button>
              <Button type="secondary">
                <Text type="caption">상세보기</Text>
                <img src="/images/ico_arrowLine.svg" alt="" />
              </Button>
            </ButtonWrapStyle>
          </>
        )}
      </BookListItemStyle>
    );
  };

  useEffect(() => {
    if (cachedBooks) {
      console.log(cachedBooks);
      console.log('listData', listData);
      //   setListData(cachedBooks)
    }
  }, [cachedBooks]);

  return (
    <List
      listItemData={listData.map((item) => {
        return {
          id: item.id,
          contents: <ListItem itemData={item} />,
        };
      })}
    />
  );
}

export default BookList;
