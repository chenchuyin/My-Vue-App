import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import type { Plugin } from 'vite'

import { createStyleImoprtPlugin } from './styleImport'

const vitePlugins: Plugin[] = [vue(), vueJsx()]

export const createVitePlugins = (isBuild: boolean) => {
    return [...vitePlugins, createStyleImoprtPlugin(isBuild)]
}
