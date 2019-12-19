import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'   // 全局引入vuex

import 'babel-polyfill' // 引入babel-polyfill
import VueLazyLoad from 'vue-lazyload' // 引入vue-lazyload 实现图片的懒加载
import VueAwesomeSwiper from 'vue-awesome-swiper'  // 引入vue-awesome-swiper
import 'swiper/dist/css/swiper.css' // 引入vue-awesome-swiper 样式
import VueVideoPlayer from 'vue-video-player' // 播放video
import 'video.js/dist/video-js.css' // 引入 video.js样式
import './assets/css/reset.css' // css reset
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { showToast, closeToast } from './common/js/toast/index' // 封装的弹窗组件方法
import { fetchGet } from '@/api/index' // 简单封装的axios请求方法
require('./mock/index') // 引入mockJs

Vue.prototype.$showToast = showToast
Vue.prototype.$closeToast = closeToast
Vue.prototype.$http = fetchGet
Vue.use(VueAwesomeSwiper).use(VueVideoPlayer).use(ElementUI)

Vue.use(VueLazyLoad, { // 使用VueLazyLoad的简单配置
  loading: '../static/image/placeholder-220!110x110.png'
})


Vue.config.productionTip = false

router.beforeEach((to, from, next) => { // 全局路由的拦截
  if (to.meta.requireAuth) {
    // 判断该路由是否需要登录权限
    if (localStorage.getItem('Authorization')) {
      next()
    }
    else {
      next({
        path: '/login',
        query: { redirect: to.fullPath } /* 将跳转的path路由作为参数传递给/login页面 登陆成功后跳转该路由 */
      })
      // console.log(to.fullPath) // 打印出要前往的路由参数
    }
  } else {
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
