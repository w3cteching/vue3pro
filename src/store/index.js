import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
// 引入state
import state from './state'

// 引入actions
import actions from './actions'

// 引入mutations
import mutations from './mutations';

// 引入getters
import getters from './getters'

// 引入用户的store
import user from './modules/user'

// 引入订单的store
import orderlist from './modules/orderlist'

const moduleFiles = require.context('./modules/', true, /\.js$/);

//console.log('moduleFiles:',moduleFiles.keys())

const modules = moduleFiles.keys().reduce((module, modulePath) => {
    //console.log('modulePath:', modulePath)
   // const moduleName=modulePath.replace(/正则/,'要替换的值')
  
  //获取store名
  const moduleName = modulePath.replace(/\.\/(.+)\.\w+/, '$1')
  //取出当前store所有内容
  const value = moduleFiles(modulePath).default
  
  module[moduleName] = value;

  return module;
  
}, {})


console.log('modules:::::::::::::', modules)

Vue.use(Vuex)

// export default new Vuex.Store({
//   state,
//   actions,
//   mutations,
//   getters,
//   plugins: [createPersistedState()]

// })

export default new Vuex.Store({
  state,
  actions,
  mutations,
  modules

})
