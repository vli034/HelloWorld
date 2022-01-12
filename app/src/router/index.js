import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '../components/LoginPage'
import HelloWorld from '../components/HelloWorld'
/* eslint-disable */

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: LoginPage
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld,
      props: true

    }
  ]
})
