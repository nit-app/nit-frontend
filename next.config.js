/** @type {import('next').NextConfig} */

const { i18n } = require("./next-i18next.config");
const nextConfig = {
    i18n,
    reactStrictMode: true,
    pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js"],
    async headers() {
        return [
            {
                source: "/mock.js",
                headers: process.env["MODE"] === "debug" ? [
                    {
                        key: "Service-Worker-Allowed",
                        value: "/",
                    },
                ] : [],
            },
        ];
    },
};

module.exports = nextConfig;
