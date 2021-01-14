<template>
  <i :class="['iconfont', `icon-${icon}`, 'gui-icon']"></i>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "GuiIcon",
  props: {
    icon: String
  }
});
</script>
