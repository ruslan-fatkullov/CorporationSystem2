import store from "../vuex/store"
const locales = {
    'ru-RU': {
        FullName: 'Полное имя',
        Email: 'Почта',
        Pasport: 'Паспортные данные',
        Login: 'Логин',
        Password: 'Пароль',
        ChangePassword: "Поменять пароль",
        Update: "Обновить",
        ChoseParameters: "Поменять параметры",
        CorporationSystem: "Корпоративные системы",
        Graph: "График",
        Test: "Тест",
        Profile: "Профиль",
        Logout: "Выйти",
        SignUp: "Войти",
        Autorization: "Авторизация",
        Registration: "Регистрация",
        Name: "Имя",
        CrtPassword: "Создайте пароль",
        CnfPassword: "Повторите пароль"
    },
    'en-US': {
        FullName: 'Full name',
        Email: 'Email',
        Pasport: 'Pasport data',
        Login: 'Login',
        Password: 'Password',
        ChangePassword: "Change password",
        Update: "Update",
        ChoseParameters: "Change parameters",
        CorporationSystem: "Corporation system",
        Graph: "Graph",
        Test: "Test",
        Profile: "Profile",
        Logout: "Logout",
        SignUp: "Sign Up",
        Autorization: "Autorization",
        Registration: "Registration",
        Name: "Name",
        CrtPassword: "Create password",
        CnfPassword: "Confirm password"
    }
}

export default function localizeFilter(key) {
    const locale = store.getters.getLocale// || "ru-RU"
    console.log(locale)
    return locales[locale][key] || '[LocalizeError]: key ${key} not found'
}