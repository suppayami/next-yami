import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

import ENCommon from './en/common.json'

export const i18n = i18next.createInstance().use(initReactI18next)

// TODO: Configure i18n
const initI18n = () =>
    i18n.init({
        lng: 'en',
        fallbackLng: 'en',
        debug: false,

        ns: ['common'],
        defaultNS: 'common',

        resources: {
            en: {
                common: ENCommon,
            },
        },
    })

initI18n()
