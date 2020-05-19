<template>
  <div id="app">
    <router-view></router-view>
    <div class="ft">
      <router-link
          v-for="(item) in navs"
          :key="item.id"
          :to="item.url">
          <svg class="icon icon_nav" aria-hidden="true">
            <use :xlink:href="`#icon-${item.name}`"></use>
         </svg>
          <span>{{ item.title }}</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      navs: [
        { id: 1001, name: 'shouye', title: '首页', url: '/home' },
        { id: 1002, name: 'gouwuche', title: '购物车', url: '/shopping' },
        { id: 1003, name: 'fenlei', title: '订单', url: '/orderlist' },
        { id: 1004, name: 'wode', title: '我的', url: '/my' }
      ]
    }
  }
}
</script>

<style lang="scss">
.ft {
  position: absolute;
  bottom:0;
  left:0;
  right:0;
  height: .44rem;
  display: flex;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    flex:1;
    flex-direction: column;
  &.active {
    color:#f00;
  }
  span {
    padding:.04rem;
  }
  .icon_nav {
    font-size: 20px;
  }
  }
}
</style>
