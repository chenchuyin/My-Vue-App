import { App, Plugin } from 'vue'

import { Radio } from 'ant-design-vue'

export default {
    install: (app: App) => {
        app.use(Radio)
    },
} as Plugin
