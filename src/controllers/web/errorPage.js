const { getTemplate } = require('../../util/util')

function errorPage(req, res) {
    const page = getTemplate('error.html')

    res.setHeader('Content-Type', 'text/html')
    res.end(page)
}

module.exports = errorPage
