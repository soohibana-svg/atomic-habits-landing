/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // للـ GitHub Pages تحت مسار /atomic-habits-landing
  // بدون basePath الروابط تصبح broken على https://soohibana-svg.github.io/atomic-habits-landing/
  basePath: process.env.GITHUB_PAGES ? '/atomic-habits-landing' : '',
  assetPrefix: process.env.GITHUB_PAGES ? '/atomic-habits-landing/' : undefined,
}

module.exports = nextConfig
