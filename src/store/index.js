import Vue from 'vue'
import Vuex from 'vuex'
import cart from './module/cart'
import products from './module/products'
import user from './module/user'
Vue.use(Vuex)

export default new Vuex.Store({
  // 设计数据中心 模块
  // 商品 products
  // 购物车 cart 
  modules: {  // 分模块
    user,
    cart,
    products
  }
})