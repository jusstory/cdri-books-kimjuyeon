import React, { useState } from 'react';
import { BookItemOpenBoxStyle, BookListItemStyle } from './resultStyle';
import { List } from '../common/list';
import { useRecoilValue } from 'recoil';
import { searchResultAtom } from '@store/searchBook/atom';
import Image from 'next/image';
import { Title } from '../common/title';
import { Text } from '@/components/common/text';
import { ButtonWrapStyle } from '../common/button/buttonStyle';
import { Button } from '../common/button';

function BookList() {
  const searchResults = useRecoilValue(searchResultAtom);
  const [isOpenBody, setIsOpenBody] = useState(false);
  const [openBody, setOpenBody] = useState(null);

  const ListItem = ({ itemData }) => {
    const handleButtonClick = (selecItemData) => {
      console.log(selecItemData);

      if (openBody == itemData.id) {
        setIsOpenBody(!isOpenBody);
      } else {
        setOpenBody(itemData.id);
        setIsOpenBody(true);
      }
    };

    return (
      <BookListItemStyle
        className={openBody === itemData.id && isOpenBody ? 'open' : 'close'}
      >
        {itemData &&
          (openBody === itemData.id && isOpenBody ? (
            <>
              <Image
                src={itemData.thumbnail}
                alt=""
                width={210}
                height={280}
                className="thumbnail"
              />
              <BookItemOpenBoxStyle>
                <div className="contents_wrap">
                  <div className="title_box">
                    <Title role={3} className="book_title">
                      {itemData.title}
                    </Title>
                    <Text type="body2" className="authors">
                      {itemData.authors}
                    </Text>
                  </div>
                  <div className="contents_box">
                    <Text type="body2" $bold className="authors">
                      책 소개
                    </Text>
                    <Text type="small" className="contents">
                      {itemData.contents}
                    </Text>
                  </div>
                </div>
                <div className="pricing_box">
                  <Button
                    type="secondary"
                    onClick={() => handleButtonClick(itemData)}
                    className="detail_button"
                  >
                    <Text type="caption">상세보기</Text>
                    <img src="/images/ico_arrowLine.svg" alt="" />
                  </Button>
                  <div className="bottom_box">
                    <div className="pricing_text">
                      <Text type="small">원가</Text>{' '}
                      <Title
                        role={3}
                        className={itemData.sale_price !== -1 ? 'is_sale' : ''}
                      >
                        {itemData.price.toLocaleString()}원
                      </Title>
                    </div>
                    {itemData.sale_price !== -1 && (
                      <div className="pricing_text">
                        <Text type="small">할인가</Text>{' '}
                        <Title role={3}>
                          {itemData.sale_price.toLocaleString()}원
                        </Title>
                      </div>
                    )}

                    <Button
                      className="payment_button"
                      type="primary"
                      onClick={() => handleButtonClick(itemData)}
                    >
                      <Text type="caption">구매하기</Text>
                    </Button>
                  </div>
                </div>
              </BookItemOpenBoxStyle>
            </>
          ) : (
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
              <Title role={3}>
                {itemData.sale_price !== -1
                  ? itemData.sale_price.toLocaleString()
                  : itemData.price.toLocaleString()}
                원
              </Title>
              <ButtonWrapStyle>
                <Button
                  type="primary"
                  onClick={() => handleButtonClick(itemData)}
                >
                  <Text type="caption">구매하기</Text>
                </Button>
                <Button
                  type="secondary"
                  onClick={() => handleButtonClick(itemData)}
                  className="detail_button"
                >
                  <Text type="caption">상세보기</Text>
                  <img src="/images/ico_arrowLine.svg" alt="" />
                </Button>
              </ButtonWrapStyle>
            </>
          ))}
      </BookListItemStyle>
    );
  };

  return (
    <List
      listItemData={searchResults.map((item) => {
        return {
          id: item.id,
          contents: <ListItem itemData={item} />,
        };
      })}
    />
  );
}

export default BookList;
