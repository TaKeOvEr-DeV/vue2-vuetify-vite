import Vue from "vue";
import TheNavBar from './TheNavBar.vue';
import TheTitle from './TheTitle.vue'


const componentsList = [
    Vue.component("TheNavBar", TheNavBar),
    Vue.component("TheTitle", TheTitle),
];
export const layoutComponents = {
    componentsList
}
