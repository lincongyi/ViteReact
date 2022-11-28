const KEY = 'token'

const getToken = () => localStorage.getItem(KEY)

const setToken = (token: string) => localStorage.setItem(KEY, token)

const removeToken = () => localStorage.removeItem(KEY)

const isAuth = !!getToken()

export { getToken, setToken, removeToken, isAuth }
