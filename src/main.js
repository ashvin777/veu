/* eslint-disable */

import Vue from 'vue'

import App from './index.app.vue'
import router from './index.router';

//styles
import './index.scss';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
