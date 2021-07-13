const { getTemplate } = require('../../util/util')

function registerController(req, res) {
    console.log(req)
    const page = getTemplate('register.html')

    res.setHeader('Content-Type', 'text/html')
    res.end(page)
}

module.exports = registerController
