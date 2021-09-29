import vue from '@vitejs/plugin-vue'

import legacy from '@vitejs/plugin-legacy'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite'

import { visualizer } from 'rollup-plugin-visualizer'

import type { Plugin } from 'vite'

import { createHtmlTemplate } from './html'
import { createImageMinPlugin } from './imagemin'
import { createStyleImoprtPlugin } from './styleImport'

export const createVitePlugins = (isBuild: boolean): (Plugin | Plugin[])[] => {
    console.log('build-State', isBuild)
    return [
        vue(),
        vueJsx(),
        legacy(),
        visualizer(),

        createHtmlTemplate(),
        createImageMinPlugin(),
        createStyleImoprtPlugin(),
        // https://github.com/antfu/unplugin-vue-components
        Components({
            // allow auto load markdown components under `./src/components/`
            dirs: ['./src/'],

            extensions: ['vue', 'md'],

            // allow auto import and register components used in markdown
            include: [/\.vue$/, /\.vue\?vue/, /\.md$/],

            dts: './types/component.d.ts',
        }),
    ]
}
