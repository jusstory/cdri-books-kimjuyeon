import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { HeaderStyle, NavStyle } from './headerStyle';
import Button from '@components/common/button';
import Text from '@components/common/text';

function Header() {
  const router = useRouter();

  const menuData = [
    {
      id: 'search',
      menu: '도서 검색',
      url: '/',
    },
    {
      id: 'pickup',
      menu: '내가 찜한 책',
      url: '/pickup',
    },
  ];

  const handleClick = (url: string) => {
    router.push(`${url}`);
  };

  return (
    <HeaderStyle>
      <Image src="/images/logo.png" alt="logo" width={207} height={19} />
      <NavStyle>
        {menuData.map((item) => {
          return (
            <li key={item.id}>
              <Button
                type="text"
                onClick={() => handleClick(item.url)}
                className={router.pathname == item.url ? 'on' : ''}
              >
                <Text type="body1">{item.menu}</Text>
              </Button>
            </li>
          );
        })}
      </NavStyle>
    </HeaderStyle>
  );
}

export default Header;
