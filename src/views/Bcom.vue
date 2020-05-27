<template>
    <div class="bcom">
        B组件---{{ $attrs.name }}
        
        <button @click="go">B组件派发</button>
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
    },
    go () {
      this.$emit('go', '1906A');
    }
  }
}
</script>
<style lang="scss">

</style>
