<template>
  <v-app>
    <the-nav-bar />
    <v-main>
      <router-view />
    </v-main>
    <v-footer class="mt-5" padless color="transparent">
      <v-col :class="'text-center'" cols="12">
        {{ new Date().getFullYear() }} —
        {{ "v " + version }}
      </v-col>
    </v-footer>
  </v-app>
</template>
<script>
import Alert from "@/components/common/Alert.vue";
import { mapState } from "vuex";

export default {
  data() {
    return {
      version: import.meta.env.VITE_APP_VERSION,
    };
  },
  methods: {
    showToastAlert(config) {
      let type = config.type;
      let message = config.message;
      let title = config.title;
      let icon = config.icon ?? "mdi mdi-alert-circle";

      const content = {
        component: Alert,
        props: {
          title: title,
          body: message,
        },
      };

      this.$toast[type](content, {
        position: "bottom-right",
        timeout: 3000,
        closeOnClick: true,
        pauseOnFocusLoss: false,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: true,
        closeButton: "button",
        icon: icon,
        rtl: false,
      });
    },
  },
  computed: {
    ...mapState("alert", {
      appAlert: "appAlert",
    }),
  },
  watch: {
    appAlert(newAlert) {
      this.showToastAlert(newAlert);
    },
  },
};
</script>
