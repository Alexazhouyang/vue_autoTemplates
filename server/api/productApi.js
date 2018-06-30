var models = require('../db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../sqlMap');

// 连接数据库
var conn = mysql.createConnection(models.mysql);

conn.connect();
var jsonWrite = function(res, ret) {
    if(typeof ret === 'undefined') {
        res.json({
            code: '1',
            msg: '操作失败'
        });
    } else {
        res.json(ret);
    }
};

// 增加用户接口
router.post('/addProduct', (req, res) => {
    var sql = $sql.product.add;
    var params = req.body;
    console.log(params);
    conn.query(sql, [params.productname, params.description], function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
        }
    })
});
// 查找用户接口
router.get('/selectProduct', (req, res) => {
    var sql = $sql.product.select;
    var params = req.body;
    console.log(params);
    conn.query(sql,function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res,result);
            
        }
    })
});

module.exports = router;