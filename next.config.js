const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const path = require("path");
// const withSass = require("@zeit/next-sass");
// const optimizedImages = require("next-optimized-images");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
    future: {
        webpack5: true,
    },
    images: {
        domains: [
            "assets.vercel.com",
        ],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 750, 850],
    },
    devIndicators: {
        autoPrerender: true,
    },
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")],
    },
    devServer: {
        proxy: {
            "/api": "http://localhost:3000",
        },
    },
    env: {
        NEXT_BASE_URL: 'https://sheridanwp-dev.azurewebsites.net',
    },
};

module.exports = withPlugins([
    [withImages],
    [withBundleAnalyzer]
], nextConfig);