/** @type {import("next").NextConfig} */
const path = require("path");

const { i18n } = require("./next-i18next.config");
const nextConfig = {
    i18n,
    reactStrictMode: true,
    pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js"],
    env: {
        API_BASE_URL: process.env["API_BASE_URL"],
        USE_MIRAGE_SERVER: process.env["USE_MIRAGE_SERVER"],
    },
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")],
    },
};

module.exports = nextConfig;
