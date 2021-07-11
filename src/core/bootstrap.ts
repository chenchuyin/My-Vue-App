import { App } from 'vue'

import antd from './ant'
import APPINFO from '../../build/config/app'

if (import.meta.env.DEV) {
    import('ant-design-vue/dist/antd.less')
}

export async function bootstrap(app: App): Promise<App> {
    return new Promise((resolve) => {
        app.use(antd)
        app.use(APPINFO)

        resolve(app)
    })
}
