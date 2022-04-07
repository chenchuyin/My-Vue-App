import { App, Plugin } from 'vue'

import { Radio } from 'ant-design-vue'

import router from '/@/router/index'

export default {
    install: (app: App) => {
        app.use(Radio)
        app.use(router)
    },
} as Plugin
