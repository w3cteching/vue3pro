<template>
    <div class="acom">
        A组件--{{ str }}
        <button @click="send">发送</button>
    </div>
</template>

<script>
export default {
  name: 'Acom',
  data () {
    return {
      str: '1906A'
    }
  },
  methods: {
    send () {
      // 派发up事件,传递this.str
      this.$bus.$emit('up', this.str)
    }
  }
}
</script>
<style lang="scss">
.acom {
    position: absolute;
    top:160px;
} 
</style>