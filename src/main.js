import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faClock } from "@fortawesome/free-regular-svg-icons"
import { faLocationDot, faBars, faCartShopping, faBorderAll, faCircleUser } from "@fortawesome/free-solid-svg-icons";

library.add(faLocationDot, faBars, faCartShopping, faBorderAll, faCircleUser, faClock);

createApp(App).component("fa", FontAwesomeIcon).mount("#app");
