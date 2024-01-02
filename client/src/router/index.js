import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import JitsiTest from '@/components/JitsiTest'
import Meeting from '@/components/Meeting'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/meet', name: 'Meeting', component: Meeting },
    { path: '/jitsitest', name: 'JitsiTest', component: JitsiTest },
    { path: '/about', name: 'About', component: About }
  ]
})
