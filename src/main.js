import { createApp } from "vue"
import App from "./App.vue"

import router from "./routes/router.js"

import "bootstrap/dist/css/bootstrap.css"
import "bootstrap"
import "./assets/main.css"

createApp(App).use(router).mount("#app")
