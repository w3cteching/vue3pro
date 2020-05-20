/* eslint-disable import/first */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 引入路由,路由懒加载
// import Home from '../views/home.vue'
// import Shopping from '../views/shopping.vue'
// import OrderList from '../views/orderlist.vue'
// import My from '../views/my.vue'

const Home = () => import('../views/home.vue');
const Shopping = () => import('../views/shopping.vue');
const OrderList = () => import('../views/orderlist.vue');
const My = () => import('../views/my.vue');

// 配置路由
const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home },
  { path: '/shopping', component: Shopping },
  { path: '/orderList', component: OrderList },
  { path: '/my', component: My }
]


console.log('路由中的base', process.env.BASE_URL)
// 实例化路由
const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: 'active'
});

// 导出路由
export default router
