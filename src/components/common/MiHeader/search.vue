<template>
  <!-- 搜索框部分 -->
  <div class="header-search">
    <form
      action="//search.mi.com/search"
      method="get"
      class="search-form clearfix"
      :class="{'search-form-focus': inputShow}"
    >
      <label for="search" class="hide">站内搜索</label>
      <input
        type="search"
        id="search"
        name="keyword"
        autocomplete="off"
        class="search-text"
        @focus="onFocus()"
        @blur="onBlur()"
      />
      <input type="submit" class="iconfont search-btn" value="" />
      <div class="search-hot-words" :class="!inputShow ? 'fade-in' : 'fade-out'">
        <a href="https://www.mi.com/mi9pro/">小米9 Pro 5G</a>
        <a href="https://www.mi.com/redminote8">Redmi Note 8</a>
      </div>
      <div class="keyword-list" :class="{'hide': !inputShow}">
        <ul class="result-list">
          <li data-key="小米 9">
            <a href="https://search.mi.com/search_%E5%B0%8F%E7%B1%B3%209">
              <span class="keyword"></span> 小米 9
            </a>
          </li>
          <li data-key="Redmi K20 pro">
            <a href="https://search.mi.com/search_Redmi%20K20%20pro">
              <span class="keyword"></span> Redmi K20 pro
            </a>
          </li>
          <li data-key="Redmi K20">
            <a href="https://search.mi.com/search_Redmi%20K20">
              <span class="keyword"></span> Redmi K20
            </a>
          </li>
          <li data-key="Redmi Note 7 Pro">
            <a href="https://search.mi.com/search_Redmi%20Note%207%20Pro">
              <span class="keyword"></span> Redmi Note 7 Pro
            </a>
          </li>
          <li data-key="Redmi&nbsp;note&nbsp;7">
            <a href="https://search.mi.com/search_Redmi%26nbsp%3Bnote%26nbsp%3B7">
              <span class="keyword"></span> Redmi&nbsp;note&nbsp;7
            </a>
          </li>
          <li data-key="小米电视4c">
            <a href="https://search.mi.com/search_%E5%B0%8F%E7%B1%B3%E7%94%B5%E8%A7%864c">
              <span class="keyword"></span> 小米电视4c
            </a>
          </li>
          <li data-key="电视32英寸">
            <a href="https://search.mi.com/search_%E7%94%B5%E8%A7%8632%E8%8B%B1%E5%AF%B8">
              <span class="keyword"></span> 电视32英寸
            </a>
          </li>
          <li data-key="笔记本pro">
            <a href="https://search.mi.com/search_%E7%AC%94%E8%AE%B0%E6%9C%ACpro">
              <span class="keyword"></span> 笔记本pro
            </a>
          </li>
          <li data-key="小爱音箱">
            <a href="https://search.mi.com/search_%E5%B0%8F%E7%88%B1%E9%9F%B3%E7%AE%B1">
              <span class="keyword"></span> 小爱音箱
            </a>
          </li>
          <li data-key="净水器">
            <a href="https://search.mi.com/search_%E5%87%80%E6%B0%B4%E5%99%A8">
              <span class="keyword"></span> 净水器
            </a>
          </li>
        </ul>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "search",
  data() {
    return {
      inputShow: false
    }
  },
  methods: {
    onFocus() {
      this.inputShow = true;
    },
    onBlur() {
      this.inputShow = false;
    },
  }
};
</script>

<style>
.site-header .header-search {
  float: right;
  width: 296px;
  margin-top: 25px
}
.site-header .search-form {
  position: relative;
  width: 296px;
  height: 50px;
  z-index: 20
}

.site-header .search-form .keyword-list {
  position: absolute;
  left: 0;
  top: 50px;
  _top: 51px;
  z-index: 20;
  width: 243px;
  border: 1px solid #ff6700;
  border-top: 0;
  background: #fff
}

.site-header .search-form .keyword-list ul {
  margin: 0;
  padding: 0;
  list-style-type: none
}

.site-header .search-form .keyword-list li.active,.site-header .search-form .keyword-list li:hover {
  background: #fafafa
}

.site-header .search-form .keyword-list li a {
  position: relative;
  display: block;
  padding: 6px 15px;
  font-size: 12px;
  color: #424242
}

.site-header .search-form .keyword-list li .keyword {
  color: #ff6700
}

.site-header .search-form .keyword-list li .result {
  position: absolute;
  right: 15px;
  top: 6px;
  color: #b0b0b0
}

.site-header .search-form:hover .search-btn,.site-header .search-form:hover .search-text {
  border-color: #b0b0b0
}

.site-header .search-form-focus .search-btn,.site-header .search-form-focus .search-text,.site-header .search-form-focus:hover .search-btn,.site-header .search-form-focus:hover .search-text,.site-header .search-form:hover .search-btn:hover {
  border-color: #ff6700
}

.site-header .search-form-focus .search-btn:hover {
  background-color: #ff6700;
  color: #fff
}

.site-header .search-text {
  right: 51px;
  z-index: 1;
  width: 223px;
  height: 48px;
  padding: 0 10px;
  font-size: 14px;
  line-height: 48px
}

.site-header .search-btn,.site-header .search-text {
  position: absolute;
  top: 0;
  border: 1px solid #e0e0e0;
  outline: 0;
  -webkit-transition: all .2s;
  transition: all .2s
}

.site-header .search-btn {
  right: 0;
  z-index: 2;
  width: 52px;
  height: 50px;
  font-size: 24px;
  line-height: 24px;
  background: #fff;
  color: #616161
}

.site-header .search-btn:hover {
  background: #ff6700;
  color: #fff
}

.site-header .search-hot-words {
  position: absolute;
  top: 14px;
  right: 62px;
  z-index: 2;
  text-align: right;
  -webkit-transition: opacity .2s;
  transition: opacity .2s
}

.site-header .search-hot-words a {
  display: inline-block;
  margin-left: 5px;
  padding: 0 5px;
  font-size: 12px;
  background: #eee;
  color: #757575;
  -webkit-transition: all .2s;
  transition: all .2s
}

.site-header .search-hot-words a:hover {
  background: #ff6700;
  color: #fff
}

.site-header .search-hot-words.fade-out {
  opacity: 0
}

.site-header .search-hot-words.fade-in {
  opacity: 1
}
</style>