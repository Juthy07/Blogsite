//const session = require('express-session')
const create = require('../../data/users')
const { getPrisma } = require('../../util/util')

const prisma = getPrisma()

async function createBlog(req, res) {
    const dd = new Date().getDate()
    const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const mm = month[new Date().getMonth()]
    const yyyy = new Date().getFullYear()

    const datecreated = dd + ' - ' + mm + ' - ' + yyyy

    const body = req.body
    const { blogtitle, blogcontent } = body
    console.log(blogtitle)

    const currentUser = await prisma.user.findFirst({
        where: {
            userID: req.session.user.userID,
        },
    })

    const userID = currentUser.userID
    console.log('HEREEEE:' + userID)

    try {
        await addBlog({ userID, blogtitle, blogcontent, datecreated })
        res.json({
            success: true,
            message: 'Blog created successfully',
        })
    } catch (e) {
        console.log(e)
        res.json({
            success: false,
            error: e,
        })
    }
}

async function addBlog({ userID, blogtitle, blogcontent, datecreated }) {
    const userRecord = await prisma.user.findUnique({
        where: {
            userID,
        },
    })
    await prisma.blog.create({
        data: {
            blogtitle,
            blogcontent,
            datecreated,
            datemodified: datecreated,
            userFK: userRecord.userID,
        },
        include: { User: true },
    })
}

module.exports = createBlog
