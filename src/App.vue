<template>
  <div>APP</div>
  <ExButton />
  <ExButtonGroup />
  <ExIcon />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ExButton from "../examples/button.vue";
import ExIcon from "../examples/icon.vue";
import ExButtonGroup from "../examples/button-group.vue";

@Options({
  components: {
    ExButton,
    ExIcon,
    ExButtonGroup
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
