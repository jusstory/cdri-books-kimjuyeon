import React from 'react';
import Image from 'next/image';
import { HeaderStyle, NavStyle } from './headerStyle';
import Button from '@components/common/button';
import { useRouter } from 'next/router';
import Text from '@components/common/text';

function Header() {
  const router = useRouter();

  const menuData = [
    {
      menu: '도서 검색',
      url: '#',
    },
    {
      menu: '내가 찜한 책',
      url: '#',
    },
  ];

  const handleClick = (url: string) => {
    router.push(`/${url}`);
  };

  return (
    <HeaderStyle>
      <Image src="/images/logo.png" alt="logo" width={207} height={19} />
      <NavStyle>
        {menuData.map((item) => {
          return (
            <li key={item.menu}>
              <Button type="text" onClick={() => handleClick(item.url)}>
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
