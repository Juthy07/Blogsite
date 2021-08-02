const registry = require('../../data/users') //here require() is used to include a module from a seperate file. It reads a JavaScript file, executes the file, and then proceeds to return the exports object.
const { validUsername, validPassword, validRepassword, getError, validEmail, getPrisma } = require('../../util/util')

//Prisma
const prisma = getPrisma()

async function registration(req, res) {
    //rep, res = HTTP request and response arguments to the middleware function, called "req" & "res" by convention.
    const body = req.body //The req.body property contains key-value pairs of data submitted in the request body.
    const { email, username, password, repassword } = body
    const error = {}

    if (
        validEmail(email, error) &&
        validUsername(username, error) &&
        validPassword(password, error) &&
        validRepassword(repassword, password, error)
    ) {
        try {
            await registerUser({ email, username, password })
            res.json({
                success: true,
                message: `User registered successfully.`,
            })
        } catch (e) {
            console.log(e)
            res.json({
                success: false,
                message: `User already exists.`,
                error: e,
            })
        }
    } else {
        res.json({ success: false, error: getError(error) })
    }
}

async function registerUser({ email, username, password }) {
    debugger
    const hasRegisteredUser = await prisma.user.findFirst({ where: { email } })
    if (hasRegisteredUser) {
        res.json({ error: 'User already exists.' })
    }
    await prisma.user.create({ data: { email, username, password } })
}

module.exports = registration
