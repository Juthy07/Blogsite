const { webRoute } = require('../../routes/routes')
const { getTemplate } = require('../../util/util')

function homePage(req, res) {
    const page = getTemplate('index.html')

    res.setHeader('Content-Type', 'text/html')
    res.end(page)
}

module.exports = homePage
