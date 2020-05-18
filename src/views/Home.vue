<template>
  <div class="home">
    <div class="hd">头部区域</div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  data() {
    return {
      list: [
        { id: 1001, name: "alice" },
        { id: 1002, name: "jack" },
        { id: 1003, name: "test" },
        { id: 1004, name: "meimei" }
      ]
    };
  },
  components: {
    HelloWorld
  },
  methods: {
    go() {
      const index = 0;
      console.log(index);
    }
  }
};
</script>


<style>
  .hd {
    position: absolute;
    left:0;
    top:0;
    width:100%;
    height:0.44rem ;
    background: #000;
    color:#fff;
  }
</style>