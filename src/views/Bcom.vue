<template>
    <div class="bcom">
        B组件--{{ str }}
    </div>
</template>

<script>
export default {
  name: 'Bcom',
  data () {
    return {
      str: '今天周五啦'
    }
  },
  created () {
    this.getData();
  },
  methods: {
    getData () {
      // 监听派发的事件
      this.$bus.$on('up', v => {
        console.log(v)
        v && (this.str = v);
      })
    }
  }
}
</script>
<style lang="scss">
.bcom {
    position: absolute;
    top:90px;
}
</style>
