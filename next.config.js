/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'out',  //netlify autput//
  images: {
    domains: ["image.tmdb.org"],
  },
};

module.exports = nextConfig;
