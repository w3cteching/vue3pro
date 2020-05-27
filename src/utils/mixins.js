const mixins = {
   data() {
    return {
       w:'word'  
     }  

  },
  methods: {
    // 确定
    confirm () {
      //  this.app.getData(666);
      // 子级派发confirm事件
      this.$emit('confirm', { name: this.name, price: this.price })
    },
    // 取消
    cancel () {
      this.$emit('cancel')
    }
  }
}

export default mixins;
