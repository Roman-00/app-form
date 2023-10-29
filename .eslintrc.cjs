module.exports = {
    root: true,
    env: {
        browser: true,
        es2020: true
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
    ],
    plugins: [
        'react-refresh'
    ],
    ignorePatterns: [
        'dist',
        '.eslintrc.cjs'
    ],
    parser: '@typescript-eslint/parser',
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'indent': ['error', 4],
        'semi': ['error', 'always'],
        'quotes': ['error', 'single'],
        'key-spacing': [
            'error',
            {
                'align': 'value',
            }
        ],
        'react-refresh/only-export-components': [
            'warn',
            {
                allowConstantExport: true
            },
        ],
    },
}
