const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')
const session = require('express-session')
const ConnectPgSimple = require('connect-pg-simple')
const connectPgSimple = ConnectPgSimple(session)
const appRouter = require('./routes/router')

require('dotenv').config()

const app = express()
app.use(
    session({
        store: new connectPgSimple(),
        secret: process.env.SESSION_SECRET,
        resave: false,
        cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 },
        saveUninitialized: true,
        tableName: 'session',
    })
)

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
appRouter(app)

module.exports = app
