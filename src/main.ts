import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';

import App from './App.vue'
import router from './router'

import './assets/app.css'
//theme
//import "primevue/resources/themes/fluent-light/theme.css";     
//core
//import "primevue/resources/primevue.min.css";
//icons
//import "primeicons/primeicons.css";


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, { ripple: true })

app.mount('#app')
