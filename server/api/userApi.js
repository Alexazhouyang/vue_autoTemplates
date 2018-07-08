var models = require('../db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../sqlMap');

// connect database
var conn = mysql.createConnection(models.mysql);

conn.connect();
var jsonWrite = function(res, ret) {
    if(typeof ret === 'undefined') {
        res.send('err');
    } else {
        console.log(ret);
        res.send(ret);
    }
};


// add User
router.post('/addUser', (req, res) => {
    var sql = $sql.user.add;
    var params = req.body;
    console.log(params);
    conn.query(sql, [params.name, params.password,params.email, params.phone, params.gender], function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
        }
    })
});

//check Login User info
router.post('/login', (req, res) => {
    var sql = $sql.user.select
    var params = req.body;
    console.log(params);
    if (params.name) {
        sql += " where name ='"+ params.name +"'";
        console.log(sql);
    }     
    conn.query(sql, [params.name], function(err, result) {
        if (err) {
            console.log(err);
        }

        if (result[0]=== undefined) { 
            res.send('-1');// not this username ,data return -1
          }
        else{      
                if(result[0].password === params.password){
                    jsonWrite(res, result);
                }else{
                    res.send("0") // password is not correct
                }
        }
    })
});

//get user info 
router.get('/getUser', (req, res) => {
    var sql = $sql.user.select;
    // var sql_password = $sql.user.select_password;
    var params = req.body;
    console.log(params);
    if (params.name) {
        sql += "where name ='"+ params.name +"'";
    }
    conn.query(sql, params.name, function(err, result) {
        if (err) {
            console.log(err);
        }
        // console.log(result);
        if (result[0] === undefined) {
            res.send('-1')   //no username，data return -1
        } else {
            jsonWrite(res, result);
        }
    })
});

//update user info
router.post('/updateUser', (req, res) => {
    var sql_update = $sql.user.update;
    var params = req.body;
    console.log(params);
    if (params.id) {
        sql_update  += " email = '" + params.email +
                        "',phone = '" + params.phone +
                        "',birth = '" + params.birth +
                        "',sex = '" + params.sex +
                        "' where id ='"+ params.id + "'";
    }    
    conn.query(sql_update, params.id, function(err, result) {
        if (err) {
            console.log(err);
        }
        console.log(result);
        if (result.affectedRows === undefined) {
            res.send('update failed，pls contact us')   //no username，data 返回-1
        } else {
            res.send('ok'); 
        }
    })
});

//modify password
router.post('/modifyPassword', (req, res) => {
    var sql_modify = $sql.user.update;
    var params = req.body;
    console.log(params);
    if (params.id) {
        sql_modify +=  " password = '" + params.password +
                        "' where id ='"+ params.id + "'";
    }
    conn.query(sql_modify, params.id, function(err, result) {
        if (err) {
            console.log(err);
        }
        // console.log(result);
        if (result.affectedRows === undefined) {
            res.send('modify failed，pls contact us')   //no username，data return -1
        } else {
            res.send('ok'); 
        }
    })
});

module.exports = router;