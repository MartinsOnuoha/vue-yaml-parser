import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faRoute } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import './assets/tailwind.css';
import './assets/app.scss';

library.add(faRoute);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
