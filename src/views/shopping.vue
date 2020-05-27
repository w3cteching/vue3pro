<template>
    <div class="shopping">
      <header-com title="购物车" />
      <Acom 
          :title="title" 
          :name="name" 
          :price="price"
          @go="getEvent"
      ></Acom>
    </div>
</template>

<script>
//引入A,B组件
import Acom from './Acom'
import Bcom from './Bcom'
import HeaderCom from '../components/headercom'
import { mapState } from 'vuex'
export default {
  name: 'shopping',
  data() {
   return {
      title:'购物车标题',
      name:'ipad2',
      price:2000
   }

  },
  computed: {
    ...mapState(['count'])
  },
  methods:{
    getEvent (v) {
      console.log('v:',v)
    }
  },
  components: { HeaderCom, Acom, Bcom }
}
</script>

<style lang="scss">

</style>
