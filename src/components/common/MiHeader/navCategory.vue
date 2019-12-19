<template>
  <li class="nav-category">
    <a href="//list.mi.com" class="link-category" :class="{hideText: change}" ref="category">
      <span class="text">全部商品分类</span>
    </a>
    <div class="site-category" v-show="show">
      <ul
        class="site-category-list clearfix site-category-list-custom"
        :class="{otherStyle: changeUlStyle}"
        ref="siteList"
      >
        <li
          class="category-item"
          @mouseenter="changeActive($event)"
          @mouseleave="removeActive($event)"
          v-for="(item, index) in list"
          :key="index"
        >
          <a :href="item.data.url" class="title">
            {{item.data.title}}
            <em class="iconfont icon-jiantou"></em>
          </a>
          <div class="children clearfix" :class="`children-col-${item.right.length}`">
            <ul
              class="children-list children-list-col children-list-col-1"
              v-for="(inItem, inIndex) in item.right"
              :key="inIndex"
            >
              <li v-for="(threeItem, threeIndex) in inItem" :key="threeIndex">
                <a :href="threeItem.url" class="link clearfix">
                  <img :src="threeItem.img" width="40" height="40" alt class="thumb" />
                  <span class="text">{{threeItem.title}}</span>
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </li>
</template>

<script>
export default {
  name: "navCategory",
  data() {
    return {
      list: [],
      change: false,
      show: false,
      changeUlStyle: false
    };
  },
  created() {
    this.$http("/navCategory").then(res => {
      // console.log(res)
      this.list = res.data.list;
    });
  },
  mounted() {
    this.changeStyle();
  },
  methods: {
    changeStyle() {
      if (this.$route.path === "/") { // 如果是根路径 就一直展示
        this.change = true;
        this.show = true;
      } else {
        let that = this;
        this.changeUlStyle = true;
        this.$refs.category.addEventListener("mouseenter", () => {
          that.show = true;
        });
        this.$refs.siteList.addEventListener("mouseenter", () => {
          that.show = true;
        });
        this.$refs.category.addEventListener("mouseleave", () => {
          that.show = false;
        });
        this.$refs.siteList.addEventListener("mouseleave", () => {
          that.show = false;
        });
      }
    },
    changeActive($event) {
      $event.currentTarget.className = "category-item category-item-active";
    },
    removeActive($event) {
      $event.currentTarget.className = "category-item";
    }
  }
};
</script>

<style>
.site-header .nav-category {
  position: relative;
  float: left;
  width: 127px;
  padding-right: 15px;
}
.site-header .nav-category .link-category.hideText {
  visibility: hidden;
}
.site-header .nav-category .link-category {
  display: block;
  padding: 26px 0 38px;
  text-align: right;
  color: #333;
}
/* 下一部分 */
.site-category {
  position: absolute;
  top: 88px;
  left: -92px;
  z-index: 21;
  width: 234px;
  height: 460px;
  font-size: 14px;
}

.site-category-list.site-category-list-custom {
  height: 420px;
  border: 0;
  color: #fff;
  background: rgba(105, 101, 101, 0.6);
  padding: 20px 0;
  list-style-type: none;
}

.site-category-list.site-category-list-custom.otherStyle {
  height: 418px;
  margin: 0;
  padding: 20px 0;
  list-style-type: none;
  border: 1px solid #ff6700;
  color: #424242;
  background: #fff;
}

.site-category-list.site-category-list-custom .title i {
  color: hsla(0, 0%, 100%, 0.5);
}

.site-category-list .category-item-active .title em[class*="iconfont"] {
  color: #fff;
  color: hsla(0, 0%, 100%, 0.5);
}

.site-category-list .category-item-active .children {
  display: block;
}

.site-category-list .title {
  position: relative;
  display: block;
  padding-left: 30px;
  height: 42px;
  line-height: 42px;
  color: #fff;
}
.site-category-list.otherStyle .title {
  color: #424242;
}
.site-category-list .category-item-active .title {
  background: #ff6700;
  color: #fff;
}

.site-category-list .title em[class*="iconfont"] {
  position: absolute;
  top: 12px;
  right: 20px;
  font-size: 16px;
  line-height: 16px;
  color: #e0e0e0;
}

.site-category-list .children-list {
  height: 458px;
  margin: 0;
  padding: 2px 0;
  list-style-type: none;
}

.site-category-list .children-list li {
  position: relative;
  float: left;
  width: 265px;
  height: 76px;
}

.site-category-list .children-list li.star-goods .link {
  width: 170px;
  padding-right: 0;
}

.site-category-list .children-list .link {
  display: block;
  padding: 18px 20px;
  line-height: 40px;
  color: #333;
  -webkit-transition: color 0.2s;
  transition: color 0.2s;
}

.site-category-list .children-list .link:hover {
  color: #ff6700;
}

.site-category-list .children-list .thumb {
  float: left;
  margin-right: 12px;
  vertical-align: middle;
}

.site-category-list .children-list .text {
  float: left;
  width: 172px;
  line-height: 40px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.site-category-list .children-list .btn-buy {
  position: absolute;
  right: 10px;
  top: 26px;
  width: 58px;
  height: 22px;
  line-height: 22px;
}

.site-category-list .children-list-col {
  float: left;
  width: 265px;
}

.site-category-list .children {
  display: none;
  position: absolute;
  left: 234px;
  top: 0;
  z-index: 24;
  height: 458px;
  border: 1px solid #e0e0e0;
  border-left: 0;
  background: #fff;
  -webkit-box-shadow: 0 8px 16px rgba(0, 0, 0, 0.18);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.18);
}

.site-category-list .children-col-1 {
  width: 265px;
}

.site-category-list .children-col-2 {
  width: 530px;
}

.site-category-list .children-col-3 {
  width: 795px;
}

.site-category-list .children-col-4 {
  width: 992px;
}

.site-category-list .children-col-4 .children-list-col {
  width: 248px;
}
</style>