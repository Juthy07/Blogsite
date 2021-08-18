const deleting = require('../../data/users')
const { getPrisma, getError } = require('../../util/util')

//PRISMA
const prisma = getPrisma()
async function deleteBlog(req, res) {
    try {
        const body = req.body
        const { blogid } = body
        const id = JSON.parse(blogid)

        await deleteFromBlogTable(id)

        return res.json({
            success: true,
            message: 'Blog deleted successfully.',
        })
    } catch (e) {
        return res.json({
            error: e.message,
        })
    }
}

async function deleteFromBlogTable(id) {
    return prisma.blog.delete({
        where: {
            blogID: id,
        },
    })
}

module.exports = deleteBlog
