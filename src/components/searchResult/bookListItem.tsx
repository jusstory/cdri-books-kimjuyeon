import React, { useState } from 'react';
import Image from 'next/image';
import {
  BookItemOpenBoxStyle,
  BookItemOpenThumbnailBoxStyle,
  BookListItemStyle,
} from './resultStyle';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { Title } from '@components/common/title';
import { Text } from '@components/common/text';
import { ButtonWrapStyle } from '@components/common/button/buttonStyle';
import { Button } from '@components//common/button';
import { pickupBookListAtom } from '@/store/pickupBook/atom';
import { useRouter } from 'next/router';
import { paymentBookListAtom } from '@/store/paymentBook/atom';
import { BookDataType } from '@/store/bookType';

function BookListItem({ itemData }) {
  const router = useRouter();
  const [isOpenBody, setIsOpenBody] = useState(false);
  const [openBody, setOpenBody] = useState(null);
  const [pickupBookList, setPickupBookList] =
    useRecoilState(pickupBookListAtom);
  const setPaymentBook = useSetRecoilState(paymentBookListAtom);

  const handleButtonClick = (selecItemData) => {
    if (openBody == selecItemData.id) {
      setIsOpenBody(!isOpenBody);
    } else {
      setOpenBody(selecItemData.id);
      setIsOpenBody(true);
    }
  };
  // 찜한 도서인지 체크
  const checkedIsPickupBook = (checkBookId) => {
    const isPickupBook = pickupBookList.some((item) => item.id === checkBookId);
    return isPickupBook;
  };
  // 도서 찜하기
  const handlePickupBook = (bookItemData) => {
    setPickupBookList((prev) => {
      // 기존에 찜한 책인지 체크
      const hasBookId = checkedIsPickupBook(bookItemData.id);

      const newBookList = hasBookId
        ? prev.filter((item) => item.id !== bookItemData.id)
        : [...pickupBookList, bookItemData];
      return newBookList;
    });
  };

  const handlePaymentBook = (bookData: BookDataType) => {
    setPaymentBook(bookData);
    router.push('/payment-book');
  };

  return (
    <BookListItemStyle
      className={openBody === itemData.id && isOpenBody ? 'open' : 'close'}
    >
      {itemData &&
        (openBody === itemData.id && isOpenBody ? (
          <>
            <BookItemOpenThumbnailBoxStyle>
              <button
                id="pickup_button"
                onClick={() => handlePickupBook(itemData)}
              >
                {checkedIsPickupBook(itemData.id) ? (
                  <Image
                    src="/images/ico_heart_fill.svg"
                    alt=""
                    width={24}
                    height={24}
                  />
                ) : (
                  <Image
                    src="/images/ico_heart_line.svg"
                    alt=""
                    width={24}
                    height={24}
                  />
                )}
              </button>
              <Image
                src={itemData.thumbnail}
                alt=""
                width={210}
                height={280}
                className="thumbnail"
              />
            </BookItemOpenThumbnailBoxStyle>
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
                  <Image
                    src="/images/ico_arrowLine.svg"
                    alt=""
                    width={14}
                    height={8}
                  />
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
                    onClick={() => handlePaymentBook(itemData)}
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
                onClick={() => handlePaymentBook(itemData)}
              >
                <Text type="caption">구매하기</Text>
              </Button>
              <Button
                type="secondary"
                onClick={() => handleButtonClick(itemData)}
                className="detail_button"
              >
                <Text type="caption">상세보기</Text>
                <Image
                  src="/images/ico_arrowLine.svg"
                  alt=""
                  width={14}
                  height={8}
                />
              </Button>
            </ButtonWrapStyle>
          </>
        ))}
    </BookListItemStyle>
  );
}

export default BookListItem;
