import Vue from 'vue';

import App from './index.app.vue';
import router from './index.router';

//styles
import 'github-markdown-css';
import './index.scss';

Vue.config.productionTip = false;
document.title = 'Veu Design - Vue.js UI Framework';

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
