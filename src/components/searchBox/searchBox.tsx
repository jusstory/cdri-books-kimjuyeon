import React, { forwardRef, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Text } from '@components/common/text';
import { Searchbar } from '@components/common/searchbar';
import {
  DetailSearchWrapStyle,
  SearchBoxStyle,
  SearchWrapStyle,
} from './searchBoxStyle';
import { Button } from '@components/common/button';
import { SearchCountBox } from './searchCountBox';
import { useQuery } from '@tanstack/react-query';
import { featchBookList } from '@/api/book/searchBook';
import { useRecoilState, useSetRecoilState } from 'recoil';
import {
  keywordAtom,
  keywordHistoryAtom,
  searchResultAtom,
  searchResultCountAtom,
} from '@store/searchBook/atom';
import { DropdownMenuPropsType } from '../common/dropdown/dropdownType';
import useMounted from '@hooks/useMounted';
import DetailSearchModal from './detailSearchModal';

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
  const searchWrapRef = useRef<HTMLDivElement>(null);
  const isMounted: boolean = useMounted();
  const [searchValue, setSearchValue] = useState('');
  const [searchDetailValue, setSearchDetailValue] = useState('');
  const [selectMenu, setSelectMenu] = useState(menuData[0]);
  const [isDetailSearchOpen, setIsDetailSearchOpen] = useState(false);
  const [isSearchInputFocus, setIsSearchInputFocus] = useState(false);
  const setKeyword = useSetRecoilState(keywordAtom);
  const setSearchResultCount = useSetRecoilState(searchResultCountAtom);
  const setSearchResults = useSetRecoilState(searchResultAtom);
  const [keywordHistory, setKeywordHistory] =
    useRecoilState(keywordHistoryAtom);

  // 도서 검색
  const { refetch: refetchDefault } = useQuery({
    queryKey: ['books', searchValue],
    queryFn: () => featchBookList(searchValue),
    enabled: false,
  });
  // 도서 상세 검색
  const { refetch: refetchDetail } = useQuery({
    queryKey: ['books', searchDetailValue],
    queryFn: () => featchBookList(searchDetailValue, selectMenu.id),
    enabled: false,
  });
  // 검색 키워드 히스토리 저장
  const addSearchHistory = (keyword: string) => {
    if (!keyword.trim()) return;

    setKeywordHistory((prev) => {
      const newHistory = [keyword, ...prev.filter((item) => item !== keyword)];
      return newHistory.slice(0, 8);
    });
  };
  // 검색창에 포커스가 갈때
  const handleSearchInputFocus = () => {
    setIsSearchInputFocus(true);
  };
  // 검색 히스토리 목록에서 선택시
  const handleClickKeyword = async (item: string) => {
    setKeyword(item);
    addSearchHistory(item);

    if (item.trim()) {
      await featchBookList(item)
        .then((res) => {
          console.log('res', res);
          const filteringData = res.documents.map((item: any) => ({
            id: item.isbn,
            thumbnail: item.thumbnail,
            title: item.title,
            authors: item.authors,
            price: item.price,
            sale_price: item.sale_price,
            contents: item.contents,
          }));
          setSearchResultCount(res.meta.total_count);
          setSearchResults(filteringData);
          setSearchValue('');
          setSearchDetailValue('');
        })
        .catch((err) => {
          console.log('error', err);
        });
    }
    setIsSearchInputFocus(false);
  };
  // 상세 검색 모달 오픈
  const detailSearchOpen = () => {
    setIsDetailSearchOpen(!isDetailSearchOpen);
  };
  // 상세 검색 항목 선택
  const onClickMenu = (data: DropdownMenuPropsType) => {
    console.log('click data', data);
    setSelectMenu(data);
  };

  // 검색창 엔터로 검색
  const handleKeyDown = (e: any) => {
    if (e.keyCode === 13 || e.key === 'Enter') {
      handleSearchButton();
    }
  };
  // 검색어 입력 시
  const handleChange = (e) => {
    if (e.target.id == 'datail_search') {
      setSearchDetailValue(e.target.value);
    } else {
      setSearchValue(e.target.value);
    }
  };
  // 검색하기
  const handleSearchButton = async (type?: 'detail' | 'default') => {
    const isDetail = Boolean(type == 'detail');
    const kewordValue = isDetail ? searchDetailValue : searchValue;
    const refetchFunction = isDetail ? refetchDetail : refetchDefault;

    setKeyword(kewordValue);
    addSearchHistory(kewordValue);

    if (isDetail) {
      detailSearchOpen();
    }

    if (kewordValue.trim()) {
      await refetchFunction()
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
  };

  useEffect(() => {
    // searchWrapRef 이외 클릭시 .keyword_list 닫히도록
    const handleClickOutside = (e: MouseEvent) => {
      if (
        searchWrapRef.current &&
        !searchWrapRef.current.contains(e.target as Node)
      ) {
        setIsSearchInputFocus(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <SearchWrapStyle>
      <SearchBoxStyle>
        <div
          className={[
            'search_bar_wrap',
            isSearchInputFocus ? 'has_list' : 'no_list',
          ].join(' ')}
          ref={searchWrapRef}
        >
          <Searchbar
            className="searchbar"
            id="seacrchBook"
            placeholder="검색어를 입력하세요"
            onChange={handleChange}
            value={searchValue}
            onKeyDown={handleKeyDown}
            onFocus={handleSearchInputFocus}
          />
          {isMounted && isSearchInputFocus && keywordHistory.length > 0 && (
            <ul className="keyword_list">
              {keywordHistory.map((item) => {
                return (
                  <li key={item} onClick={() => handleClickKeyword(item)}>
                    <Text type="caption">{item}</Text>
                    <button>
                      <Image
                        src="/images/ico_close.svg"
                        alt=""
                        width={24}
                        height={24}
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
        <DetailSearchWrapStyle>
          <Button type="line" onClick={detailSearchOpen}>
            <Text type="body2">상세검색</Text>
          </Button>
          {isDetailSearchOpen && (
            <DetailSearchModal
              detailSearchOpen={detailSearchOpen}
              selectMenu={selectMenu}
              menuData={menuData}
              onClickMenu={onClickMenu}
              searchDetailValue={searchDetailValue}
              handleChange={handleChange}
              onClickearchButton={() => handleSearchButton('detail')}
            />
          )}
        </DetailSearchWrapStyle>
      </SearchBoxStyle>
      <SearchCountBox />
    </SearchWrapStyle>
  );
});

export { SearchBox };
