import App from "@/App.vue"
import "@/assets/css/tailwind.css"
import i18n from "@/i18n"
import router from "@/router"
import store from "@/store"
import { createApp } from "vue"

const app = createApp(App)

app.use(i18n)
app.use(store)
app.use(router)
app.mount("#app")
