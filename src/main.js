import Vue from 'vue'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'
import '../node_modules/material-icons/iconfont/material-icons.css'
// import BootsrapVue from 'bootstrap-vue'
//not using bootstrap at this moment
import App from './App.vue'

Vue.use(Vuesax)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
