<template>
  <div class="wrapper">
    <div class="wrap">
      <div class="layout">
        <div class="device-frame">
          <!-- logo -->
          <div class="external_logo_area">
            <div class="milogo"></div>
          </div>
          <!-- 标题 -->
          <div class="title-item">
            <h4 class="title_big30">注册小米帐号</h4>
          </div>
          <!-- 注册页面主体 -->
          <div class="mian">
            <div class="regbox">
              <div class="phone_step1">
                <h4 class="tit_normal">昵称</h4>
                <div class="inputbg">
                  <label class="labelbox">
                    <input type="text" placeholder="请输入昵称" v-model="nickname" />
                  </label>
                </div>
                <h4 class="tit_normal">小米账号</h4>
                <div class="inputbg">
                  <label class="labelbox">
                    <input type="text" placeholder="请输入账号" v-model="username" />
                  </label>
                </div>
                <h4 class="tit_normal">密码</h4>
                <div class="inputbg">
                  <label class="labelbox">
                    <input type="password" placeholder="请输入密码" v-model="password" />
                  </label>
                </div>
                <!-- 错误提示 -->
                <div class="err_tip" v-show="error">
                  <div class="dis_box">
                    <em class="icon_error">!</em>
                    <span>{{mess}}</span>
                  </div>
                </div>
                <div class="mar_phone_dis1" @click="register">立即注册</div>
              </div>
            </div>
            <div class="privacy_box">
              <div class="msg">
                已阅读并同意：小米
                <a
                  href="/about/protocol/agreement"
                  class="inspect_link agreement_link"
                  title="用户协议"
                  target="_blank"
                >用户协议</a>和
                <a
                  href="/about/protocol/privacy"
                  class="inspect_link privacy_link"
                  title=" 隐私政策 "
                  target="_blank"
                >隐私政策</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <loginRegFooter />
    </div>
  </div>
</template>

<script>
import loginRegFooter from "@/components/loginRegFooter";
import api from  '@/api/index'
export default {
  name: "register",
  data() {
    return {
      nickname: '',
      username: '',
      password: '',
      error: false,
      mess: ''
    }
  },
  components: {
    loginRegFooter
  },
  methods: {
    register() {
      if (this.username.trim() === '' || this.password.trim() === '' || this.nickname.trim() === '') {
        this.error = true
        this.mess = '昵称账号名密码不能为空！'
        return
      }
      let params = {
        username: this.username.trim(),
        userpwd: this.password.trim(),
        nickname: this.nickname.trim()
      }
      const that = this // 保存this 防止丢失
      api.Register(params).then(res => {
        // console.log(res)
        if (res.data.type === '800000') {
          that.error = false
          that.$router.push('/')
        } else {
          that.error = true
          that.mess = res.data.mess
        }
      })
    }
  }
};
</script>

<style scoped>
.wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f9f9f9;
}
.wrap {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 854px;
  box-shadow: 3px 3px 30px #888;
}
.layout {
  width: 100%;
  margin: 0 auto;
}
.device-frame {
  border: none;
  border-radius: 0;
  background: #fff;
  min-height: 400px;
  padding: 0 34px 30px;
}
.external_logo_area {
  padding-bottom: 40px;
}
.milogo {
  width: 49px;
  height: 48px;
  margin: 0 auto;
  cursor: pointer;
  background-image: url(https://account.xiaomi.com/static/res/28f08d0/account-static/respassport/acc-2014/img/milogo.png);
}
.device-frame .title-item {
  text-align: center;
}
.title_big30 {
  color: #333;
  font-size: 30px;
  font-weight: normal;
}
/* 主体输入框 */
.regbox {
  margin: 0 auto;
  width: 332px;
  padding: 30px 0;
  line-height: 20px;
}
.regbox .tit_normal {
  font-size: 16px;
  color: #333;
  font-weight: 500;
}
.inputbg {
  margin: 15px 0;
}
.labelbox {
  width: 100%;
  height: 40px;
  display: inline-block;
  border: 1px solid #e8e8e8;
}
.inputbg input {
  width: 312px;
  height: 20px;
  line-height: 20px;
  padding: 10px;
  display: inline-block;
}
.mar_phone_dis1 {
  width: 100%;
  height: 42px;
  text-align: center;
  line-height: 42px;
  color: #fff;
  background-color: #ff6700;
  margin-top: 25px;
  cursor: pointer;
}
/* 错误信息提示 */
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

/* 底部 */
.privacy_box {
  text-align: center;
  padding-top: 40px;
}
.msg {
  color: #9d9d9d;
}
.msg a {
  color: #333;
  font-weight: bold;
}
</style>