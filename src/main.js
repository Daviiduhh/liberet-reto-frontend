import { createApp } from "vue";
import "./style.css";
import router from "./router";
import App from "./App.vue";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import {
  faLocationDot,
  faBars,
  faCartShopping,
  faBorderAll,
  faCircleUser,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faLocationDot,
  faBars,
  faCartShopping,
  faBorderAll,
  faCircleUser,
  faClock,
  faUtensils
);

createApp(App).component("fa", FontAwesomeIcon).use(router).mount("#app");
