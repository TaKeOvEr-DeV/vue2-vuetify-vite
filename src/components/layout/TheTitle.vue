<template>
  <v-sheet
    :class="[
      {
        'py-2': !small,
        'text-caption py-1': small,
      },
      lightenLevel,
    ]"
    class="px-2"
    :color="background"
    :rounded="rounded"
  >
    <span :class="classTitle + colorTextTransform">{{ title }} </span>
  </v-sheet>
</template>
<script>
export default {
  props: {
    title: { type: String, default: "" },
    classTitle: { type: String, default: "" },
    background: { type: String, default: "primary " },
    colorText: { type: String, default: "white" },
    small: { type: Boolean, default: false },
    lighten: { type: Number, default: 1 },
    rounded: { type: [String], default: "" },
  },
  computed: {
    lightenLevel() {
      return `lighten-${this.lighten}`;
    },
    colorTextTransform() {
      return `${this.colorText}--text`;
    },
  },
};
</script>