// API routes
const LOGIN_API_ROUTE = `/api/login`
const LOGOUT_API_ROUTE = `/api/logout`
const REGISTER_API_ROUTE = `/api/register`
const GETBLOG_API_ROUTE = `/api/blog`
const CREATEBLOG_API_ROUTE = '/api/createblog'
const EDITBLOG_API_ROUTE = '/api/editblog'
const DELETEBLOG_API_ROUTE = '/api/deleteblog'

// Web routes
const HOME_PAGE_ROUTE = '/'
const LOGIN_PAGE_ROUTE = '/login'
const LOGOUT_PAGE_ROUTE = '/logout'
const REGISTER_PAGE_ROUTE = '/register'
const CREATE_BLOG_ROUTE = '/createblog'
const EDIT_BLOG_ROUTE = '/editblog'

const ERROR_PAGE_ROUTE = '/error'

// CSS routes
const STYLE_PAGE = new RegExp('/styles/.*.css$')
const IMAGES = new RegExp('/image/.*.(png|jpg|jpeg|svg)$')

module.exports = {
    apiRoute: {
        LOGIN_API_ROUTE,
        LOGOUT_API_ROUTE,
        REGISTER_API_ROUTE,
        GETBLOG_API_ROUTE,
        CREATEBLOG_API_ROUTE,
        EDITBLOG_API_ROUTE,
        DELETEBLOG_API_ROUTE,
    },
    webRoute: {
        HOME_PAGE_ROUTE,
        LOGIN_PAGE_ROUTE,
        LOGOUT_PAGE_ROUTE,
        REGISTER_PAGE_ROUTE,
        ERROR_PAGE_ROUTE,
        CREATE_BLOG_ROUTE,
        EDIT_BLOG_ROUTE,
    },
    assetsRoute: {
        STYLE_PAGE,
        IMAGES,
    },
}
