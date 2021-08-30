const { getImage } = require('../../util/util')

function images(req, res) {
    //console.log(req)
    const page = getImage('blog2.jpeg')

    res.setHeader('Content-Type', 'image/jpeg')
    res.end(page)
}

module.exports = images
