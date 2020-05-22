<template>
    <div class="slide">
        <ul>
            <li v-for="(item,index) in list" :key="index">
                <span>{{ item }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'slide',
    data() {
        return {
            list:['个人中心','商品分类','收藏管理','设置']
        }
    }
}
</script>

<style lang="scss">
.slide {
    position: absolute;
    width:90vw;
    height:90vh;
    background: #00f;
    z-index:10;
    padding-top:90px;
    padding-left: 20px;

    li {
        line-height: 50px;
    }
}  


</style>