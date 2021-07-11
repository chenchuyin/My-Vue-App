import vue from '@vitejs/plugin-vue'

import legacy from '@vitejs/plugin-legacy'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { visualizer } from 'rollup-plugin-visualizer'

import type { Plugin } from 'vite'

import { createHtmlTemplate } from './html'
import { createImageMinPlugin } from './imagemin'
import { createStyleImoprtPlugin } from './styleImport'

const vitePlugins: Plugin[] = [vue(), vueJsx()]

export const createVitePlugins = (isBuild: boolean) => {
    return [
        ...vitePlugins,
        createStyleImoprtPlugin(isBuild),
        createHtmlTemplate(),
        isBuild && legacy(),
        isBuild && visualizer(),
        isBuild && createImageMinPlugin(),
    ]
}
