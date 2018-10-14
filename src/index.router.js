import Vue from 'vue';
import Router from 'vue-router';
import home from './routes/home/home.vue';
import docs from './routes/docs/docs.vue';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    component: home
  }, {
    path: '/docs',
    component: docs
  }, {
    path: '/docs/:docId',
    component: docs
  }]
});