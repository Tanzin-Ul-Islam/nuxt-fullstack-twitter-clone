// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    runtimeConfig: {
        jwtAccessSecret: process.env.JWT_ACCESS_TOKEN,
        jwtRefreshSecret: process.env.JWT_REFRESH_TOKEN,

        cludinaryCloudName: process.env.CLOUDINARY_CLOUD_NAMe,
        cludinaryApiKey: process.env.CLOUDINARY_API_KEY,
        cludinaryApiSecret: process.env.CLOUDINARY_API_SECRET,

        public: {
            BASEURL: "http://localhost:3000/api/"
        }
    },
})
