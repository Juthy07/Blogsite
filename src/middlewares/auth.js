// const
const session = require('express-session')
const { getPrisma } = require('../util/util')
const prisma = getPrisma()

async function validateUserAuth(req, res, next) {
    // require('fs').writeFileSync('./request.json', JSON.stringify(req, null, 4))
    const sessionID = req.sessionID
    //console.log('Session!: ' + sessionId)
    if (sessionID) {
        const session = await isSessionValid(sessionID)
        // debugger
        if (session) {
            return next()
        }
    }
    debugger
    console.log('Invalid Session.')
    return res.redirect('/login')
}

function isSessionValid(sid) {
    // check if the session id exists.
    // if not throw error
    return prisma.sessionWhiteList.findFirst({
        where: { sid },
    })
}

module.exports = validateUserAuth
