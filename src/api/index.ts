import axios from 'axios';

const createKakaoAxios = (originUrl: string | undefined, url: string) => {
  return axios.create({
    baseURL: `${originUrl}/v3/${url}`,
    headers: {
      Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_REST_API_KEY}`,
    },
  });
};

export const axiosKakaoSearch = createKakaoAxios(
  process.env.NEXT_PUBLIC_REST_API_URL,
  'search',
);
