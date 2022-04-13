import App from "@/App.vue"
import i18n from "@/i18n"
import router from "@/router"
import store from "@/store"
import { createApp } from "vue"
import "@/assets/css/tailwind.css"

createApp(App)
  .use(i18n)
  .use(store)
  .use(router)
  .mount("#app")
