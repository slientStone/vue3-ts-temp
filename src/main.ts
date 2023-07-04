import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

// 引入公共资源 （公用样式， 手机端适配公用js,  手机端点击300ms适配fastclick）
import "@/assets/css/reset.css";
import "@/assets/css/border.css";
import "@/assets/js/common.js";

createApp(App).use(store).use(router).mount("#app");