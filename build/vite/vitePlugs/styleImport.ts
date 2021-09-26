import { Plugin } from 'vite'

import styleImport from 'vite-plugin-style-import'

const styleImportPlugin = styleImport({
    libs: [
        {
            libraryName: 'ant-design-vue',
            esModule: true,
            resolveStyle: (name) => {
                return `ant-design-vue/es/${name}/style/index`
            },
        },
    ],
}) as Plugin

export function createStyleImoprtPlugin(): Plugin {
    return styleImportPlugin
}
