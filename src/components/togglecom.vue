<template>
    <div class="toggle" @click="toggleFn">
        <span>显示/隐藏</span>
    </div>
</template>
<script>
export default {
  name: 'tog',
  data(){
    return {
      flag:false
    }
  },
  methods:{
    toggleFn() {
      console.log('toggleFn')
      this.flag=!this.flag;
      this.$bus.$emit('up',this.flag)
    }
  }
}
</script>
<style lang="scss">
.toggle {
  position: absolute;
  left:10px;
}
</style>
