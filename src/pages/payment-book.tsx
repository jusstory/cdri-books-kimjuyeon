import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Container } from '@/components/common/container';
import { Title } from '@/components/common/title';
import { useRecoilValue } from 'recoil';
import { paymentBookListAtom } from '@/store/paymentBook/atom';
import {
  BookItemOpenBoxStyle,
  BookItemOpenThumbnailBoxStyle,
  PaymentBookBoxStyle,
} from '@/components/searchResult/resultStyle';
import { Button } from '@components//common/button';
import { Text } from '@components/common/text';

function Pickup() {
  const paymentBook = useRecoilValue(paymentBookListAtom);

  return (
    <>
      <Head>
        <title>책 구매하기</title>
        <meta name="description" content="" />
      </Head>
      <main>
        <Container>
          <Title role={1}>책 구매하기</Title>
          <PaymentBookBoxStyle>
            <BookItemOpenThumbnailBoxStyle>
              <Image
                src={paymentBook.thumbnail}
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
                    {paymentBook.title}
                  </Title>
                  <Text type="body2" className="authors">
                    {paymentBook.authors}
                  </Text>
                </div>
              </div>
              <div className="pricing_box">
                <div className="bottom_box">
                  <div className="pricing_text">
                    <Text type="small">원가</Text>{' '}
                    <Title
                      role={3}
                      className={paymentBook.sale_price !== -1 ? 'is_sale' : ''}
                    >
                      {paymentBook.price.toLocaleString()}원
                    </Title>
                  </div>
                  {paymentBook.sale_price !== -1 && (
                    <div className="pricing_text">
                      <Text type="small">할인가</Text>{' '}
                      <Title role={3}>
                        {paymentBook.sale_price.toLocaleString()}원
                      </Title>
                    </div>
                  )}

                  <Button className="payment_button" type="primary">
                    <Text type="caption">구매하기</Text>
                  </Button>
                </div>
              </div>
            </BookItemOpenBoxStyle>
          </PaymentBookBoxStyle>
        </Container>
      </main>
    </>
  );
}

export default Pickup;
