import React from 'react';
import Image from 'next/image';
import { SearchbarStyle } from './searchbarStyle';
import { SearchbarType } from './searchType';

function Searchbar({
  id,
  className,
  placeholder,
  value,
  onChange,
  onKeyDown,
  onFocus,
  onBlur,
}: SearchbarType) {
  return (
    <SearchbarStyle className={className}>
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
        onFocus={onFocus}
        onBlur={onBlur}
        autoComplete="off"
      />
    </SearchbarStyle>
  );
}

export { Searchbar };
