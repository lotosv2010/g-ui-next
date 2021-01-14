<template>
  <button :class="clazz" :disabled="loading">
    <gui-icon v-if="icon && !loading" :icon="icon" class="icon"></gui-icon>
    <gui-icon v-if="loading" icon="loading" class="icon"></gui-icon>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "GuiButton",
  props: {
    type: {
      type: String,
      default: "primary",
      validator(type: string) {
        const t = new Set(["primary", "info", "warning", "success", "danger"]);
        if (type && !t.has(type)) {
          console.error(`组件的type类型必须为: ${Array.from(t).join(",")}`);
        }
        return true;
      }
    },
    icon: String,
    loading: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: "left"
    },
    size: {
      type: String,
      default: "normal"
    }
  },
  setup(props: any) {
    const clazz = computed(() => [
      `gui-button`,
      `gui-button-${props.type}`,
      `gui-button-${props.position}`,
      `gui-button-${props.size}`
    ]);
    return {
      clazz
    };
  }
});
</script>
