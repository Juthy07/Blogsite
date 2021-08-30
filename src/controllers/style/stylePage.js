const { getStyles } = require('../../util/util')

function stylePage(req, res) {
    const page = getStyles('styles.css')

    res.setHeader('Content-Type', 'text/css')
    res.end(page)
}

module.exports = stylePage
