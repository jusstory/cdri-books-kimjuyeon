import React from 'react';
import Image from 'next/image';
import { SearchbarStyle } from './searchbarStyle';
import { SearchbarType } from './searchType';

function Searchbar({
  id,
  placeholder,
  value,
  onChange,
  onKeyDown,
}: SearchbarType) {
  return (
    <SearchbarStyle>
      <Image
        src="/images/ico_search.svg"
        alt="search icon"
        width={30}
        height={30}
      />
      <input
        id={id}
        placeholder={placeholder}
        value={value ? value : ''}
        onChange={(e) => onChange(e)}
        onKeyDown={onKeyDown}
      />
    </SearchbarStyle>
  );
}

export { Searchbar };
