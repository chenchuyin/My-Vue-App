// import vue from '@vitejs/plugin-vue'

import { UserConfig, ConfigEnv } from 'vite'
import { resolve } from 'path'
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
    console.log(command, command === 'build')
    return {
        root,
        base: mode === 'production' ? './' : './',
        resolve: {
            alias,
        },
        server: {
            open: true,
            host: true,
            port: 8080,
            strictPort: false,
        },
        build: {
            outDir: 'dist',
            target: 'es2015',
            // rollupOptions: {
            //     output: {
            //         // entryFileNames: 'entry/entrance.js',
            //         // chunkFileNames: 'chunk/chunk.js',
            //         // assetFileNames: 'static/asset.js',
            //     },
            // },
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
                name: name,
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
