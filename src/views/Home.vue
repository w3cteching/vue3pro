<template>
  <div class="home">
    <div class="hd">
      <h2>头部区域</h2>
      <span class="icon">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-sousuo"></use>
        </svg>
      </span>
    </div>
    <div class="main">
       <p class="article">
         请在此评论
          <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-pinglun"></use>
        </svg>
       </p>

       <div>
         <p>{{ count }}</p>
        <button class="btn" @click="increment">加</button>
        <button class="btn" @click="decrement">减</button>
       </div>

       <div class="list">
          <button class="btn" @click="register">module状态</button>
          <p>token:{{ token }}</p>
          <p>count:{{ count }}</p>
          <!-- <ul>
            <li v-for="(item,index) in male" :key="item.id">
               <p>姓名：<span>{{ item.username }}</span></p>
               <p>地址：<span>{{ item.address }}</span></p>
            </li>
          </ul> -->
       </div>
    </div>
  </div>
</template>

<script>
import { courseComment } from '@/http/api'
import { mapState, mapActions,mapGetters } from 'vuex'
export default {
  name: "Home",
  data () {
    return {
      imgs: require('../assets/icons/search.svg'),
      list: [
        { id: 1001, name: "alice" },
        { id: 1002, name: "jack" },
        { id: 1003, name: "test" },
        { id: 1004, name: "meimei" }
      ]
    };
  },
  components: {},
  methods: {
    ...mapActions(['increment', 'decrement', 'login','register']),
   
  },
  computed: {
    ...mapState(['count', 'token', 'index']),
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
  .hd {
    position: absolute;
    left:0;
    top:0;
    width:100%;
    height:88px;
    background: #000;
    color:#fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

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
