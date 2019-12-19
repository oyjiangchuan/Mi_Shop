<template>
  <div>
    <div class="site-footer">
      <div class="container">
        <div class="footer-service">
          <ul class="list-service clearfix">
            <li v-for="(item, index) in footerService" :key="index">
              <a :href="item.href" target="_blank">
                <em class="iconfont" :class="item.class"></em>
                {{item.text}}
              </a>
            </li>
          </ul>
        </div>
        <div class="footer-links clearfix">
          <dl class="col-links" v-for="(item, index) in footerLinks" :key="index">
            <dt>{{item.grounpContent}}</dt>
            <dd v-for="(initem, index) in item.list" :key="index">
              <a rel="nofollow" :href="initem.href" target="_blank">{{initem.content}}</a>
            </dd>
          </dl>
          <div class="col-contact">
            <p class="phone">400-100-5678</p>
            <p>
              周一至周日 8:00-18:00
              <br />（仅收市话费）
            </p>
            <a
              rel="nofollow"
              href="//support.kefu.mi.com/"
              target="_blank"
              class="btn btn-line-primary btn-small"
            >
              <em class="iconfont icon-message"></em> 人工客服
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="site-info">
      <div class="container">
        <div class="logo ir">小米官网</div>
        <div class="info-text">
          <p class="sites">
            <span v-for="(item, index) in footerList" :key="index">
              <a href="javascript:;">{{item.content}}</a>
              <span class="sep">{{item.sep}}</span>
            </span>
          </p>
          <p>
            ©
            <a href="javascript:;" title="mi.com" >mi.com</a> 京ICP证110507号
            <a :href="item.href" target="_blank" v-for="(item, index) in footerText.one" :key="index">{{item.content}}</a>
            <br />
            <a :href="item.href" target="_blank" v-for="(item, index) in footerText.tow" :key="'info2-' + index">{{item.content}}</a> 
            <br />
            <a href="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/af5b8ef38e7d57c5ee7fa4289ccf4df8.png" target="_blank">增值电信业务许可证</a>&nbsp; 网络食品经营备案（京）【2018】WLSPJYBAHF-12 &nbsp;
            <a href="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/fe7383e11127caea371f17156f429a1e.png" target="_blank">食品经营许可证</a>
            <br />违法和不良信息举报电话：185-0130-1238
            <a href="https://www.mi.com/static/intellectual/index.html" target="_blank" >知识产权侵权投诉</a> 本网站所列数据，除特殊说明，所有数据均出自我司实验室测试
          </p>
        </div>
        <div class="info-links">
          <a :href="item.href" target="_blank" v-for="(item, index) in footerInfo" :key="index">       
            <img v-lazy="item.img" :alt="item.alt" />
          </a>
        </div>
      </div>
      <div class="slogan ir">探索黑科技，小米为发烧而生</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MiFooter",
  data() {
    return {
      footerText: {
        one: [
          {
            href: 'http://beian.miit.gov.cn/',
            content: '京ICP备10046444号 '
          },
          {
            href: 'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802020134',
            content: '京公网安备11010802020134号 '
          },
          {
            href: '//www.mi.com/culture-license/',
            content: '京网文[2017]1530-131号 '
          }
        ],
        tow: [
          {
            href: '//www.mi.com/medical/record/',
            content: '（京）网械平台备字（2018）第00005号 '
          },
          {
            href: '//www.mi.com/medical/qualification/',
            content: '互联网药品信息服务资格证 (京) -非经营性-2014-0090 '
          },
          {
            href: '//www.mi.com/business-license/',
            content: '营业执照'
          },
          {
            href: '//www.mi.com/medical/list/',
            content: '医疗器械公告'
          },
        ]
      },
      footerService: [
        {
          href: "//www.mi.com/static/fast/",
          class: "icon-editor2",
          text: "预约维修服务"
        },
        {
          href: "//www.mi.com/service/exchange#back",
          class: "icon-qitianwuliyoutuihuan",
          text: "7天无理由退货"
        },
        {
          href: "//www.mi.com/service/exchange#back",
          class: "icon-15tianwuliyoutuihuo",
          text: "15天免费换货"
        },
        {
          href: "//www.mi.com/service/buy/postage/",
          class: "icon-lihe",
          text: "满150元包邮"
        },
        {
          href: "//www.mi.com/static/maintainlocation/",
          class: "icon-didian",
          text: "520余家售后网点"
        }
      ],
      footerLinks: [
        {
          grounpContent: "帮助中心",
          list: [
            {
              href: "//www.mi.com/service/account/Account%20registration/",
              content: "账户管理"
            },
            {
              href: "//www.mi.com/service/buy/SalesTime/",
              content: "购物指南"
            },
            {
              href: "//www.mi.com/service/order/sendprogress/",
              content: "订单操作"
            }
          ]
        },
        {
          grounpContent: "服务支持",
          list: [
            {
              href: "//www.mi.com/service/exchange",
              content: "售后政策"
            },
            {
              href: "//www.mi.com/service/",
              content: "自助服务"
            },
            {
              href: "//www.mi.com/c/service/download/",
              content: "相关下载"
            }
          ]
        },
        {
          grounpContent: "线下门店",
          list: [
            {
              href: "//www.mi.com/c/xiaomizhijia/",
              content: "小米之家"
            },
            {
              href: "//www.mi.com/static/maintainlocation/",
              content: "服务网点"
            },
            {
              href: "//www.mi.com/static/familyLocation/",
              content: "授权体验店"
            }
          ]
        },
        {
          grounpContent: "关于小米",
          list: [
            {
              href: "//www.mi.com/about/",
              content: "了解小米"
            },
            {
              href: "//hr.xiaomi.com/",
              content: "加入小米"
            },
            {
              href: "//company.mi.com/zh-cn/ir/indexContent/index.html",
              content: "投资者关系"
            }
          ]
        },
        {
          grounpContent: "关注我们",
          list: [
            {
              href: "https://weibo.com/xiaomishangcheng",
              content: "新浪微博"
            },
            {
              href: "javascript:void(0);",
              content: "官方微信"
            },
            {
              href: "//www.mi.com/about/contact/",
              content: "联系我们"
            }
          ]
        },
        {
          grounpContent: "特色服务",
          list: [
            {
              href: "//www.mi.com/order/fcode",
              content: "F 码通道"
            },
            {
              href: "//www.mi.com/order/giftcode",
              content: "礼物码"
            },
            {
              href: "//order.mi.com/service/imei",
              content: "防伪查询"
            }
          ]
        }
      ],
      footerList: [
        {
          content: "小米商城",
          sep: "|"
        },
        {
          content: "MIUI",
          sep: "|"
        },
        {
          content: "米家",
          sep: "|"
        },
        {
          content: "米聊",
          sep: "|"
        },
        {
          content: "多看",
          sep: "|"
        },
        {
          content: "游戏",
          sep: "|"
        },
        {
          content: "路由器",
          sep: "|"
        },
        {
          content: "米粉卡",
          sep: "|"
        },
        {
          content: "政企服务",
          sep: "|"
        },
        {
          content: "小米天猫店",
          sep: "|"
        },
        {
          content: "小米集团隐私政策",
          sep: "|"
        },
        {
          content: "小米公司儿童信息保护规则",
          sep: "|"
        },
        {
          content: "小米商城隐私政策",
          sep: "|"
        },
        {
          content: "小米商城用户协议",
          sep: "|"
        },
        {
          content: "问题反馈",
          sep: "|"
        },
        {
          content: "廉正举报",
          sep: "|"
        },
        {
          content: "诚信合规",
          sep: "|"
        },
        {
          content: "Select Location"
        }
      ],
      footerInfo: [
        {
          href: '//privacy.truste.com/privacy-seal/validation?rid=4fc28a8c-6822-4980-9c4b-9fdc69b94eb8&amp;lang=zh-cn',
          img: '//i1.mifile.cn/f/i/17/site/truste.png',
          alt: 'TRUSTe Privacy Certification'
        },
        {
          href: '//search.szfw.org/cert/l/CX20120926001783002010',
          img: '//s01.mifile.cn/i/v-logo-2.png',
          alt: '诚信网站'
        },
        {
          href: 'https://ss.knet.cn/verifyseal.dll?sn=e12033011010015771301369&amp;ct=df&amp;pa=461082',
          img: '//s01.mifile.cn/i/v-logo-1.png',
          alt: '可信网站'
        },
        {
          href: 'http://www.315online.com.cn/member/315140007.html',
          img: '//s01.mifile.cn/i/v-logo-3.png',
          alt: '网上交易保障中心'
        },
        {
          href: 'https://www.mi.com/service/buy/commitment/',
          img: '//i8.mifile.cn/b2c-mimall-media/ba10428a4f9495ac310fd0b5e0cf8370.png',
          alt: '诚信经营 放心消费'
        }
      ]
    };
  }
};
</script>

<style>
.site-footer .footer-service {
  padding: 27px 0;
  border-bottom: 1px solid #e0e0e0
}

.site-footer .list-service {
  margin: 0;
  padding: 0;
  list-style-type: none
}

.site-footer .list-service li {
  float: left;
  width: 19.8%;
  height: 25px;
  border-left: 1px solid #e0e0e0;
  font-size: 16px;
  line-height: 25px;
  text-align: center
}

.site-footer .list-service li:first-child {
  border-left: 0
}

.site-footer .list-service em[class*=iconfont] {
  margin-right: 6px;
  font-size: 24px;
  line-height: 24px;
  vertical-align: -4px
}

.site-footer .list-service a {
  color: #616161;
  -webkit-transition: color .2s;
  transition: color .2s
}

.site-footer .list-service a:hover {
  color: #ff6700
}

.site-footer .footer-links {
  padding: 40px 0
}

.site-footer .footer-links .col-links {
  float: left;
  width: 160px;
  height: 112px;
  margin: 0
}

.site-footer .footer-links .col-links dt {
  margin: -1px 0 26px;
  font-size: 14px;
  line-height: 1.25;
  color: #424242
}

.site-footer .footer-links .col-links dd {
  margin: 10px 0 0;
  font-size: 12px
}

.site-footer .footer-links .col-links a {
  color: #757575
}

.site-footer .footer-links .col-links a:hover {
  color: #ff6700
}

.site-footer .footer-links .col-contact {
  float: right;
  width: 251px;
  height: 112px;
  border-left: 1px solid #e0e0e0;
  text-align: center;
  color: #616161
}

.site-footer .footer-links .col-contact p {
  margin: 0 0 16px;
  font-size: 12px
}

.site-footer .footer-links .col-contact .phone {
  margin: 0 0 5px;
  font-size: 22px;
  line-height: 1;
  color: #ff6700
}

.site-info {
  padding: 30px 0;
  font-size: 12px;
  background: #fafafa
}

.site-info .container {
  position: relative
}

.site-info .logo {
  width: 57px;
  height: 57px;
  margin-right: 10px;
  background: url(//s02.mifile.cn/assets/static/image/logo-footer.png) no-repeat 50% 50%;
  position: absolute;
  top: 0;
  left: 0
}

.site-info .info-text {
  color: #b0b0b0;
  padding-left: 67px
}

.site-info .info-text p {
  margin: 0;
  line-height: 18px
}

.site-info .info-text a {
  color: #b0b0b0
}

.site-info .info-text a:hover {
  color: #ff6700
}

.site-info .info-text .sites a {
  color: #757575
}

.site-info .info-text .sites span {
  margin-right: 3px;
}

.site-info .info-text .sites a:hover {
  color: #ff6700
}

.site-info .info-text .sites .sep {
  margin: 0
}

.site-info .info-links {
  height: 28px;
  margin: 4px 0 0;
  padding-left: 67px
}

.site-info .info-links img {
  width: auto;
  height: 28px;
  margin-left: 0;
  margin-bottom: 15px
}

.site-info .slogan {
  clear: both;
  margin: 30px auto 0;
  width: 267px;
  height: 19px;
  background: url(//s02.mifile.cn/assets/static/image/slogan2016.png) no-repeat center 0
}
</style>