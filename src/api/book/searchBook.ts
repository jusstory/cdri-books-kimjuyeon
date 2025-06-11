import { axiosKakaoSearch } from '@api/index';

export const featchBookList = async (query: string) => {
  const { data } = await axiosKakaoSearch.get('/book', {
    params: { query },
  });
  return data.documents;
};
