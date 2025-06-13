import { atom } from 'recoil';

const localStorage = typeof window !== 'undefined' ? window.localStorage : null;

// 책 검색 키워드
export const keywordAtom = atom<string>({
  key: 'keyword',
  default: '',
});

//검색 키워드 저장 리스트
export const keywordHistoryAtom = atom<string[]>({
  key: 'keywordHistory',
  default: [],
  effects: [
    ({ setSelf, onSet }) => {
      if (localStorage) {
        const saved = localStorage.getItem('keyword_history');
        if (saved) setSelf(JSON.parse(saved));
      }

      onSet((newValue) => {
        localStorage.setItem('keyword_history', JSON.stringify(newValue));
      });
    },
  ],
});

// 검색 결과
export const searchResultAtom = atom({
  key: 'searchResultAtom',
  default: [],
});

// 검색 결과 count 값
export const searchResultCountAtom = atom({
  key: 'searchResultCountAtom',
  default: 0,
});
