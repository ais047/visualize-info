import Vue from 'vue'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'
import '../node_modules/material-icons/iconfont/material-icons.css'
import router from './router'

import App from './App.vue'

Vue.use(Vuesax)
Vue.config.productionTip = false

new Vue({
  router,
  template: '<App />',
  components: { App },
  render: h => h(App)
}).$mount('#app')
