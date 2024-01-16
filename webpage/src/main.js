import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Vant from 'vant';

import "@fortawesome/fontawesome-free/js/all"
import "vant/lib/index.css";

// create app instance
const app = createApp(App);

// use plugins
app.use(router);
app.use(Vant);

// use app instance to
// mount to <div id="app"></div>
app.mount("#app");
