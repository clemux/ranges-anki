import { createApp } from "vue";
import "./styles.css";
import App from "./App.vue";
import { Quasar } from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

createApp(App).use(Quasar, {
    config: {
        dark: true,
    },
    plugins: {},
}).mount("#app");
