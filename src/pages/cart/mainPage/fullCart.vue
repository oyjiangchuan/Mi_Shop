<template>
  <div id="J_cartBox">
    <div class="cart-goods-list">
      <div class="list-head clearfix">
        <div class="col col-check">
          <i class="iconfont icon-hook" :class="{'icon-checkbox-selected':isSelectAll}" @click="selectAllProducts"></i>全选
        </div>
        <div class="col col-img">&nbsp;</div>
        <div class="col col-name">商品名称</div>
        <div class="col col-price">单价</div>
        <div class="col col-num">数量</div>
        <div class="col col-total">小计</div>
        <div class="col col-action">操作</div>
      </div>
      <div class="list-body">
        <!-- 一行item-box代表一列商品 -->
        <div class="item-box" v-for="(product, index) in products" :key="index">
          <div class="item-table">
            <div class="item-row clearfix">
              <div class="col col-check">
                <i class="iconfont icon-hook" :class="{'icon-checkbox-selected': product.checkoutStatus}"  @click="setCheckoutStatus(product.productid)"></i>
              </div>
              <div class="col col-img">
                <a href="javascript:void(0);">
                  <img alt v-lazy="product.src" width="80" height="80" />
                </a>
              </div>
              <div class="col col-name">
                <div class="tags"></div>
                <div class="tags"></div>
                <h3 class="name">
                  <a href="javascript:void(0);">{{product.title}}</a>
                </h3>
              </div>
              <div class="col col-price">
                {{product.price}}
                <p class="pre-info"></p>
              </div>
              <div class="col col-num">
                <div class="change-goods-num clearfix">
                  <a href="javascript:void(0)" @click="delProductQuantity(product.productid)">
                    <i class="iconfont icon-jianhao1"></i>
                  </a>
                  <input
                    type="text"
                    :value="product.quantity"
                    data-buylimit="20"
                    autocomplete="off"
                    class="goods-num"
                  />
                  <a href="javascript:void(0)" @click="addProductQuantity(product.productid)">
                    <i class="iconfont icon-jiahao1"></i>
                  </a>
                </div>
              </div>
              <div class="col col-total">
                {{product.simpleTotal}}
                <p class="pre-info"></p>
              </div>
              <div class="col col-action">
                <a
                  href="javascript:void(0);"
                  @click="deleteProduct('deleteProdcuts', product)"
                  class="del"
                >
                  <i class="iconfont icon-chahao"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="raise-buy-box"></div>
    <div class="cart-bar clearfix">
      <div class="section-left">
        <a href="javascript:void(0);" class="back-shopping">继续购物</a>
        <span class="cart-total">
          共
          <i>{{allProducts}}</i> 件商品，已选择
          <i>{{allSelectProducts}}</i> 件
        </span>
      </div>
      <span class="total-price">
        合计：
        <em>{{total}}</em>元
      </span>
      <a
        href="javascript:void(0);"
        class="btn"
        :class="[!hasSelect ? 'btn-disabled': 'btn-primary']"
      >去结算</a>
      <div class="no-select-tip" :class="{'hide':hasSelect}">
        请勾选需要结算的商品
        <i class="arrow arrow-a"></i>
        <i class="arrow arrow-b"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      productID: [],
      simpleStatus: false,
      selectAll: false
    };
  },
  computed: {
    ...mapGetters("cart", {
      products: "cartProducts",
      total: "cartTotalPrice",
      allSelectProducts: "allSelectProducts",
      isSelectAll: "isSelectAll",
      hasSelect: "hasSelect",
      allProducts: "allProducts"
    }) // mapState和mapGetters添加命名空间的不同写法
  },
  methods: {
    deleteProduct(type, item) {
      this.$showToast(type, item);
    },
    selectAllProducts() {
      this.setCheckoutStatusAll(!this.isSelectAll); // 最终完美实现购物车功能 结束 哈哈哈。。。。。。。。
    },
    ...mapActions("cart", [
      "addProductQuantity",
      "delProductQuantity",
      "setCheckoutStatus",
      "setCheckoutStatusAll"
    ])
  }
};
</script>

<style scoped>
/* cart-goods-list list-head */
.cart-goods-list {
  background-color: #fff;
}
.cart-goods-list .list-head {
  height: 70px;
  line-height: 70px;
  padding-right: 26px;
  color: #424242;
}
.cart-goods-list .list-head .col {
  float: left;
}
.cart-goods-list .col-check {
  width: 110px;
}
.cart-goods-list .col-check .icon-hook {
  display: inline-block;
  *zoom: 1;
  *display: inline;
  width: 18px;
  height: 18px;
  line-height: 18px;
  border: 1px solid #e0e0e0;
  margin-left: 24px;
  background-color: #fff;
  color: #fff;
  font-size: 20px;
  text-align: center;
  vertical-align: middle;
  position: relative;
  top: -1px;
  cursor: pointer;
}
.cart-goods-list .list-head .icon-hook {
  margin-right: 15px;
}

.cart-goods-list .col-check .icon-hook:hover {
  color: #757575;
}

.cart-goods-list .col-check .icon-checkbox-selected {
  color: #fff;
  border-color: #ff6700;
  background-color: #ff6700;
}
.cart-goods-list .col-check .icon-checkbox-selected:hover {
  color: #fff;
}


.cart-goods-list .list-head .col-img {
  width: 120px;
}
.cart-goods-list .col-name {
  width: 380px;
}
.cart-goods-list .list-head .col-name {
  width: 380px;
}
.cart-goods-list .col-price {
  width: 140px;
  padding-right: 18px;
  text-align: center;
  color: #424242;
}

.cart-goods-list .col-num {
  width: 150px;
  text-align: center;
  color: #424242;
}
.cart-goods-list .col-total {
  width: 120px;
  padding-right: 81px;
  text-align: right;
}
.cart-goods-list .col-action {
  width: 80px;
  text-align: center;
}
/* cart-goods-list list-body */
.cart-goods-list .item-box {
  padding: 15px 26px 15px 0;
  border-top: 1px solid #e0e0e0;
}
.cart-goods-list .item-table {
  display: table;
  border-collapse: collapse;
  border-spacing: 0;
}
.cart-goods-list .item-table .item-row {
  display: table-row;
  *zoom: 1;
}
.cart-goods-list .item-table .col {
  display: table-cell;
  vertical-align: middle;
  *float: left;
}
.cart-goods-list .item-box .col-img {
  width: 80px;
  height: 80px;
  padding-right: 40px;
  overflow: hidden;
  _zoom: 1;
}
.cart-goods-list .item-table .col {
  display: table-cell;
  vertical-align: middle;
  *float: left;
}
.cart-goods-list .col-name {
  width: 380px;
}
.cart-goods-list .col-name .name,
.cart-goods-list .col-name .desc {
  width: 380px;
  margin: 0;
}

.cart-goods-list .col-name .name {
  line-height: 1;
  margin-top: 8px;
  margin-bottom: 8px;
  font-size: 18px;
  font-weight: normal;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  _zoom: 1;
}

.cart-goods-list .col-name .name a,
.cart-goods-list .col-name .desc a {
  color: #ff6700;
}

.cart-goods-list .col-name .name a {
  color: #424242;
}

.cart-goods-list .item-box .col-price,
.cart-goods-list .item-sub-box .col-price {
  font-size: 16px;
}

.cart-goods-list .col-price {
  width: 140px;
  padding-right: 18px;
  text-align: center;
  color: #424242;
}

.cart-goods-list .item-box .pre-info {
  margin: 0;
  font-size: 12px;
  color: #b0b0b0;
}
.change-goods-num {
  width: 148px;
  height: 38px;
  border: 1px solid #e0e0e0;
  text-align: center;
  background-color: #fff;
  position: relative;
  zoom: 1;
}
.change-goods-num a {
  float: left;
  width: 38px;
  height: 38px;
  line-height: 38px;
  color: #757575;
  font-size: 20px;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}
.change-goods-num a:hover {
  background-color: #e0e0e0;
}
.change-goods-num input {
  float: left;
  width: 72px;
  height: 38px;
  line-height: 38px;
  padding: 0;
  border-width: 0;
  color: #424242;
  font-size: 16px;
  text-align: center;
}

.cart-goods-list .item-box .col-total,
.cart-goods-list .item-sub-box .col-total {
  color: #ff6700;
  font-size: 16px;
}

.cart-goods-list .col-total {
  width: 120px;
  padding-right: 81px;
  text-align: right;
}

.cart-goods-list .col-action {
  width: 80px;
  text-align: center;
}

.cart-goods-list .item-box .col-action .del,
.cart-goods-list .item-sub-box .col-action .del {
  display: inline-block;
  *zoom: 1;
  *display: inline;
  width: 24px;
  height: 24px;
  line-height: 24px;
  text-align: center;
  border-radius: 12px;
  color: #757575;
  font-size: 16px;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}

.cart-goods-list .item-box .col-action .del:hover,
.cart-goods-list .item-sub-box .col-action .del:hover {
  color: #fff;
  background-color: #e53935;
}

/* 第二部分 */
.raise-buy-box {
  margin: 20px 0;
}
/* 底部栏 */
.cart-bar {
  height: 50px;
  text-align: right;
  background-color: #fff;
  -webkit-transition: background 0.3s ease, top 0.3s ease;
  transition: background 0.3s ease, top 0.3s ease;
  position: relative;
}
.cart-bar i {
  font-style: normal;
}
.cart-bar .section-left {
  float: left;
}
.cart-bar .back-shopping {
  line-height: 50px;
  margin-left: 32px;
}
.cart-bar a {
  -webkit-transition: color 0.3s;
  transition: color 0.3s;
}
.cart-bar .cart-total {
  margin-left: 16px;
  padding-left: 16px;
  border-left: 1px solid #eee;
  color: #757575;
}
.cart-bar .cart-total i {
  color: #ff6700;
}
.cart-bar .cart-coudan {
  color: #757575;
}
.cart-bar .cart-coudan a {
  margin-left: 3px;
  color: #ff6700;
}
.cart-bar .activity-money {
  padding: 0 13px;
  border-right: 1px solid #eee;
  color: #757575;
}
.cart-bar .total-price {
  padding-left: 13px;
  color: #ff6700;
}
.cart-bar .total-price em {
  font-style: normal;
  font-size: 30px;
}
.cart-bar .btn {
  width: 200px;
  height: 48px;
  line-height: 48px;
  font-size: 18px;
  margin-left: 50px;
  vertical-align: top;
}
/* 提示框 */
.cart-bar .no-select-tip {
  width: 200px;
  height: 48px;
  line-height: 48px;
  position: absolute;
  top: -58px;
  right: 0;
  background-color: #fff;
  border: 1px solid #ff6700;
  color: #ff6700;
  text-align: center;
}
.cart-bar .no-select-tip .arrow {
  display: block;
  width: 0;
  height: 0;
  border-style: solid dashed dashed;
  overflow: hidden;
  _zoom: 1;
  position: absolute;
  left: 50%;
}
.cart-bar .no-select-tip .arrow-a {
  bottom: -8px;
  margin-left: -10px;
  border-width: 8px 10px 0;
  border-color: #ff6700 transparent transparent;
  z-index: 1;
}
.cart-bar .no-select-tip .arrow-b {
  bottom: -7px;
  margin-left: -8px;
  border-width: 7px 8px 0;
  border-color: #fff transparent transparent;
  z-index: 2;
}
</style>