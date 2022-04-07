import type { Plugin } from 'vite'

// https://github.com/antfu/unplugin-vue-components
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

/**
 * unplugin-vue-components
 * @returns Plugin
 */
export function createAutoComponentPlugin(): Plugin {
    return Components({
        dts: 'types/components.d.ts',
        resolvers: [AntDesignVueResolver({ resolveIcons: true })],
    })
}
