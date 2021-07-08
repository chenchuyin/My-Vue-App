import { createApp } from 'vue'
import App from './App.vue'
import { bootstrap } from './core/bootstrap'

bootstrap(createApp(App)).then((app) => {
    app.mount('#app')
})
