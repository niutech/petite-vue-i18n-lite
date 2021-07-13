import {
  getMessage,
  isEmpty,
  parseLocaleValues,
  replaceLocaleValues,
} from './utils'
import {
  I18nOptions,
  I18nLocale,
  I18nLocales,
  I18n,
  I18nValues,
  I18nLocaleMessages,
} from './types'

/**
 * Creates a I18n instance that can be used by a Petite Vue app.
 *
 * @param options - {@link I18nOptions}
 */
export function createI18n(options?: I18nOptions): I18n {
  const initOptions = Object.assign(
    { locale: 'en', fallbackLocale: 'en', messages: {} },
    options
  )
  const current = initOptions.locale
  const locales: I18nLocales = initOptions.messages

  return {
    t(key: string, option?: I18nLocale | I18nValues): string {
      if (!key) {
        return ''
      }

      const locale =
        typeof option === 'string' && option ? option : this.current

      let message =
        getMessage(locales[locale], key) ||
        getMessage(locales[initOptions.fallbackLocale], key)
      if (option && typeof option !== 'string') {
        const values = parseLocaleValues(message, option)
        if (!isEmpty(values)) {
          message = replaceLocaleValues(message, values)
        }
      }

      return message || key
    },
    current,
    options: options || {},
    changeLocale(locale: string) {
      this.current = locale
    },
    setLocaleMessage(locale: string, messages: I18nLocaleMessages) {
      locales[locale] = Object.assign({}, locales[locale] || {}, messages)
    },
    getLocaleMessage(locale: I18nLocale): I18nLocaleMessages {
      return locales[locale] || {}
    },
  }
}

export * from './types'

/**
 * Super lightweight internationalization (i18n) plugin for Petite Vue
 *
 * @packageDocumentation
 */
