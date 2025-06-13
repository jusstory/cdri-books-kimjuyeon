import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['search1.kakaocdn.net', 't1.daumcdn.net'],
  },
};

export default nextConfig;
