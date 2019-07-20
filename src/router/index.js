import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import Bits from '../components/computing/Bits.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: HelloWorld },
    { path: '/bits', component: Bits }
  ]
}) 
