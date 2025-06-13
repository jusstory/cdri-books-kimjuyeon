import { atom } from 'recoil';

// 책 검색 키워드
export const keywordAtom = atom<string>({
  key: 'keyword',
  default: '',
});

// 검색 결과
export const searchResultAtom = atom({
  key: 'searchResultAtom',
  default: [],
});
