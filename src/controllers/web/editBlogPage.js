const { getTemplate } = require('../../util/util')

function editBlogPage(req, res) {
    //console.log(req)
    const page = getTemplate('editBlog.html')

    res.setHeader('Content-Type', 'text/html')
    res.end(page)
}

module.exports = editBlogPage
