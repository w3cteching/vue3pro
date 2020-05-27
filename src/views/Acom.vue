<template>
    <div class="acom">
        A组件
        <!-- <button @click="send">发送</button> -->
        <Bcom v-bind="$attrs" v-on="$listeners"></Bcom>
    </div>
</template>

<script>
import Bcom from './Bcom'
export default {
  // inheritAttrs: false,
  name: 'Acom',
  props:{
    title:{
      default: '标题',
      type: String
    }

  },
  data () {
    return {
      str: '1906A'
    }
  },
  components:{Bcom},
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