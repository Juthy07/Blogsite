const session = require('express-session')
const { includes, splice } = require('../../data/users')

const { getPrisma } = require('../../util/util')

const prisma = getPrisma()

async function getBlog(req, res) {
    // 1 Get list of all blog data from database

    const count = await prisma.blog.count()
    const blogData = await prisma.blog.findMany()
    const blogDataWithUser = []
    for (let i = 0; i < blogData.length; i++) {
        const user = await prisma.user.findFirst({
            where: {
                userID: blogData[i].userFK,
            },
        })
        const newBlogEntry = Object.assign({ username: user.username }, blogData[i])
        blogDataWithUser.push(newBlogEntry)
        blogDataWithUser.sort(function (a, b) {
            // Turn your strings into dates, and then subtract them
            // to get a value that is either negative, positive, or zero.
            return new Date(b.dateforsorting) - new Date(a.dateforsorting)
        })

        debugger
    }

    const currentUser = await prisma.user.findFirst({
        select: {
            userID: true,
            username: true,
        },
        where: {
            userID: req.session.user.userID,
        },
    })

    return res.json({
        success: true,
        data: {
            blog: blogDataWithUser,
            count,
            user: currentUser,
        },
    })
}
module.exports = getBlog
