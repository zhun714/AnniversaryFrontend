
// #ifndef VUE3
import Vue from 'vue'
import App from './App'
import { $http } from '@escook/request-miniprogram'
import store from '@/store/store.js'
uni.$http = $http

$http.beforeRequest = function (options) {
  uni.showLoading({
    title: '数据加载中...',
  })
} 
$http.afterRequest = function () {
  uni.hideLoading()
  
}

uni.$showMsg = function (title = '数据加载失败！', duration = 1500) {
  uni.showToast({
    title,
    duration,
    icon: 'none',
  })
}

Vue.config.productionTip = false

App.mpType = 'app'


Vue.prototype.$store = store;

const app = new Vue({
	store,
    ...App

})
app.$mount()


// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}

// #endif


