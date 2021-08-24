const {
    loginApi,
    registerApi,
    logoutApi,
    blogApi,
    createBlogApi,
    editBlogApi,
    deleteBlogApi,
} = require('../controllers/api')
const { homePage, registerPage, loginPage, errorPage, createBlogPage, editBlogPage } = require('../controllers/web')
const { apiRoute, webRoute } = require('./routes')
const authMiddlerware = require('../middlewares/auth')
const { getTemplate } = require('../util/util')

const apiRouter = (app) => {
    app.post(apiRoute.LOGIN_API_ROUTE, loginApi)
    app.post(apiRoute.REGISTER_API_ROUTE, registerApi)
    app.post(apiRoute.LOGOUT_API_ROUTE, authMiddlerware, logoutApi)
    app.get(apiRoute.GETBLOG_API_ROUTE, authMiddlerware, blogApi)
    app.post(apiRoute.CREATEBLOG_API_ROUTE, authMiddlerware, createBlogApi)
    app.post(apiRoute.EDITBLOG_API_ROUTE, authMiddlerware, editBlogApi)
    app.post(apiRoute.DELETEBLOG_API_ROUTE, authMiddlerware, deleteBlogApi)
}

const webRouter = (app) => {
    app.get(webRoute.HOME_PAGE_ROUTE, authMiddlerware, homePage)
    app.get(webRoute.LOGIN_PAGE_ROUTE, loginPage)
    app.get(webRoute.REGISTER_PAGE_ROUTE, registerPage)
    app.get(webRoute.ERROR_PAGE_ROUTE, errorPage)
    app.get(webRoute.CREATE_BLOG_ROUTE, authMiddlerware, createBlogPage)
    app.get(webRoute.EDIT_BLOG_ROUTE, authMiddlerware, editBlogPage)
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
