import Button from "./src/index.vue";
import "@/style/button.scss";

Button.install = (app: any) => {
  app.component(Button.name, Button);
};
export default Button;
