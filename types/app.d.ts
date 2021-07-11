/**
 * app description
 */

type Application = {
    /**
     * 项目名称
     */
    name: string

    /**
     * 版本号
     */
    version: string

    /**
     * 项目描述信息
     */
    description: string

    /**
     * 作者
     */
    author: string

    /**
     * 邮箱
     */
    email: string

    /**
     *  地址
     */

    url: string

    /**
     * 最后构建时间
     */
    lastBuildTime: string
}

declare const __APP__: Application
