const knex = require('../config/db.js')
const fs = require('fs')

const getPdf = (req, res) => {
    var file = fs.createReadStream('config\\lec02.pdf');
    var stat = fs.statSync('config\\lec02.pdf');
    res.setHeader('Content-Length', stat.size);
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=test.pdf');
    file.pipe(res);
}

const getImg = (req, res, next) => {
    var file = fs.createReadStream('config\\image01.jpg');
    var stat = fs.statSync('config\\image01.jpg');
    res.setHeader('Content-Length', stat.size);
    res.setHeader('Content-Type', 'application/jpg');
    res.setHeader('Content-Disposition', 'attachment; filename=paimon.jpg');
    file.pipe(res);
}

module.exports = {
    getPdf,
    getImg
}