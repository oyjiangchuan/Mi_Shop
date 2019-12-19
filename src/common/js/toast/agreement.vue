<template>
  <transition name="dialog-fade">
    <div class="mi-popup" style="z-index: 100;" v-show="visiable">
      <!-- 背景 -->
      <div class="mi-popup__mask mi-modal"></div>
      <!-- 内容 -->
      <div class="mi-dialog__wrapper dialog-site-agreement" style="width: 800px;">
        <div class="mi-dialog">
          <div class="mi-dialog__header">
            <span class="mi-dialog__title">协议声明</span>
          </div>
          <a class="mi-dialog__headerbtn" @click="close">
            <i class="mi-dialog__close iconfont icon-shanchu"></i>
          </a>
          <div class="mi-dialog__body">
            <div class="mi-dialog__inner">
              <div id="J_siteAgreementContent">
                <div class="desc J_agreeTabs">
                  <span
                    class="agree-tab"
                    data-href="http://www.mi.com/about/user-agreement/"
                  >《小米商城用户协议》</span>、
                  <span
                    class="agree-tab"
                    data-href="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ded8d0e4a77d.html"
                  >《小米商城隐私政策》</span>、
                  <span
                    class="agree-tab"
                    data-href="https://static.account.xiaomi.com/html/agreement/account/cn.html"
                  >《小米帐号用户协议》</span>、
                  <span
                    class="agree-tab"
                    data-href="https://static.account.xiaomi.com/html/privacy/account/zh_CN.html"
                  >《小米帐号隐私政策》</span>请您仔细阅读以上协议，其中有对您权利义务的特别约定等重要条款，同意后方可使用本软件
                </div>
                <div class="con">
                  <iframe
                    id="J_agreementContentIframe"
                    width="100%"
                    height="300px"
                    frameborder="0"
                    src="../../../static/Agreement.html"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          <div class="mi-dialog__footer">
            <button class="btn btn-primary" @click="toRegister">同意</button>
            <button class="btn btn-gray" @click="close">不同意</button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import router from "@/router";
export default {
  methods: {
    close() {
      this.$closeToast();
    },
    toRegister() {
      this.$closeToast()
      router.push({ path: "/register" });
    }
  },
  props: {
    visiable: {
      type: Boolean,
      required: true
    }
  }
};
</script>

<style scoped>
@import url(./common.css);
.mi-dialog__wrapper.dialog-site-agreement .desc {
  margin-left: 20px;
  margin-bottom: 20px;
}

.mi-dialog__wrapper.dialog-site-agreement .desc span {
  color: #ff6700;
  cursor: pointer;
}

.mi-dialog__wrapper.dialog-site-agreement .con {
  max-height: 300px;
  overflow: hidden;
  font-size: 14px;
  line-height: 24px;
  text-align: left;
}

</style>