import React, { forwardRef, useState } from 'react';
import { Text } from '@/components/common/text';
import { Searchbar } from '@/components/common/searchbar';
import { SearchBoxStyle, SearchWrapStyle } from './searchBoxStyle';
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

const SearchBox = forwardRef(function SearchBox() {
  const [searchValue, setSearchValue] = useState('');
  const setKeyword = useSetRecoilState(keywordAtom);
  const setSearchResultCount = useSetRecoilState(searchResultCountAtom);
  const setSearchResults = useSetRecoilState(searchResultAtom);
  //id, placeholder, value, onChange

  const { refetch } = useQuery({
    queryKey: ['books', searchValue],
    queryFn: () => featchBookList(searchValue),
    enabled: false,
  });

  const handleKeyDown = (e: any) => {
    if (e.keyCode === 13 || e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    setSearchValue(e.target.value);
  };

  const handleSearch = async () => {
    setKeyword(searchValue);

    if (searchValue.trim()) {
      await refetch()
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
        })
        .catch((err) => {
          console.log('error', err);
        });
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
        <Button type="line">
          <Text type="body2">상세검색</Text>
        </Button>
      </SearchBoxStyle>
      <SearchCountBox />
    </SearchWrapStyle>
  );
});

export { SearchBox };
