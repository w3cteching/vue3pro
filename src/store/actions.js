const actions = {
  // 定义一些（或异步）操作方法
  increment ({ commit }, value) {
    // console.log('加的方法', value)
    commit('INCREMENT');
  },
    decrement({ commit }) {
      console.log('减的方法')
      commit('DECREMENT');
  }
}

export default actions
