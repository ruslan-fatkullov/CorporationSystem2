import store from "../vuex/store"
const locales = {
    'ru-RU': {
        FullName: 'Полное имя'
    },
    'en-US': {
        FullName: 'Full name'
    }
}

export default function localizeFilter(key) {
    const locale = store.getters.getLocale// || "ru-RU"
    console.log(locale)
    return locales[locale][key] || '[LocalizeError]: key ${key} not found'
}