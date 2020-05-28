<template>
     <div>
        <div class="icon">
           <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-sousuo"></use>
            </svg>
        </div>
        <input
          type="text"
          :value='value'
          class='search'
          placeholder="请输入内容"
          @input='changeValue'
      />

     </div>

</template>

<script>
export default {
  name: 'search',
  props: {
    value: {
      type: String,
      default: '默认值'
    }
  },
  methods: {
    changeValue (e) {
        this.$emit('input',e.target.value)
    }
  }
}
</script>

<style lang="scss">
.search {
  width: 500px;
  height:100px;
  border:1px solid #ccc;
  border-radius:10px;
}

.search:after {
    content:''
}
</style>
