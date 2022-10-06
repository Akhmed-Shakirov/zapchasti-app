import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'url'
import { defineNuxtConfig } from 'nuxt'
import eslintPlugin from 'vite-plugin-eslint'
import VueI18nVitePlugin from '@intlify/unplugin-vue-i18n/vite'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    imports: {
        dirs: ['stores']
    },
    modules: [
        '@vueuse/nuxt',
        [
            '@pinia/nuxt',
            {
                autoImports: ['defineStore', 'acceptHMRUpdate', 'storeToRefs']
            }
        ]
    ],
    vite: {
        plugins: [
            eslintPlugin(),
            VueI18nVitePlugin({
                include: [
                    resolve(dirname(fileURLToPath(import.meta.url)), './locales/*.json')
                ]
            })
        ],
        css: {
            preprocessorOptions: {
                sass: {
                    additionalData: '@import "@/assets/style/variable.scss"'
                }
            }
        }
    },
    css: [
        '@/assets/scss/container.scss',
        '@/assets/scss/fonts.scss',
        '@/assets/scss/normalize.scss',
        '@/assets/scss/style.scss'
    ]
})
