<template>
  <div class="cart-recommend container">
    <h2 class="xm-recommend-title">
      <span>为您推荐</span>
    </h2>
    <div class="xm-recommend">
      <ul class="row clearfix">
        <li class="span4" v-for="(item, index) in recommendList" :key="index">
          <dl>
            <dt>
              <a href="//item.mi.com/1194400040.html">
                <img v-lazy="item.image" :alt="item.name" />
              </a>
            </dt>
            <dd class="xm-recommend-name">
              <a href="//item.mi.com/1194400040.html">{{item.name}}</a>
            </dd>
            <dd class="xm-recommend-price">{{item.price}}元</dd>
            <dd class="xm-recommend-tips">
              <span v-if="item.comments !== '0'">{{item.comments}}人好评</span>
              <a
                class="btn btn-small btn-line-primary"
                href="javascript: void(0);"
                @click="addProduct(item)"
              >加入购物车</a>
            </dd>
          </dl>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "cartRecommend",
  data() {
    return {
      recommendList: []
    };
  },
  beforeCreate() {
    // console.log('请求了吗')
    this.$store.dispatch("products/getAllProducts"); // 把页面的数据传递给vuex中
  },
  created() {
    this.$http("/cart").then(res => {
      // console.log(res)
      this.recommendList = res.data.list.list;
    });
  },
  computed: mapGetters("user", ["loginStatus"]),
  methods: {
    ...mapActions("cart", ["addProductToCart"]),
    addProduct(item) {
      if (!this.loginStatus) {
        this.$message({
          message: "请先登录购物车才能添加购物车！",
          type: "warning",
          center: true
        });
      } else {
        this.addProductToCart(item);
        this.$message({
          message: "恭喜你，添加购物车成功！",
          type: "success",
          center: true
        });
      }
    }
  }
};
</script>

<style scoped>
.cart-recommend {
  margin: 60px 0 0;
}
.xm-recommend-title {
  position: relative;
  margin: 0;
  height: 50px;
  font-size: 30px;
  font-weight: 400;
  color: #757575;
  border-top: 1px solid #e0e0e0;
  -webkit-font-smoothing: antialiased;
}
.xm-recommend-title span {
  position: absolute;
  top: -20px;
  left: 372px;
  height: 40px;
  width: 482px;
  line-height: 40px;
  text-align: center;
  display: block;
  background-color: #f5f5f5;
}
.xm-recommend ul,
.xm-recommend li,
.xm-recommend dl,
.xm-recommend dt,
.xm-recommend dd {
  padding: 0;
  margin-top: 0;
  list-style: none;
}
.xm-recommend ul li {
  margin-bottom: 14px;
  height: 300px;
  background-color: #fff;
  text-align: center;
  position: relative;
}
.xm-recommend ul li:hover .xm-recommend-tips .btn {
  display: block;
}
.xm-recommend ul,
.xm-recommend li,
.xm-recommend dl,
.xm-recommend dt,
.xm-recommend dd {
  padding: 0;
  margin-top: 0;
  list-style: none;
}
.xm-recommend dl {
  padding: 0 20px;
  margin-bottom: 0;
}
.xm-recommend dl dt {
  padding: 40px 0 15px;
  height: 145px;
}

.xm-recommend dl dt img {
  width: 140px;
  height: 140px;
}

.xm-recommend dl dd {
  margin-left: 0;
}

.xm-recommend .xm-recommend-name {
  margin-bottom: 10px;
  height: 18px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  _zoom: 1;
}

.xm-recommend .xm-recommend-name a {
  color: #333;
}

.xm-recommend .xm-recommend-price {
  margin-bottom: 10px;
  color: #ff6700;
}

.xm-recommend .xm-recommend-tips {
  text-align: center;
  position: relative;
  color: #757575;
}

.xm-recommend .xm-recommend-tips .btn {
  position: absolute;
  left: 37px;
  top: 0;
  width: 120px;
  display: none;
}
</style>