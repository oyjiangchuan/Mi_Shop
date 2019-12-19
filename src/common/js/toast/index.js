import Vue from 'vue';
import video from './video.vue';
import agreement from './agreement.vue';
import deleteProdcuts from './deleteProdcuts.vue';

var instance
var time = null

function showToast(type, item=null) {
  var toastConstruct
  if (type === 'toastVideo') {
    toastConstruct = Vue.extend(video);
  } 
  else if (type === 'deleteProdcuts') {
    toastConstruct = Vue.extend(deleteProdcuts);
  }
  else if (type === 'toastAgreement') {
    toastConstruct = Vue.extend(agreement);
  }
  
  instance = new toastConstruct({
    el: document.createElement('div'),
    propsData: {
      visiable: false,
      item: item
    }
  })
  document.body.appendChild(instance.$el);
  if (time) {
    clearTimeout(time)
    // console.log(time)
  }
  time = setTimeout(() => {
    instance.visiable = true
  }, 10);
}

function closeToast() {
  if (instance.$el) {
    instance.visiable = false
    document.body.removeChild(instance.$el);
  }
}

export {
  showToast,
  closeToast
};