import Vue from 'vue'
import App from './App.vue'
import {
  Button
} from 'mint-ui'

import router from './router'
import Header from './components/Header/Header.vue'
import Star from './components/Star/Star.vue'
import store from './store'
import './validate'
import './mock/mock-server'

//全局注册
Vue.component("Header", Header)
Vue.component("Star", Star)
Vue.component(Button.name, Button)

new Vue({
  el: '#app',
  /* components: { App },
  template: '<App/>' */
  render: h => h(App),
  /*render: function (createElement) {
    return createElement(App)  // 返回<App/>
  }*/
  router, //配置路由器
  store, //配置vuex的store
})
