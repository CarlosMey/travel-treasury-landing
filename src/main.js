// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css';
import Notifications from 'vue-notification';



Vue.config.productionTip = false
// Vue.use(firestorePlugin);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  Notifications,
  components: { App },
  template: '<App/>'
})
