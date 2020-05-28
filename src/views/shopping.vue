<!--
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

-->

<script>
// 引入A,B组件
import Acom from './Acom'
import Bcom from './Bcom'
import HeaderCom from '../components/headercom'
import { mapState } from 'vuex'
export default {
  name: 'shopping',
  data () {
    return {
      title: '购物车标题',
      name: 'ipad2',
      price: 2000,
      list: [
        { id: 1001, name: "alice" },
        { id: 1002, name: "jack" },
        { id: 1003, name: "test" },
        { id: 1004, name: "meimei" }
      ]
    }
  },
  computed: {
    ...mapState(['count'])
  },
  methods: {
    play() {
      console.log('play')
    },
    getEvent (v) {
      console.log('v:')
    }
  },
  components: { HeaderCom, Acom, Bcom },
  render () {
    return (<div className='shopping'>
      <h2>商品列表</h2>
      <ul>
        {
          this.list.map(item=>{
            return  <li onClick={ this.play.bind(this)  }>{item.name}</li>
          })

        }
        
      </ul>

    </div>)
  }
}
</script>

<style lang="scss">

</style>
