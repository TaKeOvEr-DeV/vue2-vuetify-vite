import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import es from 'vuetify/lib/locale/es'
import en from 'vuetify/lib/locale/en'
import Ripple from 'vuetify/lib/directives/ripple';
import '@mdi/font/css/materialdesignicons.css'; // 
import { layoutComponents } from '@/components/layout/index';
import { wrapperComponents } from '@/components/wrappers/index';

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

Vue.use(Vuetify,
    {
        directives: {
            Ripple,
        },
    }
);
Vue.use(layoutComponents);
Vue.use(wrapperComponents);
Vue.use(Toast);

export default new Vuetify({

    icons: {
        iconfont: 'mdi', // default - only for display purposes
    },
    lang: {
        locales: { es, en },
        current: 'es',
    },
    treeShake: true,
});