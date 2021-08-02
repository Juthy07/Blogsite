const { webRoute } = require('../../routes/routes')
const { getTemplate } = require('../../util/util')

function createBlogPage(req, res) {
    const page = getTemplate('createBlog.html')

    res.setHeader('Content-Type', 'text/html')
    res.end(page)
}

module.exports = createBlogPage
