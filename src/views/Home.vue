<template>
  <v-container fluid>
    <v-row justify="center" class="mt-10">
      <v-col cols="3">
        <the-title title="Tools" />
        <v-sheet>
          <v-list-item link>
            <v-list-item-avatar>
              <v-icon>mdi-microsoft-visual-studio-code </v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title> IDE : VSCode </v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <a href="https://code.visualstudio.com/docs" target="_blank">
                <v-icon> mdi-open-in-new </v-icon>
              </a>
            </v-list-item-action>
          </v-list-item>
          <v-list-item link>
            <v-list-item-avatar>
              <v-icon>mdi-puzzle </v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title> Extension : Vetur</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <a href="https://vuejs.github.io/vetur/" target="_blank">
                <v-icon> mdi-open-in-new </v-icon>
              </a>
            </v-list-item-action>
          </v-list-item>
        </v-sheet>
      </v-col>
      <v-col cols="3">
        <the-title title="Plugins" />
        <v-sheet>
          <v-list-item link>
            <v-list-item-avatar>
              <v-icon>mdi-toy-brick-plus </v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title> @vitejs/plugin-vue2 </v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <a
                href="https://www.npmjs.com/package/@vitejs/plugin-vue2"
                target="_blank"
              >
                <v-icon> mdi-open-in-new </v-icon>
              </a>
            </v-list-item-action>
          </v-list-item>
          <v-list-item link>
            <v-list-item-avatar>
              <v-icon>mdi-toy-brick-plus </v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title> unplugin-vue-components </v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <a
                href="https://www.npmjs.com/package/unplugin-vue-components"
                target="_blank"
              >
                <v-icon> mdi-open-in-new </v-icon>
              </a>
            </v-list-item-action>
          </v-list-item>
        </v-sheet>
      </v-col>
      <v-col cols="3">
        <the-title title="Vite Config - build.rollupOptions" />
        <v-sheet>
          <v-list-item link>
            <v-list-item-avatar>
              <v-icon>mdi-image </v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title> assetFileNames </v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <a
                href="https://rollupjs.org/configuration-options/#output-assetfilenames"
                target="_blank"
              >
                <v-icon> mdi-open-in-new </v-icon>
              </a>
            </v-list-item-action>
          </v-list-item>
          <v-list-item link>
            <v-list-item-avatar>
              <v-icon>mdi-file-cog</v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title> chunkFileNames </v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <a
                href="https://rollupjs.org/configuration-options/#output-chunkfilenames"
                target="_blank"
              >
                <v-icon> mdi-open-in-new </v-icon>
              </a>
            </v-list-item-action>
          </v-list-item>
          <v-list-item link>
            <v-list-item-avatar>
              <v-icon>mdi-file-document-arrow-right-outline </v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title> entryFileNames </v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <a
                href="https://rollupjs.org/configuration-options/#output-entryfilenames"
                target="_blank"
              >
                <v-icon> mdi-open-in-new </v-icon>
              </a>
            </v-list-item-action>
          </v-list-item>
        </v-sheet>
      </v-col>
    </v-row>

    <w-card>
      <v-row justify="center">
        <v-col cols="8">
          <the-title
            title="Functional example with vue-toastification + vuex"
            class="text-center"
          />
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="2">
          <v-btn :disabled="!valid" @click="showAlert('info')"
            >Alert Info</v-btn
          >
        </v-col>
        <v-col cols="2">
          <v-btn :disabled="!valid" @click="showAlert('success')"
            >Alert Succes</v-btn
          >
        </v-col>
        <v-col cols="2">
          <v-btn :disabled="!valid" @click="showAlert('error')"
            >Alert Error</v-btn
          >
        </v-col>
        <v-col cols="2">
          <v-btn :disabled="!valid" @click="showAlert('warning')"
            >Alert Warning</v-btn
          >
        </v-col>
        <v-col cols="8">
          <v-form v-model="valid">
            <v-text-field
              v-model="message"
              outlined
              label="Text Alert *"
              :rules="[rules.required]"
            />
          </v-form>
        </v-col>
      </v-row>
    </w-card>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      message: "",
      valid: false,
      rules: {
        required: (val) => (val && !!val.trim()) || "Required.",
      },
    };
  },
  methods: {
    ...mapActions("alert", ["showAlertType"]),
    showAlert(type = "info") {
      this.showAlertType({
        type,
        message: this.message,
      });
    },
  },
};
</script>