export const codeString1 = `module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}`

export const codeString2 = `"scripts": {
  ......
  "lint:fix": "eslint . --ext js,ts,tsx,cjs --fix", // 遍历文件并格式化处理
  "lint:lint-staged": "lint-staged", // 自定义一个lint-staged规则
},
"lint-staged": {
  "*.{js,ts,tsx,cjs}": [ // 暂存区中需要校验的文件格式
    "npm run lint:fix"
  ]
},
......`

export const codeString3 = `module.exports = {
  extends: ['@commitlint/config-conventional'],
}`

export const codeString4 = `feat: xxxxxxxxxx...
BREAKING CHANGE: enviroment variables now take precedence over cofig files.`
