import { createApp } from 'petite-vue'
import { createI18n } from '../../src'

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: {
      button: {
        add: 'Add new',
      },
    },
    vi: {
      button: {
        add: 'Thêm mới',
      },
    },
  },
})

createApp(i18n).mount()
