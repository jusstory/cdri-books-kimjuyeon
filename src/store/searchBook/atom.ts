import { atom } from 'recoil';

// 책 검색 키워드
export const keywordAtom = atom<string>({
  key: 'keyword',
  default: '',
});
