<template>
    <div class="shopping">
      <header-com title="购物车" />
        购物车页面--{{ count }}
        <Acom></Acom>
        <Bcom></Bcom>
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
  computed: {
    ...mapState(['count'])
  },
  components: { HeaderCom, Acom, Bcom }
}
</script>

<style lang="scss">

</style>
