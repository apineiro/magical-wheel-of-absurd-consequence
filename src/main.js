import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

import VueKonva from 'vue-konva'

Vue.use(VueKonva)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
