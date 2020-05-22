<template>
    <div class="dialog">
        <div class="dialog-box">
            <div class="dialog-content">
                <h3>{{ name }}</h3>
                <p>价格:{{ price }}</p>
                <p>{{ msg }}</p>
            </div>

            <div class="dialog-btns">
                <button @click="confirm">确定</button>
                <button @click="cancel">取消</button>
                <button @click="callParnent">调用父组件方法</button>
            </div>

        </div>
    </div>
</template>

<script>
export default {
  name: 'maskDialog',
  inject: ['msg', 'app'],
  data () {
    return {
      name: 'ipad2',
      price: 20
    }
  },
  methods: {
     fn() {
         console.log('dialog的fn方法');
     },
    // 确定
    confirm () {
       this.app.getData(666);
     // 子级派发confirm事件
      this.$emit('confirm', { name: this.name, price: this.price })
    },
    // 取消
    cancel () {
        this.$emit('cancel')
    },
    callParnent() {
       // console.log('this.$parent:',this.$parent)
       this.$parent.geData({ name:'mac',price:15000 });
    }
  }
}
</script>

<style lang="scss">
 .dialog {
     border:1px solid #ccc;
    position: absolute;
    left: 50%;
    /* right: 0; */
    top: 50%;
    /* bottom: 0; */
    width: 50%;
    height:230px;
    transform: translate(-40%, -50%);
    margin: auto;
    z-index: 99999;
 } 
 .dialog-box div, h3,p {
     padding:10px;
 }


</style>
