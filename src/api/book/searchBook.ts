import { axiosKakaoSearch } from '@api/index';

export const featchBookList = async (query: string, target?: string) => {
  const { data } = await axiosKakaoSearch.get('/book', {
    params: target ? { query, target } : { query },
  });
  return data;
};
