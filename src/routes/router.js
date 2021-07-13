const { loginApi, registerApi, logoutApi } = require('../controllers/api')
const { homePage, registerPage, loginPage, errorPage } = require('../controllers/web')
const { apiRoute, webRoute } = require('./routes')
const authMiddlerware = require('../middlewares/auth')

const apiRouter = (app) => {
    app.post(apiRoute.LOGIN_API_ROUTE, loginApi)
    app.post(apiRoute.REGISTER_API_ROUTE, registerApi)
    app.post(apiRoute.LOGOUT_API_ROUTE, authMiddlerware, logoutApi)
}

const webRouter = (app) => {
    app.get(webRoute.HOME_PAGE_ROUTE, authMiddlerware, homePage)
    app.get(webRoute.LOGIN_PAGE_ROUTE, loginPage)
    app.get(webRoute.REGISTER_PAGE_ROUTE, registerPage)
    app.get(webRoute.ERROR_PAGE_ROUTE, errorPage)
}

const defaultRouter = (app) => {
    app.get('*', (req, res) => {
        res.redirect(webRoute.ERROR_PAGE_ROUTE)
    })
}

const appRouter = (app) => {
    apiRouter(app)
    webRouter(app)
    defaultRouter(app)
}

module.exports = appRouter