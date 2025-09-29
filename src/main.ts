import './assets/main.css'

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import PrimeVue from "primevue/config";

// ثيم جاهز (Aura مثلًا)
import Aura from "@primeuix/themes/aura";
// أيقونات Prime
import "primeicons/primeicons.css";

import i18n from "@/i18n";

const app = createApp(App);

app.use(router);
app.use(createPinia());

// تفعيل PrimeVue مع الثيم
app.use(PrimeVue, { theme: { preset: Aura } });

app.use(i18n);

app.mount("#app");
