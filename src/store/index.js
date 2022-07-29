import Vue from 'vue'
import Vuex from 'vuex'

import todosList from './todosList'
import replaceColor from './replaceColor'
import createVuexPersisted from 'vuex-persistedstate'

Vue.use(Vuex)



export default new Vuex.Store({
  state: {
  },
  getters: {
    ReplaceColor(state){

      return state.replaceColor.ReplaceColorA
    },
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    todosList,
    replaceColor
  },
  plugins: [
    createVuexPersisted({})
  ]
})
