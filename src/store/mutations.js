const mutations = {
  INCREMENT (state, value) {
    console.log('mutations中的INCREMENT', state);
    state.count++
  },
  DECREMENT (state, value) {
    state.count--
  }
}

export default mutations
