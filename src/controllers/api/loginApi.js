const login = require('../../data/users')
const { validUsername, validPassword, getError, validEmail, getPrisma } = require('../../util/util')

//Prisma
const prisma = getPrisma()

async function logging(req, res) {
    const body = req.body
    const { email, username, password } = body
    const error = {}

    if (validEmail(email, error) && validUsername(username, error) && validPassword(password, error)) {
        try {
            await userLogin({ email, username, password })
            res.json({
                success: true,
                message: `User Logged In.`,
            })
        } catch (e) {
            console.log(e)
            res.json({
                success: false,
                error: e,
            })
        }
    } else {
        res.json({ success: false, error: getError(error) })
    }

    async function userLogin({ email, username, password }) {
        const validUser = await prisma.register.findFirst({
            where: {
                email,
                username,
                password,
            },
        })
        if (!validUser) {
            res.json({ error: 'User invalid.' })
        }
    }
}

module.exports = logging
