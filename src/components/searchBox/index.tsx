import React from 'react';
import Text from '@/components/common/text';
import Searchbar from '@/components/common/searchbar';
import { SearchBoxStyle, SearchWrapStyle } from './searchBoxStyle';
import Button from '../common/button';

function SearchBox() {
  return (
    <SearchWrapStyle>
      <SearchBoxStyle>
        <Searchbar />
        <Button type="line">
          <Text type="body2">상세검색</Text>
        </Button>
      </SearchBoxStyle>
      <Text type="caption">
        도서 검색 결과 &nbsp;&nbsp;&nbsp; 총{' '}
        <span className="search_count">0</span>건
      </Text>
    </SearchWrapStyle>
  );
}

export default SearchBox;
