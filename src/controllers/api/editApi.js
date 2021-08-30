const edit = require('../../data/users')
const { getPrisma } = require('../../util/util')

const prisma = getPrisma()
async function editBlog(req, res) {
    try {
        //Modified Date after Editing
        const dd = new Date().getDate()
        const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        const mm = month[new Date().getMonth()]
        const yyyy = new Date().getFullYear()

        const modifiedDate = dd + ' - ' + mm + ' - ' + yyyy

        const body = req.body
        const { id, title, content } = body
        const blogid = JSON.parse(id)

        debugger

        const blogData = await prisma.blog.findFirst({
            select: {
                blogtitle: true,
                blogcontent: true,
            },
            where: {
                blogID: blogid,
            },
        })
        debugger
        await prisma.blog.update({
            where: { blogID: blogid },
            data: { blogtitle: title, blogcontent: content, datemodified: modifiedDate },
        })

        res.json({
            success: true,
            data: blogData,
            message: 'Blog updated!',
            modifiedDate: modifiedDate,
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
