const { getTemplate } = require('../../util/util')

function createBlogPage(req, res) {
    //console.log(req)
    const page = getTemplate('createBlog.html')

    res.setHeader('Content-Type', 'text/html')
    res.end(page)
}

module.exports = createBlogPage
