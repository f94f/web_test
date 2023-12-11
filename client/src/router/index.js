import Vue from 'vue'
import Router from 'vue-router'
import JitsiTest from '@/components/JitsiTest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'JitsiTest',
      component: JitsiTest
    }
  ]
})
