import Vue from 'vue';

import { VCard, VTextField } from 'vuetify/lib';

const wrappersList = [
    Vue.component('WCard', {
        extends: VCard,
        props: {
            elevation: {
                type: [Number, String],
                default: 0
            },
            rounded: {
                type: String,
                default: "xl"
            },
        }
    }),
    Vue.component('WTextField', {
        extends: VTextField,
        props: {
            outlined: {
                type: Boolean,
                default: true
            },
            dense: {
                type: Boolean,
                default: true,
            },
        }
    }),

];

export const wrapperComponents = {
    wrappersList
}
