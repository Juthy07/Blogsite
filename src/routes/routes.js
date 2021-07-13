// API routes
const apiRouteMaker = (path) => `/api/${path}`

const LOGIN_API_ROUTE = apiRouteMaker('login')
const LOGOUT_API_ROUTE = apiRouteMaker('logout')
const REGISTER_API_ROUTE = apiRouteMaker('register')

// Web routes
const HOME_PAGE_ROUTE = '/'
const LOGIN_PAGE_ROUTE = '/login'
const LOGOUT_PAGE_ROUTE = '/logout'
const REGISTER_PAGE_ROUTE = '/register'

const ERROR_PAGE_ROUTE = '/error'

module.exports = {
    apiRoute: {
        LOGIN_API_ROUTE,
        LOGOUT_API_ROUTE,
        REGISTER_API_ROUTE,
    },
    webRoute: {
        HOME_PAGE_ROUTE,
        LOGIN_PAGE_ROUTE,
        LOGOUT_PAGE_ROUTE,
        REGISTER_PAGE_ROUTE,
        ERROR_PAGE_ROUTE,
    },
}
