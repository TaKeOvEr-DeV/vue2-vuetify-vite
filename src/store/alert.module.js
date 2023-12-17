


const state = {
    appAlert: {
        type: null,
        title: 'Title',
        message: '',

    },
}

const actions = {
    showAlertType({ dispatch }, { type, message }) {
        if (type && message) {

            if (type == "info") {
                dispatch("SHOW_INFO_ALERT", message);
            } else if (type == "success") {
                dispatch("SHOW_SUCCESS_ALERT", message);
            } else if (type == "error") {
                dispatch("SHOW_ERROR_ALERT", message);
            } else if (type == "warning") {
                dispatch("SHOW_WARNING_ALERT", message);
            }
        }
    },

    SHOW_INFO_ALERT({ commit }, message) {
        commit('info', message);
    },
    SHOW_SUCCESS_ALERT({ commit }, message) {
        commit('success', message);
    },
    SHOW_ERROR_ALERT({ commit }, message) {
        commit('error', message);
    },
    SHOW_WARNING_ALERT({ commit }, message) {
        commit('warning', message);
    },
    CLEAR_ALERT({ commit }, message) {
        commit('clear', message);
    },

}

const mutations = {
    info(state, message) {
        state.appAlert = {
            type: 'info',
            title: 'Info:',
            message: message,
            icon: "mdi mdi-information-outline"
        }

    },
    success(state, message) {

        state.appAlert = {
            type: 'success',
            title: 'Success:',
            message: message,
            icon: "mdi mdi-check-circle-outline"
        }

    },
    error(state, message) {

        state.appAlert = {
            type: 'error',
            title: 'Error:',
            message: message,
            icon: "mdi mdi-alert-outline"


        }
    },
    warning(state, message) {
        state.appAlert = {
            type: 'warning',
            title: 'Warning:',
            message: message,
            icon: "mdi mdi-alert-octagon-outline"
        }
    },

}
const getters = {

}

export const alert = {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
};