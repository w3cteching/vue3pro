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
          <button @click="getData">获取数据</button>

       </div>
    </div>
  </div>
</template>

<script>
import { courseComment } from '@/http/api'
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
    getData () {
     // const info = { basis_id: 287 }
       const info={id:287,limit:10,page:2};

      courseComment(info).then(res => {
        console.log('课程信息：', res)
      })
    }
  }
};
</script>

<style lang="scss">
  .hd {
    position: absolute;
    left:0;
    top:0;
    width:100%;
    height:0.44rem ;
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
</style>
