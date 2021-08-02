const { loginApi, registerApi, logoutApi, blogApi } = require('../controllers/api')
const { homePage, registerPage, loginPage, errorPage, createBlogPage } = require('../controllers/web')
const { apiRoute, webRoute } = require('./routes')
const authMiddlerware = require('../middlewares/auth')
const { getTemplate } = require('../util/util')

const apiRouter = (app) => {
    app.post(apiRoute.LOGIN_API_ROUTE, loginApi)
    app.post(apiRoute.REGISTER_API_ROUTE, registerApi)
    app.post(apiRoute.LOGOUT_API_ROUTE, authMiddlerware, logoutApi)
    app.get(apiRoute.GETBLOG_API_ROUTE, authMiddlerware, blogApi)
}

const webRouter = (app) => {
    app.get(webRoute.HOME_PAGE_ROUTE, authMiddlerware, homePage)
    app.get(webRoute.LOGIN_PAGE_ROUTE, loginPage)
    app.get(webRoute.REGISTER_PAGE_ROUTE, registerPage)
    app.get(webRoute.ERROR_PAGE_ROUTE, errorPage)
    app.get(webRoute.CREATE_BLOG_ROUTE, createBlogPage)
}

const defaultRouter = (app) => {
    app.get('*', (req, res) => {
        console.log(req.url)
        res.redirect(webRoute.ERROR_PAGE_ROUTE)
    })
}

const appRouter = (app) => {
    apiRouter(app)
    webRouter(app)
    defaultRouter(app)
}

module.exports = appRouter
