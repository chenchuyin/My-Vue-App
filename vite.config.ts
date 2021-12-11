// import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { UserConfig, ConfigEnv } from 'vite'
import { createVitePlugins } from './build/vite/vitePlugs/index'

import pkg from './package.json'

const root: string = process.cwd()

const resolvePath = (dir: string): string => resolve(__dirname, '.', dir)

const alias: Array<{ find: string | RegExp; replacement: string }> = [
    // /@/xxxx => src/xxxx
    { find: /\/@\//, replacement: resolvePath('src') + '/' },
    // /#/xxxx => types/xxxx
    { find: /\/#\//, replacement: resolvePath('type') + '/' },
]

const { name, version, author, description } = pkg

export default ({ command, mode }: ConfigEnv): UserConfig => {
    const isbuild = command === 'build'
    // console.log(command, command === 'build')
    return {
        root,
        base: mode === 'production' ? './' : './',
        resolve: {
            alias,
        },
        server: {
            host: true,
            port: 8080,
            strictPort: false,
        },
        build: {
            outDir: 'dist',
            target: 'es2015',
            brotliSize: false,
            chunkSizeWarningLimit: 1000,
            terserOptions: {
                compress: {
                    drop_console: true,
                    drop_debugger: false,
                },
            },
        },
        css: {
            preprocessorOptions: {
                less: {
                    javascriptEnabled: true,
                    // modifyVars
                },
            },
        },
        plugins: createVitePlugins(isbuild),
        define: {
            __APP__: {
                name,
                version,
                description,
                author: author.name,
                email: author.email,
                url: author.url,
            },
            __INTLIFY_PROD_DEVTOOLS__: false,
        },
    }
}
