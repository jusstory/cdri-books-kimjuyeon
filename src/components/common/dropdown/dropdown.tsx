import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Title } from '@components/common/title';
import { DropdownStyle, MenuStyle } from './dropdownStyle';
import { DropdownMenuPropsType, DropdownPropsType } from './dropdownType';
import { Text } from '@components/common/text';

function Dropdown({
  id,
  menuData,
  onClick,
  className,
  selectMenu,
}: DropdownPropsType) {
  const [titleMenu, setTitleMenu] = useState<DropdownMenuPropsType>(null);
  const [menuList, setMenuList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const resolveClick = (item) => {
    setIsOpen(false);

    if (!onClick) {
      return;
    } else {
      onClick(item);
    }
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (menuData) {
      const selectMenuData = menuData.find((item) => item.id == selectMenu.id);
      const otherMenuData = menuData.filter(
        (item) => item.id !== selectMenu.id,
      );

      if (selectMenuData) {
        setTitleMenu(selectMenuData);
      }
      setMenuList(otherMenuData);
    }
  }, [menuData, selectMenu]);

  return (
    <DropdownStyle id={id} className={className}>
      <div
        className={['title_box', isOpen ? 'open' : 'close'].join(' ')}
        onClick={handleClick}
      >
        <Title role={3} className="book_title">
          {titleMenu?.menu}
        </Title>
        <Image src="/images/ico_arrowLine.svg" alt="" width={14} height={8} />
      </div>
      {isOpen && (
        <MenuStyle>
          {menuList.map((item) => {
            return (
              <li key={item.id} onClick={() => resolveClick(item)}>
                <Text type="caption">{item.menu}</Text>
              </li>
            );
          })}
        </MenuStyle>
      )}
    </DropdownStyle>
  );
}

export { Dropdown };
