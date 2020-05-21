import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
// 引入state
import state from './state'

// 引入actions
import actions from './actions'

// 引入mutations
import mutations from './mutations';

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  actions,
  mutations,
  plugins: [createPersistedState()]

})
