import React from 'react';
import { Dropdown } from '@components/common/dropdown';
import { DropdownMenuPropsType } from '@components/common/dropdown/dropdownType';
import { TextField } from '@components/common/textField';
import { Button } from '@components/common/button';
import { Text } from '@components/common/text';
import { DetailSearchModalStyle } from './searchBoxStyle';

interface DetailSearchModalType {
  detailSearchOpen: () => void;
  selectMenu: {
    id: string;
    menu: string;
  };
  menuData: {
    id: string;
    menu: string;
  }[];
  searchDetailValue: string;
  onClickMenu: (data: DropdownMenuPropsType) => void;
  handleChange: (e: any) => void;
  onClickearchButton: (type?: 'detail' | 'default') => void;
}

function DetailSearchModal({
  detailSearchOpen,
  selectMenu,
  menuData,
  onClickMenu,
  searchDetailValue,
  handleChange,
  onClickearchButton,
}: DetailSearchModalType) {
  return (
    <>
      <div className="dim" onClick={detailSearchOpen}></div>
      <DetailSearchModalStyle>
        <div className="search_box">
          <Dropdown
            selectMenu={selectMenu}
            menuData={menuData}
            id={'book_serach_dropdown'}
            onClick={onClickMenu}
          />
          <TextField
            id="datail_search"
            value={searchDetailValue}
            onChange={handleChange}
          />
        </div>
        <Button type="primary" onClick={onClickearchButton}>
          <Text type="caption">검색하기</Text>
        </Button>
      </DetailSearchModalStyle>
    </>
  );
}

export default DetailSearchModal;
