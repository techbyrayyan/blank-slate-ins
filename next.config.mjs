/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  async redirects() {
    return [
      {
        source: '/courses/1',
        destination: '/courses/website-development-with-wordpress',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
