<template>
  <div class="cart-empty cart-empty-nologin">
    <h2>您的购物车还是空的！</h2>
    <p class="login-desc">登录后将显示您之前加入的商品</p>
    <router-link class="btn btn-primary btn-login" tag="a" to="/login">立即登录</router-link>
    <router-link class="btn btn-primary btn-shoping" tag="a" to="/register">马上去购物</router-link>
  </div>
</template>

<script>
export default {
  name: "emptyCart"
};
</script>

<style scoped>
.cart-empty {
  height: 273px;
  padding-left: 558px;
  margin: 65px 0 130px;
  background: url(https://s01.mifile.cn/i/cart/cart-empty.png) no-repeat 124px 0;
  color: #b0b0b0;
  overflow: hidden;
}

.cart-empty h2 {
  margin: 70px 0 15px;
  font-size: 36px;
}

.cart-empty-nologin h2 {
  margin-top: 50px;
  margin-bottom: 0;
  font-weight: 700;
}

.cart-empty .login-desc {
  display: none;
  margin: 0 0 20px;
  font-size: 20px;
  color: #b0b0b0;
}

.cart-empty-nologin .login-desc {
  display: block;
}

.cart-empty .btn {
  width: 170px;
  height: 48px;
  line-height: 48px;
}

.cart-empty .btn-login {
  display: none;
}

.cart-empty-nologin .btn-login {
  display: inline-block;
  *zoom: 1;
  *display: inline;
  margin-right: 10px;
}

.cart-empty-nologin .btn-shoping {
  background-color: #f5f5f5;
  color: #ff6700;
}
</style>