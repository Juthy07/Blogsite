const edit = require('../../data/users')
const { getPrisma } = require('../../util/util')

const prisma = getPrisma()
async function editBlog(req, res) {
    try {
        const body = req.body
        const { id, title, content } = body
        const blogid = JSON.parse(id)

        //debugger

        const blogData = await prisma.blog.findFirst({
            select: {
                blogtitle: true,
                blogcontent: true,
            },
            where: {
                blogID: blogid,
            },
        })

        await prisma.blog.update({
            where: { blogID: blogid },
            data: { blogtitle: title, blogcontent: content },
        })

        res.json({
            success: true,
            data: blogData,
            message: 'Blog updated!',
        })
    } catch (e) {
        console.log(e)
        res.json({
            success: false,
            error: e,
        })
    }
}

module.exports = editBlog
