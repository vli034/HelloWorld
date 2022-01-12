import Vue from 'vue'
import Vuex from 'vuex'

/* eslint-disable */
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      count: 0,
      userName: '',
      password: ''
    },
    mutations: {
      increment (state) {
        state.count++
      },

      getUsername (state, name) {
          state.userName = name
          return state.userName
        
      }
    }
  })