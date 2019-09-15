import Vue from 'vue'
import App from './App.vue'
import Repository from './repository.js';
import materialize from "../node_modules/materialize-css/dist/js/materialize.js";
import router from './router.js';

Vue.config.productionTip = false
Vue.prototype.$repository = new Repository();

new Vue({
  router,
  materialize,
  render: h => h(App),
}).$mount('#app')
