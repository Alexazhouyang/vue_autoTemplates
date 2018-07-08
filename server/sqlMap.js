// sql语句
var sqlMap = {
    // 用户
    user: {
        add: 'insert into user(name, password, email, phone, gender) values (?,?,?,?,?)',
        select: 'SELECT * FROM user',
        update: 'update user set',
    },
    //商品
    product: {
        add: 'insert into product(id, name, description) values (0, ?, ?)',
        select: 'SELECT * FROM product',
        update: 'update product set',
    }
}

module.exports = sqlMap;