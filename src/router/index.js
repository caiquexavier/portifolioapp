import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import UserData from '@/components/UserData/UserData.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/userData',
      name: 'UserData',
      component: UserData
    }
  ]
})
