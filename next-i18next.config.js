/** @type {import('next-i18next').UserConfig} */
module.exports = {
    debug: process.env["MODE"] === "debug",
    lng: "ru",
    nsSeparator: ".",
    keySeparator: ":",
    i18n: {
        localeDetection: false,
        defaultLocale: "ru",
        locales: ["ru"],
    },
};