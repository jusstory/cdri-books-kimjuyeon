import { atom } from 'recoil';
import { BookDataType } from '../bookType';

const localStorage = typeof window !== 'undefined' ? window.localStorage : null;

// 구매할 도서 정보
export const paymentBookListAtom = atom<BookDataType>({
  key: 'paymentBook',
  default: null,
  effects: [
    ({ setSelf, onSet }) => {
      if (localStorage) {
        const saved = localStorage.getItem('payment_book');
        if (saved) setSelf(JSON.parse(saved));
      }

      onSet((newValue) => {
        localStorage.setItem('payment_book', JSON.stringify(newValue));
      });
    },
  ],
});
