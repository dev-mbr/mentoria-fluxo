/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
  basePath: "/fluxo/publico-frio",
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    unoptimized: true,
},
};

export default nextConfig;
