<template>
  <div class="span4">
    <ul class="brick-promo-list clearfix">
      <li class="brick-item" :class="promoList.length === 1? 'brick-item-l' : 'brick-item-m'" v-for="(item, index) in promoList" :key="index">
        <a :href="item.href" target="_blank" >
          <img :data-src="item.img" v-lazy="item.img" alt />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "brick-promo-list",
  props: {
    promoList: {
      type: Array,
      default: null
    }
  },
  data () {
    return {
    }
  }
};
</script>

<style scoped>
.brick-promo-list a {
  display: block;
  width: 100%;
  height: 100%
}

.brick-promo-list img {
  width: 234px
}

.brick-promo-list .brick-item-l img {
  height: 614px
}

.brick-promo-list .brick-item-m {
  height: 300px;
  padding: 0
}

.brick-promo-list .brick-item-m img {
  height: 300px
}

.brick-promo-list .brick-item-s img {
  height: 143px
}

</style>