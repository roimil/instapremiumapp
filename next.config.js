/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuração para processamento de CSS
  reactStrictMode: true,

  // Especifica o diretório de origem
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],

  // Garantindo que o Next.js possa carregar imagens de diversos domínios
  images: {
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  
  // Melhorias para suporte ao CSS
  webpack(config) {
    return config;
  },
};

module.exports = nextConfig;
