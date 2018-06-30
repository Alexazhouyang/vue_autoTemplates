// sql语句
var sqlMap = {
    // 用户
    user: {
        add: 'insert into user(id, name, age) values (0, ?, ?)',
        select: 'SELECT * FROM user'
    },
    //商品
    product: {
        add: 'insert into product(id, name, description) values (0, ?, ?)',
        select: 'SELECT * FROM product'
    }
}

module.exports = sqlMap;