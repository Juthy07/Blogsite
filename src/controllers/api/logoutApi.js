const logouts = require('../../data/users')
const { getPrisma, getError } = require('../../util/util.js')

//Prisma
const prisma = getPrisma()

async function logout(req, res) {
    try {
        await deleteSession(req.sessionID)

        return res.json({
            success: true,
            message: `User logged out.`,
        })
    } catch (e) {
        console.log(e)
        return res.json({
            error: e.message,
            // message: 'Error!',
        })
    }
}

function deleteSession(sid) {
    console.log('Session id here!!! : ' + sid)

    return prisma.session.delete({
        where: {
            sid,
        },
    })
}

module.exports = logout
