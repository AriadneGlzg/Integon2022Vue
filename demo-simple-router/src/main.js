import Vue from 'vue'
import App from './App.vue'

import router from '../router/index'

Vue.config.productionTip = false

new Vue({ //dentro del objeto vue agregamos el router que importamos de index.js
  router,
  render: h => h(App),
}).$mount('#app')
