Vue.config.productionTip = false
Vue.config.silent = true
Vue.config.devtools = false

import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import { store } from './store';
import "./sass/custom.scss";


new Vue({
    vuetify,
    router,
    store,
    render: h => h(App)
}).$mount('#app');
