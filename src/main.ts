import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css' 

import App from './App.vue'

const vuitify = createVuetify({
    icons: {
        defaultSet: 'mdi',
      },
})
const pinia = createPinia()
const app = createApp(App)

app
    .use(vuitify)
    .use(pinia)
    .mount('#app')
