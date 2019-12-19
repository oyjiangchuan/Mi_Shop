const router = require('koa-router')()
const userService = require('../controllers/mysqlConfig')
const jwt = require('jsonwebtoken') // jwt生成token

router.prefix('/users') // 添加前缀

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

router.get('/all', async function (ctx, next) {
  await userService.getAllUsers().then((res) => {
    console.log('打印结果' + JSON.stringify(res))
    ctx.body = res
  })
})

// 注册 post接口
router.post('/userRegister', async (ctx, next) => {
  var _username = ctx.request.body.username // 拿到用户输入信息
  var _userpwd = ctx.request.body.userpwd
  var _nickname = ctx.request.body.nickname
  if (!_username && !_userpwd && !_nickname) {
    ctx.body = {
      code: 200,
      type: '800001',
      mess: '用户名密码昵称不能为空!'
    }
    return
  }
  let user = {
    username: _username,
    userpwd: _userpwd,
    nickname: _nickname
  }
  await userService.findUser(user.username).then(async (res) => {
    if (res.length) {
      try {
        throw Error('用户名已存在')
      } catch (error) {
        console.log(error)
      }
      ctx.body = {
        code: 200,
        type: '800003',
        data: 'err',
        mess: '用户名已存在'
      }
    } else {
      await userService.insertUser([user.username, user.userpwd, user.nickname]).then((res) => {
        let r = ''
        if (res.affectedRows != 0) {
          r = 'ok'
          ctx.body = {
            code: 200,
            type: '800000',
            data: r,
            mess: '注册成功'
          }
        } else {
          r = 'error'
          ctx.body = {
            code: 200,
            type: '800004',
            data: r,
            mess: '注册失败'
          }
        }
      })
    }
  })
})


// 登录 post接口
router.post('/userLogin', async (ctx, next) => {
  var _username = ctx.request.body.username // 拿到用户输入信息
  var _userpwd = ctx.request.body.userpwd

  await userService.userLogin(_username, _userpwd).then((res) => {
    let r = ''
    if (res.length) {
      r = 'ok'
      let result = {
        id: res[0].id,
        nickname: res[0].nickname,
        username: res[0].username
      }
      // token的生成
      let payload = {
        username: result.username,
        admin: true
      }
      let secret = 'MISHOP'
      let token = jwt.sign(payload, secret, {expiresIn: 60 * 60 * 24}) // 有效时间24小时

      ctx.body = { // 显示在network 中的XHR中的responses中
        code: 200,
        type: '800000',
        data: result,
        token: token,
        mess: '登陆成功'
      }
    } else {
      r = 'error'
      ctx.body = {
        code: 200,
        type: '800004',
        data: r,
        mess: '账号或密码错误'
      }
    }
  }).catch((err) => {
    ctx.body = {
      code: 200,
      type: '800002',
      data: err
    }
  })
})



module.exports = router
