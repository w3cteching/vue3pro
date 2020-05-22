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
    <!-- 侧滑 -->
    <transition name="slide">
       <SlidePage v-if="isShow"></SlidePage>
    </transition>
  </div>
</template>

<script>
// 引入slide
import SlidePage from './components/slide'
export default {
  provide () {
    return {
      msg: 'hello,vuejs',
      app: this
    }
  },
  name: 'app',
  data () {
    return {
      isShow: false,
      navs: [
        { id: 1001, name: 'shouye', title: '首页', url: '/home' },
        { id: 1002, name: 'gouwuche', title: '购物车', url: '/shopping' },
        { id: 1003, name: 'fenlei', title: '订单', url: '/orderlist' },
        { id: 1004, name: 'wode', title: '我的', url: '/my' }
      ]
    }
  },
  components: { SlidePage },
  created () {
    this.toggle()
  },
  methods: {
    getData(v) {
      console.log('获取ajax的方法:',v)
    },
    toggle () {
      this.$bus.$on('up', v => {
        console.log(v)
        this.isShow = v;
      })
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

//定义动画过程
.slide-enter-active,.slide-leave-active {
   transition:transform .3s ;
}

//定义起始和结束
.slide-enter,.slide-leave-to {
  transform:translate3d(-100%,0,0)
}

</style>
