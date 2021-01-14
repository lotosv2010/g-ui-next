<template>
  <div class="gui-button-group">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, getCurrentInstance } from "vue";

export default defineComponent({
  name: "GuiButtonGroup",
  setup() {
    onMounted(() => {
      const context: any = getCurrentInstance();
      const ele = context.ctx.$el;
      const children = ele.children;
      for (let i = 0; i < children.length; i++) {
        console.assert(children[i].tagName === "BUTTON", "必须子节点是button");
      }
    });
  }
});
</script>
