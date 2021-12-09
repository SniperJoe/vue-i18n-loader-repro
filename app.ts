import { createApp } from '@vue/runtime-dom';
import { createI18n } from 'vue-i18n';

import App from './App.vue';
const i18n = createI18n({
    locale: 'en'
});
createApp(App).use(i18n).mount('#app');