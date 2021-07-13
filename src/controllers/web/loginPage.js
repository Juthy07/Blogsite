const { getTemplate } = require('../../util/util')

function loginController(req, res) {
    //console.log(req)
    const page = getTemplate('login.html')
    res.setHeader('Content-Type', 'text/html')
    res.end(page)
}

module.exports = loginController
