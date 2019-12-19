<template>
  <transition name="dialog-fade">
    <div class="mi-popup" style="z-index: 100;" v-show="visiable">
      <div class="mi-popup__mask mi-modal"></div>
      <div class="mi-dialog__wrapper home-video-dialog" style="width: 500px;">
        <div class="mi-dialog">
          <a class="mi-dialog__headerbtn" @click="close">
            <i class="mi-dialog__close iconfont icon-shanchu"></i>
          </a>
          <div class="modal-bd">
            <div class="text">
              <h3>您确定删除吗？</h3>
            </div>
          </div>
          <div class="mi-dialog__footer">
            <button class="btn btn-gray" @click="close">取消</button>
            <button class="btn btn-primary" @click="deleteProduct">确定</button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import store from "@/store/index"; // 这里需要引入一下store 此时的弹窗的this不能访问到$store
export default {
  methods: {
    close() {
      this.$closeToast();
    },
    deleteProduct() {
      store.dispatch("cart/delProductToCart", this.item.productid); // namespace的dispatch写法
      this.$closeToast();
    },
  },
  props: {
    visiable: {
      type: Boolean,
      required: true
    },
    item: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>
@import url(./common.css);
.modal-bd {
  padding: 60px 60px 40px;
  text-align: center;
}
.text {
  min-height: 130px;
}
.text h3 {
  margin: 0;
  font-size: 30px;
  font-weight: 400;
  line-height: 50px;
  color: #424242;
}
</style>