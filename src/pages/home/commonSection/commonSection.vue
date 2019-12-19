<template>
  <div>
    <div class="home-brick-box home-brick-row-2-box xm-plain-box">
      <boxHeader :boxHdData="allData.brickList" @toIndex="BriListIndex" />
      <div class="box-bd clearfix">
        <div class="row">
          <brickPromoList :promoList="allData.img.brick_promo_list_img" />
          <brickList :brickList="allData.brickList.type.list" :Index="brickList_index" />
        </div>
      </div>
    </div>
    <bannerBox :src="allData.img.bannerBox_img" />
  </div>
</template>

<script>
import bannerBox from "./banner-box";
import boxHeader from "./box-hd";
import brickPromoList from "./brick-promo-list";
import brickList from "./brick-list";
export default {
  name: "commonSection",
  data() {
    return {
      brickList_index: 0
    };
  },
  props: {
    allData: {
      type: Object,
      default: null
    }
  },
  methods: {
    BriListIndex(index) {
      this.brickList_index = index;
    }
  },
  components: {
    bannerBox,
    boxHeader,
    brickPromoList,
    brickList
  }
};
</script>

<style>
.home-brick-box {
  margin-bottom: 8px;
}
/* brick-list和brick-promo-list两个组件的公共样式 */
.brick-list,.brick-promo-list {
  height: 614px;
  margin: 0;
  padding: 0;
  list-style-type: none
}
.home-brick-box .brick-list,.home-brick-box .brick-promo-list {
  margin: 0 0 -14px -14px
}
.brick-item {
  position: relative;
  z-index: 1;
  float: left;
  width: 234px;
  margin-left: 14px;
  margin-bottom: 14px;
  background: #fff;
  transition: all .2s linear
}
.brick-item:hover {
  z-index: 2;
  box-shadow: 0 15px 30px rgba(0,0,0,.1);
  transform: translate3d(0,-2px,0)
}
.brick-item-l {
  height: 614px
}
.brick-item-m {
  height: 246px;
  padding: 34px 0 20px
}
</style>