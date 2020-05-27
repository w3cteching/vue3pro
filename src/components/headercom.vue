<template>
    <div class="hd">
      <slot />
      <h2>{{ title }}</h2>
      <!-- <button @click="modi">修改</button> -->
      <span class="icon">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-sousuo"></use>
        </svg>
      </span>
    </div>
</template>
<script>

export default {
  name: 'headercom',
  // props: ['title'],
  props: {
    title: {
      type: String,
      default: '请输入标题',
      required: true
    }
  },
  data () {
    return {
     // t: this.title,
    }
  },
  components: {
   
  },
  methods: {
    modi () {
     // this.title = '1906A'
     this.$emit('update:title', '1906A')
    }

  },
  computed: {
   
  }
}
</script>

<style lang="scss">
.hd {
    position: absolute;
    z-index: 100;
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

button {
    color:#f00;
}
</style>
