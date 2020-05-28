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

// 引入过滤器函数
import * as filters from './filters'

// 引入自定义指令
import './directives'

// console.log('filters:',filters.currency)

// Vue.filter('过滤器',对应的过滤器函数)
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})


router.beforeEach((to, from, next) => {
  console.log('to:::::', to)
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  const token = localStorage.getItem('token');
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

// new Vue({
//   el: '#app',
//   router,
//   store,
//   //template:'<div>1906A</div>',
//   render: h => {
//     return h('h2','1906A')  //纯JS写法
//   }
// })

// new Vue({
//   el: '#app',
//   router,
//   store, // store
//   components: { App },
//   template: '<App/>'
// })
