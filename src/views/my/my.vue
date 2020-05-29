<template>
    <div>
       <h2>我的页面</h2>
       <!-- 默认的二级路由 -->
       <!-- <router-view></router-view> -->

    <router-view name="my_banlance"></router-view>
    <router-view name="my_order"></router-view>
       
        <!-- <tree-com
            :title="treeObj.name"
            :list="treeObj.children"
            :depth="0">
        </tree-com> -->
        <!-- <div class="links">
         <ul>
            <router-link to="/my/setting" tag='li'>我的设置</router-link>
            <router-link to="/my/head" tag='li'>我的头像</router-link>
            <router-link to="/my/banlance" tag='li'>我的余额</router-link>
         </ul>
        </div> -->
    </div>
</template>

<script>
// import TreeCom from '../components/tree'

// 模拟一个树形结构【注意：应该是后台返回的数据】
const treeObj = {
  name: '电子产品',
  children: [
    {
      name: '电视',
      children: [
        {
          name: 'philips',
          children: [
            { name: 'philips-A' },
            { name: 'philips-B' }
          ]
        },
        { name: 'Tcl' },
        { name: '海信' }
      ]
    },
    {
      name: '电脑',
      children: [
        { name: 'Mac Air' },
        { name: 'Mac Pro' },
        {
          name: 'ThinkPad',
          children: [
            { 
              name: 'ThinkPad-A',
              children:[
                {name:'ThinkPad-A-A'},
                {name:'ThinkPad-A-B'},
                {name:'ThinkPad-A-C'},
            ] },
            { name: 'ThinkPad-B' }
          ]
        }
      ]
    },
    {
      name: '可穿戴设置',
      children: [
        {
          name: '手表',
          children: [
            { name: 'iWatch' },
            { name: '小米watch' }
          ]
        }
      ]
    }

  ]

}
export default {
  name: 'my',
  data () {
    return {
      treeObj
    }
  },
  created () { },
  watch:{
    $route(to,from) {
      console.log('watch:',to.params.type)
    }
  },
 // components: { TreeCom }
}
</script>

<style lang="scss">

</style>
