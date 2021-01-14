import { createApp } from "vue";
import App from "./App.vue";
import Gui from "./packages/index";

const app = createApp(App);
app.use(Gui);
app.mount("#app");
