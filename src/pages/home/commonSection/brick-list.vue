<template>
  <div class="span16">
    <ul class="brick-list clearfix" v-for="(fItem, fIndex) in brickList" :key="fIndex" :class="fIndex !== Index ? 'hide' : '' ">
      <li
        class="brick-item brick-item-m brick-item-m-2"
        v-for="(item, index) in fItem.item_2"
        :key="index"
      >
        <router-link tag="a" to="/phone">
          <div class="figure figure-img">
            <img
              width="160"
              height="160"
              alt="Redmi 7A"
              v-lazy="item.img"
            />
          </div>
          <h3 class="title">{{item.title}}</h3>
          <p class="desc">{{item.desc}}</p>
          <p class="price">
            <span class="num">{{item.presentPrice}}</span>元
            <del v-if="item.originPrice">
              <span class="num">{{item.originPrice}}</span>元
            </del>
          </p>
        </router-link>
      </li>
      <li class="brick-item brick-item-s" v-if="fItem.item_s">
        <a href="javascript:;">
          <div class="figure figure-img">
            <img
              width="80"
              height="80"
              :alt="fItem.item_s.title"
              v-lazy="fItem.item_s.img"
            />
          </div>
          <h3 class="title">{{fItem.item_s.title}}</h3>
          <p class="price">
            <span class="num">{{fItem.item_s.presentPrice}}</span>元
            <!---->
          </p>
        </a>
      </li>
      <li class="brick-item brick-item-s" v-if="fItem.item_s">
        <a href="javascript:;">
          <div class="figure figure-more">
            <i class="iconfont icon-youjiantou1-copy"></i>
          </div>
          <div class="more">
            浏览更多
            <small>热门</small>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "brick-list",
  props: {
    brickList: {
      type: Array,
      default: null
    },
    Index: { // 根据头部传来的index值 动态显示哪一部分list
      type: Number,
      default: 0
    }
  },
  data() {
    return {
    };
  }
};
</script>

<style scoped>
.brick-list {
  width: 992px
}

.brick-item-m .figure-img {
  width: 150px;
  height: 150px;
  margin: 0 auto 18px
}

.brick-item-m .figure-img a {
  display: block
}

.brick-item-m .figure-img img {
  width: 150px;
  height: 150px
}

.brick-item-m .desc,.brick-item-m .title {
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden
}

.brick-item-m .title {
  margin: 0 10px;
  font-size: 14px;
  font-weight: 400;
  color: #333
}

.brick-item-m .desc {
  margin: 0 10px 10px;
  height: 18px;
  font-size: 12px;
  color: #b0b0b0
}

.brick-item-m .price {
  margin: 0 10px 10px;
  text-align: center;
  color: #ff6700
}

.brick-item-m .price del {
  margin-left: .5em;
  color: #b0b0b0
}

.brick-item-m-2 {
  height: 260px;
  padding: 20px 0
}

.brick-item-m-2 .figure-img,.brick-item-m-2 .figure-img img {
  width: 160px;
  height: 160px
}

.brick-item-m-2 .title {
  margin: 0 10px 2px
}

.brick-item-m-2 .price {
  margin: 0 10px 14px
}

.brick-item-s {
  height: 93px;
  padding-top: 50px
}

.brick-item-s .figure-img {
  position: absolute;
  right: 20px;
  top: 32px;
  width: 80px;
  height: 80px
}

.brick-item-s .figure-img a {
  display: block
}

.brick-item-s .figure-img img {
  width: 80px;
  height: 80px
}

.brick-item-s .figure-more {
  position: absolute;
  right: 35px;
  top: 48px;
  width: 48px;
  height: 48px;
  color: #ff6700
}

.brick-item-s .title,.brick-item-s .title a {
  color: #333
}

.brick-item-s .title {
  margin: -10px 110px 5px 30px;
  font-size: 14px;
  font-weight: 400
}

.brick-item-s .title a {
  display: block;
  text-overflow: ellipsis
}

.brick-item-s .price {
  margin: 0 110px 0 30px;
  font-size: 12px;
  color: #ff6700
}

.brick-item-s .price .num {
  font-size: 14px
}

.brick-item-s .more {
  display: block;
  margin: 0 110px 0 30px;
  font-size: 18px;
  color: #333
}

.brick-item-s .more small {
  display: block;
  font-size: 12px;
  color: #757575
}

.brick-item-s i {
  font-size: 48px;
  line-height: 48px
}
</style>