import App from './App.vue'
import { createApp } from 'vue'
import { bootstrap } from './core/bootstrap'

import './design/index.less'

bootstrap(createApp(App)).then((app) => {
    app.mount('#app')
})
