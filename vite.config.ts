// import type { UserConfig, ConfigEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
// import { resolve } from 'path'

// const resolvePath = (path: string) => resolve(path)

// console.log(resolve)

// https://vitejs.dev/config/
export default () => {
    return {
        plugins: [vue()],
    }
}
