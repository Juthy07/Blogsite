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
        if (session) {
            return next()
        }
    }
    console.log('Invalid Session.')
    return res.redirect('/login')
}

function isSessionValid(sid) {
    // check if the session id exists.
    // if not throw error
    return prisma.session.findFirst({
        where: { sid },
    })
}

module.exports = validateUserAuth
