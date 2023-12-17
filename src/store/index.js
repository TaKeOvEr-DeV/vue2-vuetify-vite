import Vue from 'vue';
import Vuex from 'vuex';


import { app } from './app.module';
import { alert } from './alert.module';

Vue.use(Vuex);
export const store = new Vuex.Store({
    modules: {
        app, alert
    }
});