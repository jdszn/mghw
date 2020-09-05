import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import router from '../src/assets/js/router.js'

// 全局的css
import '../src/assets/css/cssreset.css'
import '../src/assets/css/common.css'
// 引入mintui
import MintUI from 'mint-ui'
import '../node_modules/mint-ui/lib/style.css'
Vue.use(MintUI)

new Vue({
  el: '#app',
  render: h => h(App),
  router,
})
