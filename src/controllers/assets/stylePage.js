const { getStyles } = require('../../util/util')
const path = require('path')

function stylePage(req, res) {
    try {
        var fileName = path.basename(req.path)
        const file = getStyles(fileName)
        res.setHeader('Content-Type', 'text/css')
        //debugger
        res.end(file)
    } catch (e) {
        debugger
    }
}

module.exports = stylePage
