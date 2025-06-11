import React from 'react';
import Image from 'next/image';
import { SearchbarStyle } from './searchbarStyle';

function Searchbar() {
  return (
    <SearchbarStyle>
      <Image
        src="/images/ico_search.svg"
        alt="search icon"
        width={30}
        height={30}
      />
      Searchbar
    </SearchbarStyle>
  );
}

export { Searchbar };
