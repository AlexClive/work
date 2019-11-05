// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from "./store";
import VueSocketIO from 'vue-socket.io'
import '../src/assets/icon/style.css'
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css'

Vue.config.productionTip = false;
//初始化elementUI
Vue.use(ElementUI);
Vue.use(new VueSocketIO({
  debug: true,
  // 服务器端地址
  connection: 'http://localhost:8081',
  vuex: {
  }
}));
//自定义一个代码高亮指令
Vue.directive('highlight', function (el) {
  let highlight = el.querySelectorAll('pre code');
  highlight.forEach((block)=>{
    console.log(block)
    hljs.initHighlightingOnLoad(block);
  })
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
