import vue from '@vitejs/plugin-vue'
import type { Plugin } from 'vite'

import legacy from '@vitejs/plugin-legacy'
import vueJsx from '@vitejs/plugin-vue-jsx'

import { visualizer } from 'rollup-plugin-visualizer'

import { createHtmlTemplate } from './html'
import { createImageMinPlugin } from './imagemin'
import { createStyleImoprtPlugin } from './styleImport'
import { createAutoComponentPlugin } from './components'

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
        createAutoComponentPlugin(),
    ]
}
