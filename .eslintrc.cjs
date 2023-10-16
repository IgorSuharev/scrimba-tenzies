module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'semi': ['error'],
    'no-constructor-return': ['error'],
    'array-callback-return': ['error'],
    'no-await-in-loop': ['error'],
    'no-constant-binary-expression': ['error'],
    'no-duplicate-imports': ['error'],

    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/jsx-handler-names': ['error', {
      "eventHandlerPrefix": 'handle',
      "eventHandlerPropPrefix": 'on',
      "checkLocalVariables": false,
      "checkInlineFunction": false
    }]
  },
}
