const { getImage } = require('../../util/util')
const path = require('path')

function images(req, res) {
    try {
        var fileName = path.basename(req.path)
        const file = getImage(fileName)
        //res.setHeader('Content-Type', 'image/jpg')
        res.end(file)
        debugger
    } catch (e) {
        debugger
    }
}

module.exports = images
