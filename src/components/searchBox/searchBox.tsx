import React, { forwardRef, useState } from 'react';
import { Text } from '@/components/common/text';
import { Searchbar } from '@/components/common/searchbar';
import {
  DetailSearchModalStyle,
  DetailSearchWrapStyle,
  SearchBoxStyle,
  SearchWrapStyle,
} from './searchBoxStyle';
import { Button } from '@/components/common/button';
import { SearchCountBox } from './searchCountBox';
import { useQuery } from '@tanstack/react-query';
import { featchBookList } from '@/api/book/searchBook';
import { useSetRecoilState } from 'recoil';
import {
  keywordAtom,
  searchResultAtom,
  searchResultCountAtom,
} from '@store/searchBook/atom';
import { TextField } from '../common/textField';
import { Dropdown } from '../common/dropdown';
import { DropdownMenuPropsType } from '../common/dropdown/dropdownType';

const SearchBox = forwardRef(function SearchBox() {
  const menuData = [
    {
      id: 'title',
      menu: '제목',
    },
    {
      id: 'authors',
      menu: '저자명',
    },
    {
      id: 'publisher',
      menu: '출판사',
    },
  ];

  const [searchValue, setSearchValue] = useState('');
  const [searchDetailValue, setSearchDetailValue] = useState('');
  const [selectMenu, setSelectMenu] = useState(menuData[0]);
  const [isDetailSearchOpen, setIsDetailSearchOpen] = useState(false);
  const setKeyword = useSetRecoilState(keywordAtom);
  const setSearchResultCount = useSetRecoilState(searchResultCountAtom);
  const setSearchResults = useSetRecoilState(searchResultAtom);

  const { refetch: refetchDefault } = useQuery({
    queryKey: ['books', searchValue],
    queryFn: () => featchBookList(searchValue),
    enabled: false,
  });

  const { refetch: srefetchDetail } = useQuery({
    queryKey: ['books', searchDetailValue],
    queryFn: () => featchBookList(searchDetailValue, selectMenu.id),
    enabled: false,
  });

  const onClickMenu = (data: DropdownMenuPropsType) => {
    console.log('click data', data);
    setSelectMenu(data);
  };

  const detailSearchOpen = () => {
    setIsDetailSearchOpen(!isDetailSearchOpen);
  };

  const handleKeyDown = (e: any) => {
    if (e.keyCode === 13 || e.key === 'Enter') {
      handleSearchButton();
    }
  };

  const handleChange = (e) => {
    console.log(e.target.id);
    if (e.target.id == 'datail_search') {
      setSearchDetailValue(e.target.value);
    } else {
      setSearchValue(e.target.value);
    }
  };

  const handleSearchButton = async (type?: string) => {
    if (type == 'detail') {
      detailSearchOpen();
      setKeyword(searchDetailValue);

      if (searchDetailValue.trim()) {
        await srefetchDetail()
          .then((res) => {
            console.log('res.data', res.data);
            const filteringData = res.data.documents.map((item: any) => ({
              id: item.isbn,
              thumbnail: item.thumbnail,
              title: item.title,
              authors: item.authors,
              price: item.price,
              sale_price: item.sale_price,
              contents: item.contents,
            }));
            setSearchResultCount(res.data.meta.total_count);
            setSearchResults(filteringData);
            setSearchValue('');
            setSearchDetailValue('');
          })
          .catch((err) => {
            console.log('error', err);
          });
      }
    } else {
      setKeyword(searchValue);

      if (searchValue.trim()) {
        await refetchDefault()
          .then((res) => {
            console.log('res.data', res.data);
            const filteringData = res.data.documents.map((item: any) => ({
              id: item.isbn,
              thumbnail: item.thumbnail,
              title: item.title,
              authors: item.authors,
              price: item.price,
              sale_price: item.sale_price,
              contents: item.contents,
            }));
            setSearchResultCount(res.data.meta.total_count);
            setSearchResults(filteringData);
            setSearchValue('');
            setSearchDetailValue('');
          })
          .catch((err) => {
            console.log('error', err);
          });
      }
    }
  };

  return (
    <SearchWrapStyle>
      <SearchBoxStyle>
        <Searchbar
          id="seacrchBook"
          placeholder="검색어를 입력하세요"
          onChange={handleChange}
          value={searchValue}
          onKeyDown={handleKeyDown}
        />
        <DetailSearchWrapStyle>
          <Button type="line" onClick={detailSearchOpen}>
            <Text type="body2">상세검색</Text>
          </Button>
          {isDetailSearchOpen && (
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
                <Button
                  type="primary"
                  onClick={() => handleSearchButton('detail')}
                >
                  <Text type="caption">검색하기</Text>
                </Button>
              </DetailSearchModalStyle>
            </>
          )}
        </DetailSearchWrapStyle>
      </SearchBoxStyle>
      <SearchCountBox />
    </SearchWrapStyle>
  );
});

export { SearchBox };
