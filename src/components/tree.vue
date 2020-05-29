<template>
    <div>
        <div class="title" :style="indent" @click="toggle">
           <span>{{ isShow ? '-':'+' }}</span>
           {{ title }}
        </div>
        <div v-if="isShow">
            <tree-com
                v-for="(item,index) in list"
                :key="index"
                :title="item.name"
                :list="item.children"
                :depth="depth+1"
            >
        </tree-com>
        </div>
    </div>
</template>

<script>
export default {
  name: 'tree-com', // 通过组件自身的name来实现组件的递归调用
  data () {
    return {
      isShow: true
    }
  },
  props: {
    title: {
      type: String,
      default: '名称'
    },
    list: {
      type: Array
    },
    depth: {
      type: Number,
      default: 0
    }
  },
  computed: {
    indent () {
      return `transform:translate(${this.depth * 20}px)`
    }
  },
  methods: {
    toggle () {
      this.isShow = !this.isShow;
    }
  }
}
</script>

<style lang="scss">

</style>
