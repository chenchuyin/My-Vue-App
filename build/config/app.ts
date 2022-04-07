import type { App, Plugin } from 'vue'

import dayjs from 'dayjs'

const __APP_INFO: Application = {
    name: __APP__.name,
    version: __APP__.version,
    description: __APP__.description,
    author: __APP__.author,
    email: __APP__.email,
    url: __APP__.url,
    lastBuildTime: dayjs().format('YYYY-MM-DD HH:mm:ss'),
}

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $app: Application
    }
}

export default {
    install(app: App) {
        app.config.globalProperties.$app = __APP_INFO

        const infos: string[] = []
        infos.push(`==================================================================`)
        infos.push(`[App] name: ${__APP_INFO.name}`)
        infos.push(`[App] version: ${__APP_INFO.version}`)
        infos.push(`[App] description: ${__APP_INFO.description}`)
        infos.push(`[App] author: ${__APP_INFO.author}`)
        infos.push(`[App] lastBuildTime: ${__APP_INFO.lastBuildTime}`)
        infos.push(`==================================================================`)
        console.log(infos.join('\n'))
    },
} as Plugin
