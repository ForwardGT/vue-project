import { createApp } from "vue"
import App from "./App.vue"

import router from "./routes/router.js"

import { Icon } from '@iconify/vue';

import "bootstrap/dist/css/bootstrap.css"
import "bootstrap"
import "./assets/main.css"

createApp(App)
.component('iconify', Icon)
.use(router)
.mount("#app")
