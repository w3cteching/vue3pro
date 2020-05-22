import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//引入bus
import Bus from './utils/bus'

// 引入http
import http from './http/request'

// 引入reset.css
import './common/reset.css'

// 引入flexible
//import './utils/flexible'

import './utils/rem'

// 挂载到Vue原型上
Vue.prototype.$bus = Bus;
Vue.prototype.$http = http
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
