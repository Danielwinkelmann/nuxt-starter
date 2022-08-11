import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
    srcDir: 'src',
    modules: [
        '@vueuse/nuxt',
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
    ],
    build: {
        transpile: ['@headlessui/vue'],
    },
    typescript: {
        tsConfig: {
            compilerOptions: {
                strict: true,
                types: ['@pinia/nuxt', '@intlify/nuxt3', './type.d.ts'],
            },
        },
    },
    vite: {
        logLevel: 'info',
    },
})
