const session = require('express-session')
const blog = require('../../data/users')
const { getPrisma } = require('../../util/util')

const prisma = getPrisma()

async function getBlog(req, res) {
    // 1 Get list of all blog data from database

    const count = await prisma.blog.count()
    const blogData = await prisma.blog.findMany()
    const currentUser = await prisma.user.findFirst({
        where: {
            userID: req.session.user.userID,
        },
    })

    // const i = 1
    // const user = await prisma.blog.findFirst({
    //     where: {
    //         blogID: i,
    //     },
    // })

    //console.log(user)

    return res.json({
        success: true,
        data: blogData,
        count: count,

        currentUser: currentUser.userID,
        currentUserName: currentUser.username,
    })
}
module.exports = getBlog
