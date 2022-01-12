import Vue from 'vue'
import Vuex from 'vuex'

/* eslint-disable */
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
      count: 0,
      username: '',
      password: '', 

    },
    mutations: {
  
      getUsername(state, uname){
        state.username = uname
        console.log('store.js username state', state.username)
      },
      getPassword(state, uPass){
        state.password = uPass
        console.log('store.js password state', state.password)
      }
    }
  })

  export default store