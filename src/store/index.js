import Vue from 'vue'
import Vuex from 'vuex'
import Props from './modules/props'

import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: { Props },
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  plugins: [
    createPersistedState({
      paths: [],
      storage: window.sessionStorage
    })
  ]
})
