/* eslint-disable import/first */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// import Home from '../views/home.vue'
// import Shopping from '../views/shopping.vue'
// import OrderList from '../views/orderlist.vue'
// import My from '../views/my.vue'

// 引入路由,路由懒加载
const Home = () => import('../views/home.vue');
const Shopping = () => import('../views/shopping.vue');
const OrderList = () => import('../views/orderlist.vue');
const My = () => import('../views/my/my.vue');
const My1 = () => import('../views/my/child/my1.vue');
const My2 = () => import('../views/my/child/my2.vue');
const My3 = () => import('../views/my/child/my3.vue');
const NotFound = () => import('../views/404.vue');

// 配置路由
const routes = [
  { path: '/', redirect: '/home' },
  {
    path: '/home',
    component: Home,
    meta: { title: '首页' }
  },
  {
    path: '/shopping',
    name:'shopping',
    component: Shopping,
    meta: { isLogin: false, title: '购物车' } // 配置购物车是需要登录的
  },
  {
    path: '/orderList',
    component: OrderList,
    meta: {
      title: '订单'
    }
  },
  /*
  {
    // path: '/my/:type',
    path: '/my',
    component: My,
    children: [
      { //配置默认的二级路由
        path: '',
        component: My1
      },
      {
        path: 'my2',
        component: My2
      },
      {
        path: 'my3',
        component: My3
      }
    ]
  },
  */
  {
    path: '/my',
    name: 'my',
    component: My,
    children: [
      {
        path: '',
        name:'test',
        components: {
          my_banlance: My2,
          my_order: My3
        }
      }
    ]

  },
  { // 匹配不符合上面路径的路由
    path: '/*',
    component: NotFound
  }
]

console.log('路由中的base', process.env.BASE_URL)
// 实例化路由
const router = new VueRouter({
  base: process.env.BASE_URL,
  mode: 'history',
  routes,
  linkActiveClass: 'active'
});

// 导出路由
export default router
