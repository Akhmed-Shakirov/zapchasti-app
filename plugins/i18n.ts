import { createI18n } from 'vue-i18n'
import en from '@/locales/en'
import ru from '@/locales/ru'
import kz from '@/locales/kz'

export default defineNuxtPlugin(({ vueApp }) => {
    const lang = 'ru' || 'en'

    const i18n = createI18n({
        legacy: false,
        globalInjection: true,
        locale: lang,
        messages: {
            en,
            ru,
            kz
        }
    })

    vueApp.use(i18n)
})
