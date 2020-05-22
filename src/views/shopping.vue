<template>
    <div class="shopping">
      <header-com title="购物车" />
        购物车页面--{{ count }}
    </div>
</template>

<script>
import HeaderCom from '../components/headercom'
import { mapState } from 'vuex'
export default {
  name: 'shopping',
  computed: {
    ...mapState(['count'])
  },
  components: { HeaderCom }
}
</script>

<style lang="scss">

</style>
