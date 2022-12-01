module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'react-app',
        'react-app/jest',
        'prettier',
    ],
    overrides: [],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['prettier', 'react', '@typescript-eslint'],
    rules: {
        'prettier/prettier': 'off',
        'arrow-body-style': 'off',
        'prefer-arrow-callback': 'off',
        'prefer-template': 'warn',
    },
};
