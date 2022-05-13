import type { I18n } from '@lingui/core'
import { en, it } from 'make-plural/plurals'

//anounce which locales we are going to use and connect them to approprite plural rules
export function initTranslation(i18n: I18n): void {
  i18n.loadLocaleData({
    en: { plurals: en },
    it: { plurals: it },
    pseudo: { plurals: en },
  })
}

export async function loadTranslation(locale: string) {
  return await import(`../translations/${locale}/messages.js`)
}
