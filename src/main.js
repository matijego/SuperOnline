import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

Vue.config.productionTip = false

import {rtdbPlugin as VueFire} from 'vuefire'
Vue.use(VueFire)


new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
