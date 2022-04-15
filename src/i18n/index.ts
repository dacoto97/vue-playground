import type { LocaleMessageDictionary } from "@intlify/core-base"
import { createI18n } from "vue-i18n"

export enum Locales {
  en = "en"
}

const messages: Record<any, LocaleMessageDictionary<any>> = {
  en: {}
}

const registerTranslations = (context: string, translations: Record<any, LocaleMessageDictionary<any>>) => {
  for (const locale in Locales) {
    messages[locale][context] = translations[locale]
  }
}

// register translations

const i18n = createI18n({
  locale: Locales.en,
  fallbackLocale: Locales.en,
  messages
})

export default i18n
