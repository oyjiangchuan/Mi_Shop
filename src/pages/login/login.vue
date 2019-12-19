<template>
  <div>
    <div class="wrapper">
      <!--bg_banner_start-->
      <div class="bgiframe">
        <div class="h_panel">
          <div class="h_logo">
            <router-link tag="a" to="/">小米网</router-link>
          </div>
        </div>
        <div class="login_banner_panel"></div>
      </div>
      <!--bg_banner_end-->
      <div class="wrap">
        <div class="layout_panel">
          <div class="layout">
            <!--表单输入登录-->
            <div class="mainbox form-panel">
              <!-- 头部 -->
              <div class="nav_tabs_panel">
                <div class="nav_tabs">
                  <a
                    class="navtab-link"
                    :class="{'now': loginMethod}"
                    href="javascript:void(0);"
                    @click="LoginPsd()"
                  >帐号登录</a>
                  <span class="line"></span>
                  <a
                    class="navtab-link"
                    :class="{'now': !loginMethod}"
                    href="javascript:void(0);"
                    @click="LoginCode()"
                  >扫码登录</a>
                </div>
              </div>
              <!-- 主体 -->
              <div class="login_area" v-show="loginMethod">
                <div class="loginbox clearfix">
                  <!-- 输入框 -->
                  <div class="lgn_inputbg clearfix">
                    <!--验证用户名-->
                    <div class="single_imgarea">
                      <div class="na-img-area" style="display:none">
                        <div class="na-img-bg-area"></div>
                      </div>
                      <p class="us_name tac"></p>
                      <p class="us_id tac"></p>
                    </div>
                    <label class="labelbox clearfix">
                      <input
                        type="text"
                        id="username"
                        placeholder="邮箱/手机号码/小米ID"
                        v-model="username"
                        autocomplete="off"
                      />
                    </label>
                    <label class="labelbox clearfix">
                      <input type="password" placeholder="密码" id="password" v-model="password" />
                    </label>
                  </div>
                  <!-- 错误信息 需要动态显示-->
                  <div class="err_tip" v-show="error">
                    <div>
                      <em class="icon_error">!</em>
                      <span class="error-con">{{mess}}</span>
                    </div>
                  </div>
                  <!-- 登录按钮 -->
                  <div class="btns_bg">
                    <input class="btnadpt" type="button" value="登录" @click="login" />
                  </div>
                  <div class="other_panel clearfix">
                    <span class="sms_link">
                      <router-link tag="a" class="btnadpt btn_gray" to="/register">新用户？点击这里注册</router-link>
                    </span>
                    <div class="reverse">
                      <div class="n_links_area">
                        <router-link tag="a" class="outer-link" to="/register">立即注册</router-link>
                        <span>|</span>
                        <a class="outer-link" href="javascript:void(0)">忘记密码？</a>
                      </div>
                    </div>
                    <!-- 其他登录方式 s -->
                    <div class="other_login_type">
                      <fieldset class="oth_type_tit">
                        <legend align="center" class="oth_type_txt">其他方式登录</legend>
                      </fieldset>
                      <div class="oth_type_links">
                        <span class="icon_type btn_qq">
                          <i class="btn_sns_icontype icon_default_qq"></i>
                        </span>
                        <span class="icon_type btn_weibo">
                          <i class="btn_sns_icontype icon_default_weibo"></i>
                        </span>
                        <span class="icon_type btn_alipay">
                          <i class="btn_sns_icontype icon_default_alipay"></i>
                        </span>
                        <span class="icon_type btn_weixin">
                          <i class="btn_sns_icontype icon_default_weixin"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="ercode_area tab_qr_area"
              style="height: 468px; width: 410px;"
              v-show="!loginMethod"
            >
              <div class="ercode_pannel">
                <div class="ercode_box">
                  <div class="loadImg">
                    <img src="../../../static/image/下载.png" alt />
                  </div>
                  <div class="custom_sub_txt">
                    <p>
                      使用
                      <span>小米商城APP</span>扫一扫
                    </p>
                    <p>小米手机可打开「设置」&gt;「小米帐号」扫码登录</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <loginRegFooter />
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
import loginRegFooter from "@/components/loginRegFooter";
import api from "@/api/index";
export default {
  name: "register",
  data() {
    return {
      username: "",
      password: "",
      loginMethod: true,
      error: false,
      mess: "",
      beforePath: "",
      nextPath: ""
    };
  },
  created() {
    this.nextPath = this.$route.query.redirect // 把拦截的页面路由信息拿到
  },
  components: {
    loginRegFooter
  },
  beforeRouteEnter(to, from, next) {
    // console.log(this.path); 错误 这里访问不到该组件的实例
    next(vm => { // 通过next 访问该组件的实例
      vm.beforePath = from.path  // 把上一页的路由信息储存在本页面
    });
    
  },
  methods: {
    ...mapActions("cart", ["changLoginStatus"]),
    ...mapMutations("user", ["changeLogin"]),
    login() {
      if (this.username.trim() === "" || this.password.trim() === "") {
        this.error = true;
        this.mess = "账号名密码不能为空！";
        return;
      }
      let params = {
        username: this.username.trim(),
        userpwd: this.password.trim()
      };

      const that = this; // 保存this 防止丢失
      api.Login(params).then(res => {
        // console.log(res)
        if (res.data.type === "800000") { // 登陆成功
          that.error = false;
          let userToken = 'Bearer ' + res.data.token // jwt头部认证信息
          that.changeLogin({Authorization: userToken})
          if (that.nextPath) {
            that.$router.push(that.nextPath)
          }
          else {
            that.$router.push(that.beforePath)
          }
        } else {
          that.error = true;
          that.mess = res.data.mess;
          that.$toast(that.mess) // 调用弹窗组件
        }
      });
    },
    LoginPsd() {
      this.loginMethod = true;
    },
    LoginCode() {
      this.loginMethod = false;
    },
    
  }
};
</script>

<style scoped>
.wrapper {
  display: block;
  min-height: auto;
  position: relative;
  -webkit-box-align: center;
  -webkit-box-pack: center;
  height: auto;
  width: 100%;
}
.bgiframe {
  display: block;
  z-index: 3;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;
}

.wrap {
  padding-bottom: 0;
  position: relative;
}
.layout_panel,
.h_panel,
.login_banner {
  width: 1130px;
  margin: 0 auto;
}
.h_logo {
  width: 200px;
  height: 98px;
  background: url(https://account.xiaomi.com/static/res/7f6f2f5/account-static/respassport/acc-2014/img/mistore_logo.png)
    no-repeat;
}
.login_banner_panel {
  width: 100%;
  height: 588px;
  position: absolute;
  left: 0;
  top: 98px;
  background: url("https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e8201bfbb8c9d474a48da76f7d81a5c7.jpg")
    top center no-repeat;
  cursor: pointer;
}
.h_logo a {
  display: block;
  height: 98px;
  text-indent: -9999em;
}
.layout_panel {
  padding-top: 130px;
}
.layout {
  background-color: #fff;
  width: 410px;
  min-height: 556px;
  margin: 0 auto 20px;
  margin-bottom: 0;
  margin-right: 0;
  font-size: 14px;
  z-index: 4;
  position: relative;
}
/* 表单盒子 */
.mainbox {
  padding-bottom: 0;
}
/* 头部 */
.nav_tabs {
  padding: 27px 0 24px;
  text-align: center;
  font-size: 24px;
  color: #666;
}
.nav_tabs a {
  color: #666;
}
.nav_tabs a:hover,
.nav_tabs a.now {
  color: #f56600;
}
.line {
  width: 1px;
  height: 24px;
  margin: 0 35px 0 42px;
  border: 1px solid #e0e0e0;
}
/* 主体部分 */
.login_area,
.mode_panel {
  width: 358px;
  margin: 0 auto;
  padding-bottom: 20px;
}
.login_area {
  width: 348px;
  padding-bottom: 0;
}
.loginbox {
  position: relative;
}
.lgn_inputbg {
  position: relative;
}

.single_imgarea {
  text-align: center;
  line-height: 20px;
  font-size: 14px;
  color: #333;
}
.single_imgarea,
.confirm_con {
  line-height: 20px;
  font-size: 14px;
  color: #333;
}
/* 头像 */
.na-img-area {
  width: 80px;
  height: 80px;
  border: 2px solid #e3e3e3;
  border-radius: 50%;
  padding: 4px;
  background: #fff;
  position: relative;
  z-index: 4;
  margin: 0 auto;
}
.na-img-bg-area:empty {
  background: url(https://account.xiaomi.com/static/res/7c3e9b0/passport/acc-2014/img/n-avator-bg.png)
    0 0 no-repeat;
}
.na-img-bg-area {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
}

.single_imgarea .us_name {
  padding-top: 10px;
}
.tac {
  text-align: center;
}
/* 输入框 */
.labelbox {
  display: block;
  margin-bottom: 14px;
  border: 1px solid #e0e0e0;
}
.labelbox input {
  width: 306px;
  height: 22px;
  line-height: 22px;
  padding: 13px 16px 13px 14px;
  display: block;
}
/* 登陆状态的判断弹框,密码校验时才会出现 */
.err_tip {
  line-height: 20px;
  font-size: 14px;
  color: #f66;
}
.icon_error {
  width: 14px;
  height: 14px;
  margin: -1px 5px 0 0;
  overflow: hidden;
  display: inline-block;
  vertical-align: middle;
  background-color: #ff6700;
  border-radius: 50%;
  color: #fff;
  text-align: center;
  line-height: 14px;
}
.err_tip span {
  vertical-align: middle;
}
/* 登陆按钮 */
.btns_bg {
  padding-top: 10px;
}
.btnadpt {
  background-color: #ff6700;
  width: 100%;
  height: 50px;
  line-height: 50px;
  display: block;
  margin-bottom: 14px;
  text-align: center;
  font-size: 14px;
  color: #fff;
  cursor: pointer;
}
/* 登录按钮下部分 */
.other_panel {
  margin-top: -5px;
}
.sms_link {
  float: left;
}
.sms_link .btnadpt.btn_gray {
  background: #fff;
  margin-bottom: 30px;
  color: #ff6700;
  border: 0 none;
  height: auto;
  line-height: normal;
}
.n_links_area {
  padding-top: 0;
  color: #999;
  text-align: center;
  float: right;
}
.n_links_area a {
  color: #999;
  font-size: 14px;
}
.n_links_area span {
  padding-left: 5px;
}

/* 其他登陆方式 */
.other_login_type {
  padding-top: 143px;
  text-align: center;
}
.oth_type_tit {
  border-top: 1px solid #e0e0e0;
  padding-top: 10px;
}

fieldset,
img {
  border: 0;
  margin: 0;
  padding: 0;
}

.oth_type_txt {
  font-size: 14px;
  color: #bbb;
  margin: 0 auto;
  text-align: center;
}
.oth_type_links {
  padding-top: 3px;
  text-align: center;
}

.icon_type {
  cursor: pointer;
  width: 30px;
  height: 30px;
  margin: 0 17px;
  display: inline-block;
  border-radius: 50%;
}
.btn_qq {
  background-color: #0288d1;
}
.btn_weibo {
  background-color: #d32f2f;
}
.btn_alipay {
  background-color: #0ae;
}
.btn_weixin {
  background-color: #00d20d;
}
.btn_sns_icontype {
  display: block;
  margin: 4px auto 0;
  background: url(https://account.xiaomi.com/static/res/166d6dc/account-static/respassport/acc-2014/img/icons_type.png);
  width: 18px;
  height: 18px;
}
.icon_default_qq {
  background-position: -19px 0;
}
.icon_default_weibo {
  background-position: -38px 0;
}
.icon_default_alipay {
  background-position: -57px 0;
  width: 25px;
  margin-top: 6px;
  margin-left: 4px;
}
.icon_default_weixin {
  margin-top: 6px;
  background-position: -83px 0;
  width: 24px;
}
/* 扫码登录页面 */
.ercode_pannel {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}
.ercode_box {
  text-align: center;
}
.loadImg {
  padding-top: 114px;
  text-align: center;
}
.custom_sub_txt {
  padding-top: 14px;
  font-size: 14px;
  display: block;
  text-align: center;
  color: #757575;
}
.custom_sub_txt span {
  padding: 0 5px;
  color: #ff6700;
}
</style>