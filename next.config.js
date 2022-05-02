/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    customKey: "I am Ivan",
  },
  basePath: "/dist",
  compress: true,
  async redirect() {
    return [
      {
        source: "/",
        destination: "/index.html",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
