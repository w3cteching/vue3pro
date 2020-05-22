<template>
  <div class="home">
    <header-com ref="headercom" :title.sync="title" />
    <div class="main">
       <p class="article">
         请在此评论----{{ title }}
          <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-pinglun"></use>
        </svg>
       </p>

       <button @click="toggle()">显示弹框</button>
       <button @click="callChild">调用dialog子组件的方法</button>

    </div>

     <mask-dialog
        ref="dialog"
        v-if="isShow"
        @confirm="geData"
        @cancel="cancel"
     />

  
  </div>
</template>

<script>
import HeaderCom from '../components/headercom'
import maskDialog from '../components/dialog'
import { courseComment } from '@/http/api'
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  name: "Home",
  data () {
    return {
      isShow: false,
      title: '首页',
      show: false,
      imgs: require('../assets/icons/search.svg'),
      list: [
        { id: 1001, name: "alice" },
        { id: 1002, name: "jack" },
        { id: 1003, name: "test" },
        { id: 1004, name: "meimei" }
      ]
    };
  },
  components: { HeaderCom, maskDialog },
  methods: {
    callChild () {
      // console.log('this.$children:',this.$children)
     // this.$children[1].fn();
     this.$refs.dialog.fn()
    },
    // 确定要执行的逻辑
    geData (info) {
      console.log('info:', info)
      // 向后台传参操作 this.$http.get()
      this.isShow = false;
    },
    // 取消要执行的逻辑
    cancel () {
      this.isShow = false;
    },
    toggle () {
      this.isShow = !this.isShow;
    }
  },
  computed: {
    ...mapState(['count', 'token', 'index'])
    // ...mapGetters(['male', 'female', 'count111'])
    // total() {
    //   let result=10;
    //   return  result+10;
    // }
    // num () {
    //   return this.$store.state.count;
    // },
    // token () {
    //   return this.$store.state.token;
    // }
  }
};
</script>

<style lang="scss">

  .main {
    position: absolute;
    top:.44rem;
    left:0;
    right:0;

    .search {
      width:50px;
      fill:#f00;
    }
  }

  .btn {
    width:200px;
    height: 80px;
    border:1px solid #ccc;
    font-size: 40px;
  }

</style>
