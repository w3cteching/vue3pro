<template>
    <div>
        购物车页面--{{ count }}
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'shopping',
  computed: {
    ...mapState(['count'])
  }
}
</script>

<style lang="scss">

</style>
