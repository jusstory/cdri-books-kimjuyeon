import { atom } from 'recoil';
import { BookDataType } from '../bookType';

const localStorage = typeof window !== 'undefined' ? window.localStorage : null;

// 찜한 도서 리스트
export const pickupBookListAtom = atom<BookDataType[]>({
  key: 'pickupBookList',
  default: [],
  effects: [
    ({ setSelf, onSet }) => {
      if (localStorage) {
        const saved = localStorage.getItem('pickup_list');
        if (saved) setSelf(JSON.parse(saved));
      }

      onSet((newValue) => {
        localStorage.setItem('pickup_list', JSON.stringify(newValue));
      });
    },
  ],
});
