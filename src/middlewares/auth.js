// const
const { getPrisma } = require('../util/util')
const prisma = getPrisma()

async function validateUserAuth(req, res, next) {
    // require('fs').writeFileSync('./request.json', JSON.stringify(req, null, 4))
    const sessionID = req.sessionID
    //console.log('Session!: ' + sessionId)
    try {
        if (!sessionID) throw new Error('Session not found')
        await isSessionValid()
    } catch (e) {
        console.log(e)

        return res.redirect('/login')
    }

    next()
}

function isSessionValid(sid) {
    // check if the session id exists.
    // if not throw error
    return prisma.session.findFirst({
        where: { sid },
    })
}

module.exports = validateUserAuth
