// 连接数据库
const mysql = require('mysql')
const config = require('./defaultConfig')

// 创建线程池
var pool = mysql.createPool({
  host: config.databases.HOST,
  user: config.databases.USERNAME,
  password: config.databases.PASSWORD,
  database: config.databases.DATABASES,
  port: config.databases.PORT
})

// 创建统一连接数据库的方法
let allServies = {
  query: function(sql, values) {
    return new Promise((resolve, reject) => {
      pool.getConnection(function(err, connection) { // 连接数据库
        if (err) {
          reject(err)
        } else {
          connection.query(sql, values, (err, rows) => {
            if (err) {
              reject(err)
            } else {
              resolve(rows)
            }
            connection.release() // 释放连接池
          }) // 查询方法
        }
      })
    })
  }
}

// 读取所有user表数据 测试数据连接
let getAllUsers = function() {
  let _sql = `select * from users;`
  return allServies.query(_sql)
}

// 注册用户的方法
let insertUser = function(value) {
  let _sql = `insert into users set username=?,userpwd=?,nickname=?;`
  return allServies.query(_sql, value)
}


// 查找用户的方法
let findUser = function(username) {
  let _sql = `select * from users where username="${username}";`
  return allServies.query(_sql)
}

// 用户登录的方法
let userLogin = function(username, userpwd) {
  let _sql = `select * from users where username="${username}" and userpwd="${userpwd}";`
  return allServies.query(_sql)
}


module.exports = {
  getAllUsers,
  insertUser,
  findUser,
  userLogin
}