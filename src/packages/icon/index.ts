import Icon from "./src/index.vue";
import "@/style/icon.scss";
import "@/style/font/iconfont.css";
Icon.install = (app: any) => {
  app.component(Icon.name, Icon);
};
export default Icon;
