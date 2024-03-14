import { createApp } from 'vue'
import App from './App.vue'
import store from '@/store'
import router from "@/router";

import 'vuetify/styles'
import 'vuetify/dist/vuetify.min.css'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import "@/assets/styles/main.css"

const vuetify= createVuetify({
    components,
    directives,
})

const app = createApp(App)

app.use(router)
app.use(store)
app.use(vuetify)
app.mount('#app')
