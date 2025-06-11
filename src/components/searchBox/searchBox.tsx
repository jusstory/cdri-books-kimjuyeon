import React from 'react';
import { Text } from '@/components/common/text';
import { Searchbar } from '@/components/common/searchbar';
import { SearchBoxStyle, SearchWrapStyle } from './searchBoxStyle';
import { Button } from '@/components/common/button';
import { SearchCountBox } from './searchCountBox';

function SearchBox() {
  return (
    <SearchWrapStyle>
      <SearchBoxStyle>
        <Searchbar />
        <Button type="line">
          <Text type="body2">상세검색</Text>
        </Button>
      </SearchBoxStyle>
      <SearchCountBox />
    </SearchWrapStyle>
  );
}

export { SearchBox };
