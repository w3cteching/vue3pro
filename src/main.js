import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入bus
import Bus from './utils/bus'

// 引入http
import http from './http/request'

// 引入reset.css
import './common/reset.css'

// 引入flexible
// import './utils/flexible'

import './utils/rem'

router.beforeEach((to, from, next) => {
  console.log('to:::::', to)
  if (to.meta.title) {
    document.title = to.meta.title;
   }
  let token = localStorage.getItem('token');
  if (to.meta.isLogin && !token) {
    next({
      path: '/login'
    })
  } else {
    next()
  }
})

// 挂载到Vue原型上
Vue.prototype.$bus = Bus;
Vue.prototype.$http = http
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
