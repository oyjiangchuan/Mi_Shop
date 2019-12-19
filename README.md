# vue-mi-shop

# vue-mi-shop 项目依赖
1. npm install vue-lazyload --save      实现图片的懒加载依赖
2. npm install axios --save -dev        axios依赖
3. npm install vuex                     安装vuex
4. npm install --save-dev babel-polyfill安装babel-polyfill解决兼容问题 使浏览器 vue支持IE9+ ES678 async await promise
5. npm i vue-awesome-swiper --save      安装swiper
6. npm i mockjs -D                      安装mockjs 模拟easyMock 提供接口
7. npm install vue-video-player --save  安装vue-video-player 播放视频

## 项目运行说明
koa-mi文件夹为本项目使用koa搭建的后台，写的很简单，使用到mysql建立了一张user表，实现前端的登录注册功能并且还没有对电话号码，密码进行校验和加密，比较简陋只为了可以在前台实现登陆注册的功能。

下载文件之后就可以分别进入koa-mi文件夹和在当前的项目文件夹下 npm i安装好依赖，然后分别运行 npm start或者npm run dev将前后端的项目分别启动即可。

在实现登录注册之前 你需要先在自己本地的建好一个数据库和一张表 在后端项目的controllers文件下的defaultConfig.js文件中配置数据库名和密码。
表的样式如下：

username|userpwd|nickname
--|:--:|--:
12345678911|123456|kk
12345678912|13579|cc
12345678913|24680|jj


## 前端项目src目录结构
```
src
|  ├─App.vue
|  ├─main.js
|  ├─utils
|  ├─store
|  |   ├─index.js
|  |   ├─types.js
|  |   ├─module
|  |   |   ├─cart.js
|  |   |   ├─products.js
|  |   |   └user.js
|  ├─router
|  |   └index.js
|  ├─pages
|  |   ├─seckill
|  |   |    ├─seckill.vue
|  |   |    └seckillHeader.vue
|  |   ├─register
|  |   |    └register.vue
|  |   ├─products
|  |   ├─portal
|  |   |   ├─portal.vue
|  |   |   ├─childSectionPages
|  |   |   |         └detail.vue
|  |   ├─phone
|  |   |   └phone.vue
|  |   ├─login
|  |   |   └login.vue
|  |   ├─IntelligenceAppliances
|  |   ├─home
|  |   |  ├─home.vue
|  |   |  ├─toolBar.vue
|  |   |  ├─navigation
|  |   |  |     └navigation.vue
|  |   |  ├─mainPage
|  |   |  |    ├─mainPage.vue
|  |   |  |    ├─videoBox.vue
|  |   |  |    ├─flashsale
|  |   |  |    |     ├─countdown.vue
|  |   |  |    |     └flashsale.vue
|  |   |  ├─commonSection
|  |   |  |       ├─banner-box.vue
|  |   |  |       ├─box-hd.vue
|  |   |  |       ├─brick-list.vue
|  |   |  |       ├─brick-promo-list.vue
|  |   |  |       └commonSection.vue
|  |   ├─cart
|  |   |  ├─cart.vue
|  |   |  ├─cartHeader.vue
|  |   |  ├─mainPage
|  |   |  |    ├─cartRecommend.vue
|  |   |  |    ├─emptyCart.vue
|  |   |  |    ├─fullCart.vue
|  |   |  |    └mainPage.vue
|  |   ├─appliances
|  ├─mock
|  |  ├─index.js
|  |  ├─json
|  |  |  ├─cartRecommend.json
|  |  |  ├─mainPage.json
|  |  |  ├─navMenu.json
|  |  |  ├─ProductData.json
|  |  |  └seckill.json
|  ├─components
|  |     ├─loginRegFooter.vue
|  |     ├─common
|  |     |   ├─MiHeader
|  |     |   |    ├─MiHeader.vue
|  |     |   |    ├─navCategory.vue
|  |     |   |    ├─navMenu.vue
|  |     |   |    ├─search.vue
|  |     |   |    ├─siteHeader.vue
|  |     |   |    ├─siteHeaderNav.vue
|  |     |   |    └siteTopbar.vue
|  |     |   ├─MiFooter
|  |     |   |    └MiFooter.vue
|  ├─common
|  |   ├─js
|  |   | ├─toast
|  |   | |   ├─agreement.vue
|  |   | |   ├─common.css
|  |   | |   ├─deleteProdcuts.vue
|  |   | |   ├─index.js
|  |   | |   └video.vue
|  ├─assets
|  |   ├─iconfont
|  |   |    ├─iconfont.css
|  |   |    ├─iconfont.eot
|  |   |    ├─iconfont.svg
|  |   |    ├─iconfont.ttf
|  |   |    ├─iconfont.woff
|  |   |    └iconfont.woff2
|  |   ├─css
|  |   |  ├─base.css
|  |   |  └reset.css
|  ├─api
|  |  └index.js
```


## 后端项目目录结构
```
├─koa-mi
|   ├─app.js
|   ├─package-lock.json
|   ├─package.json
|   ├─README.md
|   ├─views
|   |   ├─error.ejs
|   |   └index.ejs
|   ├─routes
|   |   ├─index.js
|   |   └users.js
|   ├─public
|   |   ├─stylesheets
|   |   |      └style.css
|   ├─controllers
|   |      ├─defaultConfig.js
|   |      └mysqlConfig.js
|   ├─bin
|   |  └www
```