// @ts-check

module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2020,
        sourceType: 'module',
        jsxPragma: '',
        ecmaFeatures: {
            jsx: true,
        },
    },
    extends: [
        'prettier',
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    rules: {
        semi: 'off',
        'prettier/prettier': 'error',
        '@typescript-eslint/no-explicit-any': 0,
        'no-alert': 'error',
        'vue/html-self-closing': 0,
        'vue/html-indent': ['error', 4],
        endOfLine: 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        'vue/max-attributes-per-line': [
            2,
            {
                singleline: 120,
                multiline: {
                    max: 80,
                    allowFirstLine: true,
                },
            },
        ],
        'vue/singleline-html-element-content-newline': 0,
    },
}
