import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createI18n } from "vue-i18n";
import {getItem, setItem, removeItem} from "@/utils/storage";
import store from './store';
import {createPinia} from "pinia";

import './assets/app.css';

import messages from "@intlify/unplugin-vue-i18n/messages";

const selectedLang = getItem('language');

const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: selectedLang ?? "en",
    fallbackLocale: "en",
    availableLocales: ["en", "cn"],
    messages: messages,
    // warnHtmlInMessage
});

export const pinia = createPinia();

const app = createApp(App)

app.use(pinia);
app.use(router);
app.use(i18n);

app.mount('#app')
