import { Plugin } from 'vite'
import { minifyHtml, injectHtml } from 'vite-plugin-html'

export const createHtmlTemplate = (): Plugin[] => {
    return [
        minifyHtml(),
        injectHtml({
            injectData: {
                title: '楚门的世界',
            },
        }),
    ]
}
