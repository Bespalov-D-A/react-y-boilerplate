import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend, { type HttpBackendOptions } from 'i18next-http-backend'
import { backendOptions } from '@app/config/i18n/backendOptions'
import { config } from '@shared/config/commonConfig'

void i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(Backend)
  .init<HttpBackendOptions>({
    supportedLngs: config.supportedLngs,
    // resources,
    // lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option
    ...backendOptions,
    fallbackLng: 'en',
    debug: WEBPACK_IS_DEV
    // interpolation: {
    //     escapeValue: false // react already safes from xss
    // }
  })

export default i18n
