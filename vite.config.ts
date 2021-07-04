import vue from '@vitejs/plugin-vue'
import { UserConfig, ConfigEnv } from 'vite'
import { resolve } from 'path'

const root: string = process.cwd()

const resolvePath = (dir: string): any => resolve(__dirname, '.', dir)

const alias: Array<{ find: string | RegExp; replacement: string }> = [
    { find: '/@', replacement: resolvePath('src/') },
    { find: '/@/components', replacement: resolvePath('src/components/') },
    { find: '/@/views', replacement: resolvePath('src/views/') },
    { find: '/@/utils', replacement: resolvePath('src/utils/') },
]

export default ({ mode }: ConfigEnv): UserConfig => {
    return {
        root,
        envDir: resolvePath('config'),
        base: mode === 'production' ? './' : './',
        plugins: [vue()],
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
            rollupOptions: {
                output: {
                    entryFileNames: 'entry/entrance.js',
                    chunkFileNames: 'chunk/chunk.js',
                    assetFileNames: 'static/asset.js',
                },
            },
            brotliSize: false,
            // 消除打包大小超过500kb警告
            chunkSizeWarningLimit: 1000,
            terserOptions: {
                compress: {
                    drop_console: true,
                    drop_debugger: false,
                },
            },
        },
        define: {
            __APP__: {
                name: 'chenchuyin',
            },
            __INTLIFY_PROD_DEVTOOLS__: false,
        },
    }
}
