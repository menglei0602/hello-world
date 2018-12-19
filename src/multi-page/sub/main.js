import Vue from 'vue'
import SubPage from './SubPage.vue'
import router from '@/router'
import store from '@/store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(SubPage)
}).$mount('#app')
