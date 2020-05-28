<template>
  <div class="home">
    <header-com ref="headercom" :title.sync="title">
       <toggle-com />
    </header-com>
    <div class="main">
       <p class="article">
         请在此评论----{{ title }}
          <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-pinglun"></use>
        </svg>
       </p>

       <button @click="toggle()">显示弹框</button>
       <button @click="callChild">调用dialog子组件的方法</button>

       <div ref="box">{{ msg }} </div>
       <button ref='btn' @click="getMsg">获取消息</button>
       <h2>输入框</h2>
        <search-com v-model='v'></search-com>

        <p>您输入的内容:{{ v }}</p>
       <!-- <ul class="goods-list">
         <li v-for="(item,index) in list">

            <p>商品名称：{{ item.name }}</p>
            <p>商品价格：{{ item.price | currency('$') }}</p>
            <p>商品状态：{{ item.isPay | pay }}</p>

         </li>
       </ul> -->
    </div>

     <mask-dialog
        @click.native="方法"
        ref="dialog" 
        v-if="isShow"
        @confirm="geData" 
        @cancel="cancel"
        title="实训二开始"
        content="新的教学内容"
      >
       <div slot="qrcode">
          <h2>二维码</h2>
          <div class="qr">
            <img :src="imgs2" alt="">
          </div>
       </div>
       <button slot="close" @click="close" class="btn-close">X</button>
     </mask-dialog>

  </div>
</template>

<script>
import toggleCom from '@/components/togglecom'
import HeaderCom from '../components/headercom'
import maskDialog from '../components/dialog'
import { courseComment } from '@/http/api'
import { mapState, mapActions, mapGetters } from 'vuex'
import searchCom from '../components/input_com'

export default {
  name: "Home",
  data () {
    return {
      v:'张三',
      msg: '可以在数据变化之后立即使用',
      isShow: false,
      title: '首页',
      show: false,
      imgs1: require('../assets/icons/search.svg'),
      imgs2: require('@/assets/icons/qrcode.jpg'),
      list: [
        { id: 1001, name: "ipad2",price:234200,isPay:0 },
        { id: 1002, name: "华为",price:100660,isPay:1 },
        { id: 1003, name: "oppor",price:123290,isPay:0 },
        { id: 1004, name: "nokia",price:3023320,isPay:1 }
      ]
    };
  },
  mounted () {
   // this.setFocus();
  },
  components: { HeaderCom, maskDialog, toggleCom,searchCom },
  methods: {
    changeValue(e) {
       console.log('input:',e.target.value)
       this.v= e.target.value
    },
    // setFocus () {
    //   this.$refs.username.focus();
    // },
    getMsg () {
      this.$refs.btn.style.background="#00f"
      this.$refs.btn.style.width="300px"
      this.$refs.btn.style.height="100px"

    },
    close () {
      console.log('close')
      this.isShow=false;
    },
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

.goods-list li {
  border-bottom:1px solid #ccc;
  padding:10px 20px;
}
 .qr img {
   width:10vw;
 }
 .btn-close {
   position: absolute;
   right:0px;
   top: 0px;
   border:none;
   background:none;
 }
  .main {
    position: absolute;
    top:.44rem;
    left:0;
    right:0;

  }

  .btn {
    width:200px;
    height: 80px;
    border:1px solid #ccc;
    font-size: 40px;
  }

</style>
