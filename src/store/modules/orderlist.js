// 订单store

const orderlist = {
  state: {
    orderlist: [
      { id: 1001, goodsname: 'a商品', price: 2000, num: 29}
    ]
  },
  actions: {
    // 获取订单
    getorderList () {
      console.log('获取订单actions')
    },
    // 支付
    pay () {
      console.log('支付actions')
    }
  },
  mutations: {
    GETORDERLIST () {
      console.log('获取订单mutations')
    },
    PAY () {
      console.log('支付mutations')
    }
  }
}
export default orderlist;
