module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'standard'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    indent: [2, 2],
    semi: [2, 'never'],
    quotes: [1, 'single'],
    eqeqeq: 2,
    'arrow-spacing': [2, { before: true, after: true }],
    'no-trailing-spaces': 2,
    'no-multi-spaces': 2,
    'comma-spacing': [2, { before: false, after: true }],
    'no-console': 1,
    'keyword-spacing': [2, { after: true }],
    'key-spacing': [2, { beforeColon: false }],
    'no-multiple-empty-lines': [2, { max: 2 }],
    'no-useless-escape': 0,
    'comma-dangle': 0,
  },
}
