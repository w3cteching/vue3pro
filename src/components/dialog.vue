<template>
    <div class="dialog">
        <div class="dialog-box">
            <div class="dialog-content">
                <h3>{{ title }}--{{ w }}</h3>
               <slot name="qrcode"></slot>
               <div class="content">{{ content }}</div>
            </div>

            <div class="dialog-btns">
                <slot name="close"></slot>
                <button @click="confirm">确定</button>
                <button @click="cancel">取消</button>
            </div>

        </div>
    </div>
</template>

<script>
import mixins from '../utils/mixins'
export default {
  name: 'maskDialog',
  mixins: [mixins],
  props: {
    title: {
      type: String,
      default: '默认标题'
    },
    content: {
      type: String,
      default: '弹框内容'
    }

  },
  data () {
    return {
      name: 'ipad2',
      price: 20
    }
  },
  methods: {
    fn () {
      console.log('dialog的fn方法');
    },

    callParnent () {
      // console.log('this.$parent:',this.$parent)
      this.$parent.geData({ name: 'mac', price: 15000 });
    }
  }
}
</script>

<style lang="scss">
 .dialog {
    border:1px solid #ccc;
    position: absolute;
    left:0;
    right:0;
    bottom:0;
    top:0;
    width:60%;
    height:40vh;
    margin: auto;
    z-index: 99999;
 }
 .dialog-box div, h3,p {
     padding:10px;
 }

</style>
