import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Header from './components/header/header.vue'

//全局注册
Vue.component("Header",Header)

new Vue({
  el: '#app',
  /* components: { App },
  template: '<App/>' */
  render:h=>h(App),
  /*render: function (createElement) {
    return createElement(App)  // 返回<App/>
  }*/
  router,
})
