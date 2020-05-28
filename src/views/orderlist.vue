<template>
    <div>
        <h2>订单页面页面</h2>
        <!-- <input type="text" placeholder="输入" v-focus> -->
        <div class="box" v-drag></div>
    </div>
</template>

<script>
export default {
  name: 'orderlist'
}
</script>

<style lang="scss">
.box {
  width:100px;
  height:100px;
  background: #00f;
  border-radius: 50%;
  //position:absolute;
}
</style>
