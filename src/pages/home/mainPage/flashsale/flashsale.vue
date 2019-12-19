<template>
  <div>
    <div class="home-flashsale xm-plain-box">
      <div class="box-hd">
        <h2 class="title">小米闪购</h2>
      </div>
      <div class="box-bd clearfix">
        <div class="row">
          <countdown :time="time" :notTimes="notTimes" :Racetime="Racetime" /><!-- 秒杀计时器组件 -->
          <swiper :options="swiperOption" ref="mySwiper" class="span16 flashsale-list">
            <li
              class="swiper-slide"
              :class="`rainbow-item-${index+1}`"
              v-for="(item, index) in list"
              :key="index"
            >
              <router-link tag="a" to="/seckill">
                <div class="content">
                  <div class="thumb">
                    <img
                      :alt="item.goods_name"
                      width="160"
                      height="160"
                      :src="item.pc_img"
                    />
                  </div>
                  <h3 class="title">{{item.goods_name}}</h3>
                  <p class="desc">{{item.desc}}</p>
                  <p class="price">
                    <span>{{item.seckill_Price}}</span>元
                    <del>{{item.goods_price}}元</del>
                  </p>
                  <span class="flag" v-show="item.label_text">{{item.label_text}}</span>
                </div>
              </router-link>
            </li>
          </swiper>
          <div class="swiper-controls">
            <span class="swiper-flashsale-prev">
              <i class="iconfont icon-jiantou1"></i>
            </span>
            <span class="swiper-flashsale-next">
              <i class="iconfont icon-jiantou1-copy"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
    <bannerBox :src="bannerBox_img" />
  </div>
</template>

<script>
import countdown from "./countdown";
import bannerBox from "../../commonSection/banner-box";
export default {
  data() {
    return {
      // swiper
      swiperOption: {
        speed: 1000,
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 14,
        loop: false,
        allowTouchMove: false,
        loopFillGroupWithBlank: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false // 手动切换之后继续自动轮播
        },
        navigation: {
          nextEl: ".swiper-flashsale-next",
          prevEl: ".swiper-flashsale-prev",
          disabledClass: "my-button-disabled"
        }
      },
      list: [
        {
          goods_id: "2191600020",
          product_id: "9674",
          goods_name: "小米体重秤2 白色 通用",
          desc: "起重低至100G   一杯水都能测",
          seckill_type: "goods",
          goods_price: "59",
          seckill_Price: "29.5",
          discount_img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5d2bc8d96ed3e592ea49e20daed2763f.png",
          img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5d2bc8d96ed3e592ea49e20daed2763f.png",
          pc_img:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1555580244.96131118.jpg",
          label_text: "5折",
          is_test: "0",
          action: {
            log_code:
              "31activity_homeseckill#goodsid=2191600020\u0026start_time=1572919200\u0026end_time=1572932520"
          }
        },
        {
          goods_id: "2192900008",
          product_id: "10313",
          goods_name: "QISHI爱心足金吊坠 小款",
          desc: "一颗真心，只喜欢你",
          seckill_type: "goods",
          goods_price: "699",
          seckill_Price: "349.5",
          discount_img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/98633d2dfa663d16412bc3b833869f25.png",
          img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/98633d2dfa663d16412bc3b833869f25.png",
          pc_img:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1563502222.1771870.jpg",
          label_text: "5折",
          is_test: "0",
          action: {
            log_code:
              "31activity_homeseckill#goodsid=2192900008\u0026start_time=1572919200\u0026end_time=1572932520"
          }
        },
        {
          goods_id: "2191700019",
          product_id: "9710",
          goods_name: "MIJOY 6寸相框摆台 黑色",
          desc: "美观耐用 自由百搭",
          seckill_type: "goods",
          goods_price: "9.9",
          seckill_Price: "1",
          discount_img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d7d041f1fb0df51f7c314cc801655bd7.png",
          img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d7d041f1fb0df51f7c314cc801655bd7.png",
          pc_img:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1565334714.10885227.jpg",
          label_text: "1元",
          is_test: "0",
          action: {
            log_code:
              "31activity_homeseckill#goodsid=2191700019\u0026start_time=1572919200\u0026end_time=1572932520"
          }
        },
        {
          goods_id: "2183000006",
          product_id: "8645",
          goods_name: "小米路由器4C 白色",
          desc: "300M单频，高增益4天线",
          seckill_type: "seckill",
          goods_price: "99",
          seckill_Price: "59",
          discount_img:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5c43cc667982414502dd9733dce46748.jpg",
          img:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5c43cc667982414502dd9733dce46748.jpg",
          pc_img:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1532604005.80875371.jpg",
          label_text: "",
          is_test: "0",
          action: {
            log_code:
              "31activity_homeseckill#goodsid=2183000006\u0026start_time=1572919200\u0026end_time=1572932520"
          }
        },
        {
          goods_id: "2193000002",
          product_id: "10342",
          goods_name: "最生活毛巾·Air（10条装） 素蓝",
          desc: "给生活一条好毛巾",
          seckill_type: "seckill",
          goods_price: "169",
          seckill_Price: "99",
          discount_img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1bc4f6467dfe754f6ddacb3f605d8948.jpg",
          img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1bc4f6467dfe754f6ddacb3f605d8948.jpg",
          pc_img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9c4bdbabe1a232469eea43c1824990d3.jpg",
          label_text: "",
          is_test: "0",
          action: {
            log_code:
              "31activity_homeseckill#goodsid=2193000002\u0026start_time=1572919200\u0026end_time=1572932520"
          }
        },
        {
          goods_id: "2194100029",
          product_id: "10970",
          goods_name: "MIJOY 抽纸青春版 24包/箱 ",
          desc: "精选原生竹浆，健康环保",
          seckill_type: "seckill",
          goods_price: "32.9",
          seckill_Price: "27.9",
          discount_img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1da82158fa133859c4a0eb45dd202a17.png",
          img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1da82158fa133859c4a0eb45dd202a17.png",
          pc_img:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1571038766.41824452.jpg",
          label_text: "包邮",
          is_test: "0",
          action: {
            log_code:
              "31activity_homeseckill#goodsid=2194100029\u0026start_time=1572919200\u0026end_time=1572932520"
          }
        },
        {
          goods_id: "2192300055",
          product_id: "10015",
          goods_name: "小米小爱音箱 Play（白色）量产版 白色",
          desc: "听音乐、语音遥控家电",
          seckill_type: "seckill",
          goods_price: "169",
          seckill_Price: "99",
          discount_img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/75cfba1ec641388eabc3ae5464ff1d27.jpg",
          img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/75cfba1ec641388eabc3ae5464ff1d27.jpg",
          pc_img:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1560230039.28979252.jpg",
          label_text: "",
          is_test: "0",
          action: {
            log_code:
              "31activity_homeseckill#goodsid=2192300055\u0026start_time=1572919200\u0026end_time=1572932520"
          }
        },
        {
          goods_id: "2164000002",
          product_id: "4664",
          goods_name: "净化器滤芯 通用版",
          desc: "3层高效净化悬浮物",
          seckill_type: "goods",
          goods_price: "149",
          seckill_Price: "74.5",
          discount_img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/80ce3118fb719a16fc1dda004950b391.png",
          img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/80ce3118fb719a16fc1dda004950b391.png",
          pc_img:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-miapp-a1/0a872a83-a929-7e0d-1892-cf28b0d75077.jpg",
          label_text: "5折",
          is_test: "0",
          action: {
            log_code:
              "31activity_homeseckill#goodsid=2164000002\u0026start_time=1572919200\u0026end_time=1572932520"
          }
        },
        {
          goods_id: "1194400013",
          product_id: "11119",
          goods_name: "MIJOY 抽纸青春版 家庭装 2箱",
          desc: "MIJOY 抽纸青春版 家庭装 2箱",
          seckill_type: "seckill",
          goods_price: "65.8",
          seckill_Price: "52.9",
          discount_img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/401568f19dbb296b4a1a8ea9fa573cf0.png",
          img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/401568f19dbb296b4a1a8ea9fa573cf0.png",
          pc_img:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1572526521.79485101.jpg",
          label_text: "包邮",
          is_test: "0",
          action: {
            log_code:
              "31activity_homeseckill#goodsid=1194400013\u0026start_time=1572919200\u0026end_time=1572932520"
          }
        },
        {
          goods_id: "2192200039",
          product_id: "9938",
          goods_name: "3卷装抽绳式垃圾袋 银色",
          desc: "让清洁更简单",
          seckill_type: "goods",
          goods_price: "14.9",
          seckill_Price: "1",
          discount_img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9942522a37f6ccb066b7bb7bee395f5c.png",
          img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9942522a37f6ccb066b7bb7bee395f5c.png",
          pc_img:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1559702125.10299597.png",
          label_text: "1元",
          is_test: "0",
          action: {
            log_code:
              "31activity_homeseckill#goodsid=2192200039\u0026start_time=1572919200\u0026end_time=1572932520"
          }
        },
        {
          goods_id: "2192300005",
          product_id: "9959",
          goods_name: "Redmi全自动波轮洗衣机1S 8kg 灰色",
          desc: "小身材大容量，可预约",
          seckill_type: "seckill",
          goods_price: "899",
          seckill_Price: "699",
          discount_img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3c53a053357c0fb086a1eb7d43908b70.jpg",
          img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3c53a053357c0fb086a1eb7d43908b70.jpg",
          pc_img:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1560062441.20748673.jpg",
          label_text: "",
          is_test: "0",
          action: {
            log_code:
              "31activity_homeseckill#goodsid=2192300005\u0026start_time=1572919200\u0026end_time=1572932520"
          }
        },
        {
          goods_id: "2174400013",
          product_id: "7229",
          goods_name: "米家空气净化器 2S",
          desc: "好空气看得见",
          seckill_type: "goods",
          goods_price: "899",
          seckill_Price: "649",
          discount_img:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/db68b179e4287c321eb2c3685c615088.jpg",
          img:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/db68b179e4287c321eb2c3685c615088.jpg",
          pc_img:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-miapp-a1/d5a39c5e-28e7-f4c1-57fd-59933f26032b.jpg",
          label_text: "",
          is_test: "0",
          action: {
            log_code:
              "31activity_homeseckill#goodsid=2174400013\u0026start_time=1572919200\u0026end_time=1572932520"
          }
        },
        {
          goods_id: "2193600001",
          product_id: "8026",
          goods_name: "小米米家智能摄像机云台版 白",
          desc: "高清画质，守护家的每一面",
          seckill_type: "goods",
          goods_price: "199",
          seckill_Price: "159",
          discount_img:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e8121b43506f63797ef6221b4fc7f584.jpg",
          img:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e8121b43506f63797ef6221b4fc7f584.jpg",
          pc_img:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1567393585.49577260.jpg",
          label_text: "",
          is_test: "0",
          action: {
            log_code:
              "31activity_homeseckill#goodsid=2193600001\u0026start_time=1572919200\u0026end_time=1572932520"
          }
        },
        {
          goods_id: "2190800001",
          product_id: "9334",
          goods_name: "小米小爱触屏音箱 白色",
          desc: "好听，更好看",
          seckill_type: "seckill",
          goods_price: "299",
          seckill_Price: "199",
          discount_img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a3593f6ee74115531a529226b64702f9.jpg",
          img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a3593f6ee74115531a529226b64702f9.jpg",
          pc_img:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1550719656.70567332.jpg",
          label_text: "",
          is_test: "0",
          action: {
            log_code:
              "31activity_homeseckill#goodsid=2190800001\u0026start_time=1572919200\u0026end_time=1572932520"
          }
        },
        {
          goods_id: "2183400004",
          product_id: "8760",
          goods_name: "小米无线充电器（通用快充版） 黑色",
          desc: "铝合金外观，金属质感好",
          seckill_type: "goods",
          goods_price: "69",
          seckill_Price: "34.5",
          discount_img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a4f5296e235d63857889ae9005723458.png",
          img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a4f5296e235d63857889ae9005723458.png",
          pc_img:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1535440524.10478102.jpg",
          label_text: "5折",
          is_test: "0",
          action: {
            log_code:
              "31activity_homeseckill#goodsid=2183400004\u0026start_time=1572919200\u0026end_time=1572932520"
          }
        },
        {
          goods_id: "2193200008",
          product_id: "10477",
          goods_name: "米家无线除螨仪 白色",
          desc: "每个家庭都需要一台除螨仪",
          seckill_type: "goods",
          goods_price: "549",
          seckill_Price: "499",
          discount_img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e38e51819728173d71aaf38027b165d0.jpg",
          img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e38e51819728173d71aaf38027b165d0.jpg",
          pc_img:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1566614515.33746420.png",
          label_text: "",
          is_test: "0",
          action: {
            log_code:
              "31activity_homeseckill#goodsid=2193200008\u0026start_time=1572919200\u0026end_time=1572932520"
          }
        },
        {
          goods_id: "2183900024",
          product_id: "8883",
          goods_name: '小米笔记本电脑Air 13.3" A38310I0S/CN 银色',
          desc: "轻薄全金属机身 8G大内存",
          seckill_type: "seckill",
          goods_price: "3999",
          seckill_Price: "2699",
          discount_img:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg",
          img:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg",
          pc_img:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1539939825.15067587.jpg",
          label_text: "",
          is_test: "0",
          action: {
            log_code:
              "31activity_homeseckill#goodsid=2183900024\u0026start_time=1572919200\u0026end_time=1572932520"
          }
        },
        {
          goods_id: "2191100024",
          product_id: "9509",
          goods_name: "Redmi全自动波轮洗衣机 1A 8kg 白色",
          desc: "一键操作，父母都爱用",
          seckill_type: "seckill",
          goods_price: "799",
          seckill_Price: "699",
          discount_img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/793a818aee7cb7634522940323fb54f8.jpg",
          img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/793a818aee7cb7634522940323fb54f8.jpg",
          pc_img:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1552868299.27348967.jpg",
          label_text: "",
          is_test: "0",
          action: {
            log_code:
              "31activity_homeseckill#goodsid=2191100024\u0026start_time=1572919200\u0026end_time=1572932520"
          }
        },
        {
          goods_id: "2192300016",
          product_id: "9991",
          goods_name: "米兔冰格 薄荷绿",
          desc: "夏日凉饮好伴侣",
          seckill_type: "goods",
          goods_price: "19.9",
          seckill_Price: "9.95",
          discount_img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/84be3beab2c021c6d6d83d0085b0adcc.png",
          img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/84be3beab2c021c6d6d83d0085b0adcc.png",
          pc_img:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1560169782.26895892.jpg",
          label_text: "5折",
          is_test: "0",
          action: {
            log_code:
              "31activity_homeseckill#goodsid=2192300016\u0026start_time=1572919200\u0026end_time=1572932520"
          }
        },
        {
          goods_id: "2164300024",
          product_id: "4802",
          goods_name: "米家空气净化器Pro",
          desc: "大空间，快循环",
          seckill_type: "goods",
          goods_price: "1499",
          seckill_Price: "1099",
          discount_img:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f11b3f5b4a1df7e9bdfce788b6506ebb.jpg",
          img:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f11b3f5b4a1df7e9bdfce788b6506ebb.jpg",
          pc_img:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-miapp-a1/b315ba2c-3dc0-1352-3fbf-b23ffad1bb0f.jpg",
          label_text: "",
          is_test: "0",
          action: {
            log_code:
              "31activity_homeseckill#goodsid=2164300024\u0026start_time=1572919200\u0026end_time=1572932520"
          }
        },
        {
          goods_id: "2183400001",
          product_id: "8757",
          goods_name: '15.6"笔记本 i7 8G MX110 深空灰',
          desc: "全面均衡的国民轻薄本",
          seckill_type: "seckill",
          goods_price: "4999",
          seckill_Price: "3999",
          discount_img:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a055a04c6f61eae989f10e370d903b29.jpg",
          img:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a055a04c6f61eae989f10e370d903b29.jpg",
          pc_img:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1535357114.80045067.jpg",
          label_text: "",
          is_test: "0",
          action: {
            log_code:
              "31activity_homeseckill#goodsid=2183400001\u0026start_time=1572919200\u0026end_time=1572932520"
          }
        },
        {
          goods_id: "2193200006",
          product_id: "10475",
          goods_name: "米家扫拖机器人 黑色",
          desc: "扫得干净，拖得彻底",
          seckill_type: "goods",
          goods_price: "1999",
          seckill_Price: "1699",
          discount_img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/81ad0f47f7ba0c9a553c4c6344ad2960.jpg",
          img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/81ad0f47f7ba0c9a553c4c6344ad2960.jpg",
          pc_img:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1565665370.46592801.jpg",
          label_text: "",
          is_test: "0",
          action: {
            log_code:
              "31activity_homeseckill#goodsid=2193200006\u0026start_time=1572919200\u0026end_time=1572932520"
          }
        },
        {
          goods_id: "2165100001",
          product_id: "5059",
          goods_name: "小米活塞耳机 清新版 黑色",
          desc: "新鲜绽放，三色可选",
          seckill_type: "goods",
          goods_price: "29",
          seckill_Price: "14.5",
          discount_img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/85852ad545c4b3218d670573e05408b7.png",
          img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/85852ad545c4b3218d670573e05408b7.png",
          pc_img:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-miapp-a1/3c114987-43d5-f6d3-d2f4-8b86dd90a55d.jpg",
          label_text: "5折",
          is_test: "0",
          action: {
            log_code:
              "31activity_homeseckill#goodsid=2165100001\u0026start_time=1572919200\u0026end_time=1572932520"
          }
        },
        {
          goods_id: "1193300041",
          product_id: "10565",
          goods_name: "空调C1（大1匹/一级能效）",
          desc: "变频节能省电，自清洁",
          seckill_type: "seckill",
          goods_price: "2299",
          seckill_Price: "1899",
          discount_img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2db42506103ac3f34d286f94a7eded77.jpg",
          img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2db42506103ac3f34d286f94a7eded77.jpg",
          pc_img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f611ae04c145343ea266df4f54b41f9d.jpg",
          label_text: "",
          is_test: "0",
          action: {
            log_code:
              "31activity_homeseckill#goodsid=1193300041\u0026start_time=1572919200\u0026end_time=1572932520"
          }
        },
        {
          goods_id: "2191200014",
          product_id: "9526",
          goods_name: "米家手持无线吸尘器 白色",
          desc: "除尘除螨黑科技",
          seckill_type: "goods",
          goods_price: "1299",
          seckill_Price: "1099",
          discount_img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/fd15d2e98dac571b279314e4528d5f37.jpg",
          img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/fd15d2e98dac571b279314e4528d5f37.jpg",
          pc_img:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1553825094.62581252.png",
          label_text: "",
          is_test: "0",
          action: {
            log_code:
              "31activity_homeseckill#goodsid=2191200014\u0026start_time=1572919200\u0026end_time=1572932520"
          }
        },
        {
          goods_id: "2192900004",
          product_id: "10303",
          goods_name: "米家智能门锁 标准锁体 磨砂金",
          desc: "全新磨砂金配色，精湛工艺升级",
          seckill_type: "goods",
          goods_price: "1499",
          seckill_Price: "1099",
          discount_img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/20228f33450904674475086b5dc35f3c.jpg",
          img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/20228f33450904674475086b5dc35f3c.jpg",
          pc_img:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1563188402.30011093.jpg",
          label_text: "",
          is_test: "0",
          action: {
            log_code:
              "31activity_homeseckill#goodsid=2192900004\u0026start_time=1572919200\u0026end_time=1572932520"
          }
        },
        {
          goods_id: "2191600037",
          product_id: "9693",
          goods_name: "MIJOY 胶带座套装 白色",
          desc: "结实耐用 轻松便捷",
          seckill_type: "goods",
          goods_price: "19.9",
          seckill_Price: "9.95",
          discount_img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2cb37bb4945e7734f2be72902d03db04.png",
          img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2cb37bb4945e7734f2be72902d03db04.png",
          pc_img:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1555902841.82517552.jpg",
          label_text: "5折",
          is_test: "0",
          action: {
            log_code:
              "31activity_homeseckill#goodsid=2191600037\u0026start_time=1572919200\u0026end_time=1572932520"
          }
        },
        {
          goods_id: "2175200001",
          product_id: "7565",
          goods_name: '小米笔记本Air 12.5" 4G 128G 银色',
          desc: "轻薄长续航 超窄边框",
          seckill_type: "seckill",
          goods_price: "3599",
          seckill_Price: "1999",
          discount_img:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/19a01dfb52bd52d9a3654eab319b457e.jpg",
          img:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/19a01dfb52bd52d9a3654eab319b457e.jpg",
          pc_img:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1514387870.88251945.jpg",
          label_text: "",
          is_test: "0",
          action: {
            log_code:
              "31activity_homeseckill#goodsid=2175200001\u0026start_time=1572919200\u0026end_time=1572932520"
          }
        },
        {
          goods_id: "2185100019",
          product_id: "9161",
          goods_name: "米家互联网洗烘一体机10Kg 白色",
          desc: "智能烘干，高效净衣",
          seckill_type: "seckill",
          goods_price: "2299",
          seckill_Price: "1899",
          discount_img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0b4ba11f82f7c911035cec61f4fac511.jpg",
          img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0b4ba11f82f7c911035cec61f4fac511.jpg",
          pc_img:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1545975724.92496169.jpg",
          label_text: "",
          is_test: "0",
          action: {
            log_code:
              "31activity_homeseckill#goodsid=2185100019\u0026start_time=1572919200\u0026end_time=1572932520"
          }
        },
        {
          goods_id: "2175000293",
          product_id: "7522",
          goods_name: "米家空气净化器MAX",
          desc: "适用大面积，先进静音技术",
          seckill_type: "goods",
          goods_price: "2199",
          seckill_Price: "1799",
          discount_img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/34115bdad5efa98e425606512527dd7b.jpg",
          img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/34115bdad5efa98e425606512527dd7b.jpg",
          pc_img:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1514092107.15719247.jpg",
          label_text: "",
          is_test: "0",
          action: {
            log_code:
              "31activity_homeseckill#goodsid=2175000293\u0026start_time=1572919200\u0026end_time=1572932520"
          }
        },
        {
          goods_id: "2183400003",
          product_id: "8759",
          goods_name: '15.6"笔记本 i5 4G MX110 深空灰',
          desc: "全面均衡的国民轻薄本",
          seckill_type: "seckill",
          goods_price: "4199",
          seckill_Price: "2999",
          discount_img:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a055a04c6f61eae989f10e370d903b29.jpg",
          img:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a055a04c6f61eae989f10e370d903b29.jpg",
          pc_img:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1535357046.36178878.jpg",
          label_text: "",
          is_test: "0",
          action: {
            log_code:
              "31activity_homeseckill#goodsid=2183400003\u0026start_time=1572919200\u0026end_time=1572932520"
          }
        },
        {
          goods_id: "2192900005",
          product_id: "10304",
          goods_name: "小米米家智能门锁 磨砂金 霸王锁体 磨砂金",
          desc: "适配霸王锁体，多种开锁方式",
          seckill_type: "goods",
          goods_price: "1799",
          seckill_Price: "1399",
          discount_img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/20228f33450904674475086b5dc35f3c.jpg",
          img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/20228f33450904674475086b5dc35f3c.jpg",
          pc_img:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1565944082.21497591.jpg",
          label_text: "",
          is_test: "0",
          action: {
            log_code:
              "31activity_homeseckill#goodsid=2192900005\u0026start_time=1572919200\u0026end_time=1572932520"
          }
        },
        {
          goods_id: "2191100003",
          product_id: "9468",
          goods_name: "小米路由器4A千兆版",
          desc: "双核全千兆AC1200路由器",
          seckill_type: "seckill",
          goods_price: "169",
          seckill_Price: "149",
          discount_img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c97afe622ee275fe873abd9f80a31e6d.jpg",
          img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c97afe622ee275fe873abd9f80a31e6d.jpg",
          pc_img:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1552376822.09637089.jpg",
          label_text: "",
          is_test: "0",
          action: {
            log_code:
              "31activity_homeseckill#goodsid=2191100003\u0026start_time=1572919200\u0026end_time=1572932520"
          }
        },
        {
          goods_id: "2183800003",
          product_id: "8835",
          goods_name: "小米米家小白智能摄像机增强版 白色",
          desc: "智能看护， AI你所爱",
          seckill_type: "seckill",
          goods_price: "399",
          seckill_Price: "329",
          discount_img:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5d0f25ec3799ea934f800739e81ee789.jpg",
          img:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5d0f25ec3799ea934f800739e81ee789.jpg",
          pc_img:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1538031692.35815325.jpg",
          label_text: "",
          is_test: "0",
          action: {
            log_code:
              "31activity_homeseckill#goodsid=2183800003\u0026start_time=1572919200\u0026end_time=1572932520"
          }
        },
        {
          goods_id: "2184300026",
          product_id: "9017",
          goods_name: "米家新风机 白色",
          desc: "全效解决全屋空气问题",
          seckill_type: "seckill",
          goods_price: "2699",
          seckill_Price: "2399",
          discount_img:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/9a1f6e185c9ae49ca06dbbd2569e8266.jpg",
          img:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/9a1f6e185c9ae49ca06dbbd2569e8266.jpg",
          pc_img:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1541418170.92952541.jpg",
          label_text: "",
          is_test: "0",
          action: {
            log_code:
              "31activity_homeseckill#goodsid=2184300026\u0026start_time=1572919200\u0026end_time=1572932520"
          }
        },
        {
          goods_id: "2193000003",
          product_id: "10345",
          goods_name: "小米米家智能门锁 青春版 左开门",
          desc: "隐形指纹识别设计 简单一步快进家门",
          seckill_type: "goods",
          goods_price: "999",
          seckill_Price: "899",
          discount_img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cfeab777dec858ddf31bd4bd593f892f.jpg",
          img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cfeab777dec858ddf31bd4bd593f892f.jpg",
          pc_img:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1563953638.84752422.jpg",
          label_text: "",
          is_test: "0",
          action: {
            log_code:
              "31activity_homeseckill#goodsid=2193000003\u0026start_time=1572919200\u0026end_time=1572932520"
          }
        },
        {
          goods_id: "2184100007",
          product_id: "8915",
          goods_name: '15.6"笔记本 i5 8G MX110 白色',
          desc: "全面均衡的国民轻薄本",
          seckill_type: "seckill",
          goods_price: "4599",
          seckill_Price: "3499",
          discount_img:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/7d9aa23fbce666684146530e4e398e81.jpg",
          img:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/7d9aa23fbce666684146530e4e398e81.jpg",
          pc_img:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1539587302.00221286.jpg",
          label_text: "",
          is_test: "0",
          action: {
            log_code:
              "31activity_homeseckill#goodsid=2184100007\u0026start_time=1572919200\u0026end_time=1572932520"
          }
        },
        {
          goods_id: "1191300027",
          product_id: "9558",
          goods_name: "空调C1（1.5匹/一级能效）",
          desc: "变频节能省电，自清洁",
          seckill_type: "seckill",
          goods_price: "2799",
          seckill_Price: "2249",
          discount_img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ccfd18043892007a695bc321d4386f11.jpg",
          img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ccfd18043892007a695bc321d4386f11.jpg",
          pc_img:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1554108362.70322107.jpg",
          label_text: "",
          is_test: "0",
          action: {
            log_code:
              "31activity_homeseckill#goodsid=1191300027\u0026start_time=1572919200\u0026end_time=1572932520"
          }
        },
        {
          goods_id: "2173600001",
          product_id: "6781",
          goods_name: "小米笔记本Pro 15 i7 16G",
          desc: "高性能独显 第八代处理器",
          seckill_type: "seckill",
          goods_price: "6999",
          seckill_Price: "4999",
          discount_img:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/8df23b0886a4f4e484057959719ec2b7.jpg",
          img:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/8df23b0886a4f4e484057959719ec2b7.jpg",
          pc_img:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-miapp-a1/e46d4f23-bd83-b2a0-d8d5-00fa83b7399e.jpg",
          label_text: "",
          is_test: "0",
          action: {
            log_code:
              "31activity_homeseckill#goodsid=2173600001\u0026start_time=1572919200\u0026end_time=1572932520"
          }
        }
      ],
      time: "",
      notTimes: "",
      Racetime: "",
      bannerBox_img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2cd11a43e088037a150e959b41554bdb.jpg?thumb=1&w=1226&h=120&f=webp&q=90'
    };
  },
  components: {
    countdown,
    bannerBox
  },
  computed: {
    // swiper
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  created() {
    this.getNowTimes();
  },
  methods: {
    // 格式化时间
    format(time) {
      if (time >= 10) {
        return time;
      } else {
        return `0${time}`;
      }
    },
    // 获得当前时间
    getNowTimes() {
      const nowTime = new Date();
      const Hours = nowTime.getHours();
      const Minutes = nowTime.getMinutes();
      this.notTimes = this.format(Hours) + ":" + this.format(Minutes); // 得到当前的时间数 格式 10:48
      this.Racetime = this.format(Hours) + ":" + "00"; // 得到当前的秒杀场次数 格式 10:00
      // if (this.format(Hours) === 22) {
      //   this.time = this.format(0) + ":" + "00";
      // } else
      if (this.format(Hours) === 23) {
        this.time = this.format(0) + ":" + "00";
      }
      this.time = this.format(Hours + 1) + ":" + "00"; // 秒杀结束的时间数 格式 12:00 控制每场秒杀的时间为1小时
    }
  },
  mounted() {
    // swiper
    // console.log("this is current swiper instance object", this.swiper);
    this.swiper.slideTo(3, 1000, false);
  }
};
</script>

<style>
.home-flashsale {
  margin-bottom: 22px;
  position: relative;
}

.home-flashsale .box-hd .more {
  top: 24px;
}

.home-flashsale .loading {
  padding: 80px 0;
}

.home-flashsale .flashsale-list {
  float: left;
}

.home-flashsale .flashsale-list ul {
  margin: 0;
  padding: 0;
  height: 340px;
}

.home-flashsale .flashsale-list li {
  width: 234px;
  margin-right: 14px;
  border-top-width: 1px;
  border-top-style: solid;
  text-align: center;
  background: #fff;
  -webkit-transition: all 0.6s;
  transition: all 0.6s;
  position: relative;
  list-style: none;
}

.home-flashsale .flashsale-list li:hover {
  z-index: 2;
}

.home-flashsale .flashsale-list li a {
  display: block;
  height: 300px;
  padding-top: 39px;
  position: relative;
}

.home-flashsale .flashsale-list li a:after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  background: rgba(0, 0, 0, 0.02);
}

.home-flashsale .flashsale-list .thumb {
  display: block;
  width: 160px;
  margin: 0 auto 22px;
}

.home-flashsale .flashsale-list .thumb img {
  width: 160px;
  height: 160px;
}

.home-flashsale .flashsale-list .title {
  margin: 0 20px 3px;
  font-size: 14px;
  font-weight: 400;
  text-overflow: ellipsis;
  color: #212121;
  overflow: hidden;
  white-space: nowrap;
}

.home-flashsale .flashsale-list .desc {
  height: 18px;
  margin: 0 20px 12px;
  font-size: 12px;
  text-overflow: ellipsis;
  color: #b0b0b0;
  overflow: hidden;
  white-space: nowrap;
}

.home-flashsale .flashsale-list .price {
  margin: 0;
  color: #ff6709;
}

.home-flashsale .flashsale-list .price del {
  color: #b0b0b0;
}

.home-flashsale .flashsale-list .flag {
  position: absolute;
  top: 0;
  left: 50%;
  width: 64px;
  height: 20px;
  margin-left: -32px;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  color: #fff;
  background-color: #e53935;
  z-index: 2;
}

.home-flashsale .swiper-controls {
  position: absolute;
  right: 0;
  top: 24px;
}

.home-flashsale .rainbow-item-1 {
  border-top-color: #ffac13;
}

.home-flashsale .rainbow-item-2 {
  border-top-color: #83c44e;
}

.home-flashsale .rainbow-item-3 {
  border-top-color: #2196f3;
}

.home-flashsale .rainbow-item-4 {
  border-top-color: #e53935;
}

.home-flashsale .rainbow-item-5 {
  border-top-color: #00c0a5;
}

.home-flashsale .rainbow-item-6 {
  border-top-color: #ffac13;
}

.home-flashsale .rainbow-item-7 {
  border-top-color: #83c44e;
}

.home-flashsale .rainbow-item-8 {
  border-top-color: #2196f3;
}

.home-flashsale .rainbow-item-9 {
  border-top-color: #e53935;
}

.home-flashsale .rainbow-item-10 {
  border-top-color: #00c0a5;
}

.home-flashsale .rainbow-item-11 {
  border-top-color: #ffac13;
}

.home-flashsale .rainbow-item-12 {
  border-top-color: #83c44e;
}

.home-flashsale .rainbow-item-13 {
  border-top-color: #2196f3;
}

.home-flashsale .rainbow-item-14 {
  border-top-color: #e53935;
}

.home-flashsale .rainbow-item-15 {
  border-top-color: #00c0a5;
}

.home-flashsale .rainbow-item-16 {
  border-top-color: #ffac13;
}

.home-flashsale .rainbow-item-17 {
  border-top-color: #83c44e;
}

.home-flashsale .rainbow-item-18 {
  border-top-color: #2196f3;
}

.home-flashsale .rainbow-item-19 {
  border-top-color: #e53935;
}

.home-flashsale .rainbow-item-20 {
  border-top-color: #00c0a5;
}

.home-flashsale .rainbow-item-21 {
  border-top-color: #ffac13;
}

.home-flashsale .rainbow-item-22 {
  border-top-color: #83c44e;
}

.home-flashsale .rainbow-item-23 {
  border-top-color: #2196f3;
}

.home-flashsale .rainbow-item-24 {
  border-top-color: #e53935;
}

.home-flashsale .rainbow-item-25 {
  border-top-color: #00c0a5;
}

.home-flashsale .rainbow-item-26 {
  border-top-color: #ffac13;
}

.home-flashsale .rainbow-item-27 {
  border-top-color: #83c44e;
}

.home-flashsale .rainbow-item-28 {
  border-top-color: #2196f3;
}

.home-flashsale .rainbow-item-29 {
  border-top-color: #e53935;
}

.home-flashsale .rainbow-item-30 {
  border-top-color: #00c0a5;
}

.home-flashsale .rainbow-item-31 {
  border-top-color: #ffac13;
}

.home-flashsale .rainbow-item-32 {
  border-top-color: #83c44e;
}

.home-flashsale .rainbow-item-33 {
  border-top-color: #2196f3;
}

.home-flashsale .rainbow-item-34 {
  border-top-color: #e53935;
}

.home-flashsale .rainbow-item-35 {
  border-top-color: #00c0a5;
}

.home-flashsale .rainbow-item-36 {
  border-top-color: #ffac13;
}

.home-flashsale .rainbow-item-37 {
  border-top-color: #83c44e;
}

.home-flashsale .rainbow-item-38 {
  border-top-color: #2196f3;
}

.home-flashsale .rainbow-item-39 {
  border-top-color: #e53935;
}

.home-flashsale .rainbow-item-40 {
  border-top-color: #00c0a5;
}

.home-flashsale .rainbow-item-41 {
  border-top-color: #ffac13;
}

.home-flashsale .rainbow-item-42 {
  border-top-color: #83c44e;
}

.home-flashsale .rainbow-item-43 {
  border-top-color: #2196f3;
}

.home-flashsale .rainbow-item-44 {
  border-top-color: #e53935;
}

.home-flashsale .rainbow-item-45 {
  border-top-color: #00c0a5;
}

.home-flashsale .rainbow-item-46 {
  border-top-color: #ffac13;
}

.home-flashsale .rainbow-item-47 {
  border-top-color: #83c44e;
}

.home-flashsale .rainbow-item-48 {
  border-top-color: #2196f3;
}

.home-flashsale .rainbow-item-49 {
  border-top-color: #e53935;
}

.home-flashsale .rainbow-item-50 {
  border-top-color: #00c0a5;
}

.home-flashsale .rainbow-item-51 {
  border-top-color: #ffac13;
}

.home-flashsale .rainbow-item-52 {
  border-top-color: #83c44e;
}

.home-flashsale .rainbow-item-53 {
  border-top-color: #2196f3;
}

.home-flashsale .rainbow-item-54 {
  border-top-color: #e53935;
}

.home-flashsale .rainbow-item-55 {
  border-top-color: #00c0a5;
}

.home-flashsale .rainbow-item-56 {
  border-top-color: #ffac13;
}

.home-flashsale .rainbow-item-57 {
  border-top-color: #83c44e;
}

.home-flashsale .rainbow-item-58 {
  border-top-color: #2196f3;
}

.home-flashsale .rainbow-item-59 {
  border-top-color: #e53935;
}

.home-flashsale .rainbow-item-60 {
  border-top-color: #00c0a5;
}

.home-flashsale .rainbow-item-61 {
  border-top-color: #ffac13;
}

.home-flashsale .rainbow-item-62 {
  border-top-color: #83c44e;
}

.home-flashsale .rainbow-item-63 {
  border-top-color: #2196f3;
}

.home-flashsale .rainbow-item-64 {
  border-top-color: #e53935;
}

.home-flashsale .rainbow-item-65 {
  border-top-color: #00c0a5;
}

.home-flashsale .rainbow-item-66 {
  border-top-color: #ffac13;
}

.home-flashsale .rainbow-item-67 {
  border-top-color: #83c44e;
}

.home-flashsale .rainbow-item-68 {
  border-top-color: #2196f3;
}

.home-flashsale .rainbow-item-69 {
  border-top-color: #e53935;
}

.home-flashsale .rainbow-item-70 {
  border-top-color: #00c0a5;
}

.home-flashsale .rainbow-item-71 {
  border-top-color: #ffac13;
}

.home-flashsale .rainbow-item-72 {
  border-top-color: #83c44e;
}

.home-flashsale .rainbow-item-73 {
  border-top-color: #2196f3;
}

.home-flashsale .rainbow-item-74 {
  border-top-color: #e53935;
}

.home-flashsale .rainbow-item-75 {
  border-top-color: #00c0a5;
}

.home-flashsale .rainbow-item-76 {
  border-top-color: #ffac13;
}

.home-flashsale .rainbow-item-77 {
  border-top-color: #83c44e;
}

.home-flashsale .rainbow-item-78 {
  border-top-color: #2196f3;
}

.home-flashsale .rainbow-item-79 {
  border-top-color: #e53935;
}

.home-flashsale .rainbow-item-80 {
  border-top-color: #00c0a5;
}

.home-flashsale .rainbow-item-81 {
  border-top-color: #ffac13;
}

.home-flashsale .rainbow-item-82 {
  border-top-color: #83c44e;
}

.home-flashsale .rainbow-item-83 {
  border-top-color: #2196f3;
}

.home-flashsale .rainbow-item-84 {
  border-top-color: #e53935;
}

.home-flashsale .rainbow-item-85 {
  border-top-color: #00c0a5;
}

.home-flashsale .rainbow-item-86 {
  border-top-color: #ffac13;
}

.home-flashsale .rainbow-item-87 {
  border-top-color: #83c44e;
}

.home-flashsale .rainbow-item-88 {
  border-top-color: #2196f3;
}

.home-flashsale .rainbow-item-89 {
  border-top-color: #e53935;
}

.home-flashsale .rainbow-item-90 {
  border-top-color: #00c0a5;
}

.home-flashsale .rainbow-item-91 {
  border-top-color: #ffac13;
}

.home-flashsale .rainbow-item-92 {
  border-top-color: #83c44e;
}

.home-flashsale .rainbow-item-93 {
  border-top-color: #2196f3;
}

.home-flashsale .rainbow-item-94 {
  border-top-color: #e53935;
}

.home-flashsale .rainbow-item-95 {
  border-top-color: #00c0a5;
}

.home-flashsale .rainbow-item-96 {
  border-top-color: #ffac13;
}

.home-flashsale .rainbow-item-97 {
  border-top-color: #83c44e;
}

.home-flashsale .rainbow-item-98 {
  border-top-color: #2196f3;
}

.home-flashsale .rainbow-item-99 {
  border-top-color: #e53935;
}

.home-flashsale .rainbow-item-100 {
  border-top-color: #00c0a5;
}

.home-flashsale .rainbow-item-101 {
  border-top-color: #ffac13;
}

.home-flashsale .rainbow-item-102 {
  border-top-color: #83c44e;
}

.home-flashsale .rainbow-item-103 {
  border-top-color: #2196f3;
}

.home-flashsale .rainbow-item-104 {
  border-top-color: #e53935;
}

.home-flashsale .rainbow-item-105 {
  border-top-color: #00c0a5;
}

.home-flashsale .rainbow-item-106 {
  border-top-color: #ffac13;
}

.home-flashsale .rainbow-item-107 {
  border-top-color: #83c44e;
}

.home-flashsale .rainbow-item-108 {
  border-top-color: #2196f3;
}

.home-flashsale .rainbow-item-109 {
  border-top-color: #e53935;
}

.home-flashsale .rainbow-item-110 {
  border-top-color: #00c0a5;
}

.home-flashsale .rainbow-item-111 {
  border-top-color: #ffac13;
}

.home-flashsale .rainbow-item-112 {
  border-top-color: #83c44e;
}

.home-flashsale .rainbow-item-113 {
  border-top-color: #2196f3;
}

.home-flashsale .rainbow-item-114 {
  border-top-color: #e53935;
}

.home-flashsale .rainbow-item-115 {
  border-top-color: #00c0a5;
}

.home-flashsale .rainbow-item-116 {
  border-top-color: #ffac13;
}

.home-flashsale .rainbow-item-117 {
  border-top-color: #83c44e;
}

.home-flashsale .rainbow-item-118 {
  border-top-color: #2196f3;
}

.home-flashsale .rainbow-item-119 {
  border-top-color: #e53935;
}

.home-flashsale .rainbow-item-120 {
  border-top-color: #00c0a5;
}

.home-flashsale .rainbow-item-121 {
  border-top-color: #ffac13;
}

.home-flashsale .rainbow-item-122 {
  border-top-color: #83c44e;
}

.home-flashsale .rainbow-item-123 {
  border-top-color: #2196f3;
}

.home-flashsale .rainbow-item-124 {
  border-top-color: #e53935;
}

.home-flashsale .rainbow-item-125 {
  border-top-color: #00c0a5;
}

.home-flashsale .rainbow-item-126 {
  border-top-color: #ffac13;
}

.home-flashsale .rainbow-item-127 {
  border-top-color: #83c44e;
}

.home-flashsale .rainbow-item-128 {
  border-top-color: #2196f3;
}

.home-flashsale .rainbow-item-129 {
  border-top-color: #e53935;
}

.home-flashsale .rainbow-item-130 {
  border-top-color: #00c0a5;
}

.home-flashsale .rainbow-item-131 {
  border-top-color: #ffac13;
}

.home-flashsale .rainbow-item-132 {
  border-top-color: #83c44e;
}

.home-flashsale .rainbow-item-133 {
  border-top-color: #2196f3;
}

.home-flashsale .rainbow-item-134 {
  border-top-color: #e53935;
}

.home-flashsale .rainbow-item-135 {
  border-top-color: #00c0a5;
}

.home-flashsale .rainbow-item-136 {
  border-top-color: #ffac13;
}

.home-flashsale .rainbow-item-137 {
  border-top-color: #83c44e;
}

.home-flashsale .rainbow-item-138 {
  border-top-color: #2196f3;
}

.home-flashsale .rainbow-item-139 {
  border-top-color: #e53935;
}

.home-flashsale .rainbow-item-140 {
  border-top-color: #00c0a5;
}

.home-flashsale .rainbow-item-141 {
  border-top-color: #ffac13;
}

.home-flashsale .rainbow-item-142 {
  border-top-color: #83c44e;
}

.home-flashsale .rainbow-item-143 {
  border-top-color: #2196f3;
}

.home-flashsale .rainbow-item-144 {
  border-top-color: #e53935;
}

.home-flashsale .rainbow-item-145 {
  border-top-color: #00c0a5;
}

.home-flashsale .rainbow-item-146 {
  border-top-color: #ffac13;
}

.home-flashsale .rainbow-item-147 {
  border-top-color: #83c44e;
}

.home-flashsale .rainbow-item-148 {
  border-top-color: #2196f3;
}

.home-flashsale .rainbow-item-149 {
  border-top-color: #e53935;
}

.home-flashsale .rainbow-item-150 {
  border-top-color: #00c0a5;
}

.home-flashsale .rainbow-item-151 {
  border-top-color: #ffac13;
}

.home-flashsale .rainbow-item-152 {
  border-top-color: #83c44e;
}

.home-flashsale .rainbow-item-153 {
  border-top-color: #2196f3;
}

.home-flashsale .rainbow-item-154 {
  border-top-color: #e53935;
}

.home-flashsale .rainbow-item-155 {
  border-top-color: #00c0a5;
}

.home-flashsale .rainbow-item-156 {
  border-top-color: #ffac13;
}

.home-flashsale .rainbow-item-157 {
  border-top-color: #83c44e;
}

.home-flashsale .rainbow-item-158 {
  border-top-color: #2196f3;
}

.home-flashsale .rainbow-item-159 {
  border-top-color: #e53935;
}

.home-flashsale .rainbow-item-160 {
  border-top-color: #00c0a5;
}

.home-flashsale .rainbow-item-161 {
  border-top-color: #ffac13;
}

.home-flashsale .rainbow-item-162 {
  border-top-color: #83c44e;
}

.home-flashsale .rainbow-item-163 {
  border-top-color: #2196f3;
}

.home-flashsale .rainbow-item-164 {
  border-top-color: #e53935;
}

.home-flashsale .rainbow-item-165 {
  border-top-color: #00c0a5;
}

.home-flashsale .rainbow-item-166 {
  border-top-color: #ffac13;
}

.home-flashsale .rainbow-item-167 {
  border-top-color: #83c44e;
}

.home-flashsale .rainbow-item-168 {
  border-top-color: #2196f3;
}

.home-flashsale .rainbow-item-169 {
  border-top-color: #e53935;
}

.home-flashsale .rainbow-item-170 {
  border-top-color: #00c0a5;
}

.home-flashsale .rainbow-item-171 {
  border-top-color: #ffac13;
}

.home-flashsale .rainbow-item-172 {
  border-top-color: #83c44e;
}

.home-flashsale .rainbow-item-173 {
  border-top-color: #2196f3;
}

.home-flashsale .rainbow-item-174 {
  border-top-color: #e53935;
}

.home-flashsale .rainbow-item-175 {
  border-top-color: #00c0a5;
}

.home-flashsale .rainbow-item-176 {
  border-top-color: #ffac13;
}

.home-flashsale .rainbow-item-177 {
  border-top-color: #83c44e;
}

.home-flashsale .rainbow-item-178 {
  border-top-color: #2196f3;
}

.home-flashsale .rainbow-item-179 {
  border-top-color: #e53935;
}

.home-flashsale .rainbow-item-180 {
  border-top-color: #00c0a5;
}

.home-flashsale .rainbow-item-181 {
  border-top-color: #ffac13;
}

.home-flashsale .rainbow-item-182 {
  border-top-color: #83c44e;
}

.home-flashsale .rainbow-item-183 {
  border-top-color: #2196f3;
}

.home-flashsale .rainbow-item-184 {
  border-top-color: #e53935;
}

.home-flashsale .rainbow-item-185 {
  border-top-color: #00c0a5;
}

.home-flashsale .rainbow-item-186 {
  border-top-color: #ffac13;
}

.home-flashsale .rainbow-item-187 {
  border-top-color: #83c44e;
}

.home-flashsale .rainbow-item-188 {
  border-top-color: #2196f3;
}

.home-flashsale .rainbow-item-189 {
  border-top-color: #e53935;
}

.home-flashsale .rainbow-item-190 {
  border-top-color: #00c0a5;
}

.home-flashsale .rainbow-item-191 {
  border-top-color: #ffac13;
}

.home-flashsale .rainbow-item-192 {
  border-top-color: #83c44e;
}

.home-flashsale .rainbow-item-193 {
  border-top-color: #2196f3;
}

.home-flashsale .rainbow-item-194 {
  border-top-color: #e53935;
}

.home-flashsale .rainbow-item-195 {
  border-top-color: #00c0a5;
}

.home-flashsale .rainbow-item-196 {
  border-top-color: #ffac13;
}

.home-flashsale .rainbow-item-197 {
  border-top-color: #83c44e;
}

.home-flashsale .rainbow-item-198 {
  border-top-color: #2196f3;
}

.home-flashsale .rainbow-item-199 {
  border-top-color: #e53935;
}

.home-flashsale .rainbow-item-200 {
  border-top-color: #00c0a5;
}
.home-flashsale .swiper-flashsale-next,
.home-flashsale .swiper-flashsale-prev {
  display: inline-block;
  width: 24px;
  height: 16px;
  padding: 3px 5px;
  margin-left: -1px;
  border: 1px solid #e0e0e0;
  font-size: 16px;
  line-height: 16px;
  -webkit-transition: color 0.5s;
  transition: color 0.5s;
  color: #b0b0b0;
  text-align: center;
  cursor: pointer;
}

.home-flashsale .swiper-flashsale-next:focus,
.home-flashsale .swiper-flashsale-prev:focus {
  outline: none;
}

.home-flashsale .swiper-flashsale-next:hover,
.home-flashsale .swiper-flashsale-prev:hover {
  color: #ff6700;
}

.home-flashsale .swiper-flashsale-next.my-button-disabled,
.home-flashsale .swiper-flashsale-prev.my-button-disabled {
  color: #e0e0e0;
  cursor: default;
}
</style>