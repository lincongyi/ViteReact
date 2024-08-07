export const codeString1 = 'npx browserslist "defaults"'

export const codeString2 = 'npx browserslist "> 5%"'

export const codeString3 = 'npx browserslist "> 5% in alt-AS"'

export const codeString4 = 'npx browserslist "last 2 versions"'

export const codeString5 = 'npx browserslist "last 2 chrome versions"'

export const codeString6 = 'npx browserslist "dead"'

export const codeString7 = 'npx browserslist "ios 7"'

export const codeString8 = 'npx browserslist "chrome > 100"'

export const codeString9 = 'npx browserslist "supports es6-module"'

export const codeString10 =
  'npx browserslist "Chrome 58-65 and supports es6-module"'

export const codeString11 = `npx browserslist "Chrome > 100 or Edge > 100"

npx browserslist "Chrome > 100 , Edge > 100"`

export const codeString12 =
  'npx browserslist "Chrome 58-65 and not supports es6-module"'

export const codeString13 = `module.exports = [
  'last 1 version',
  '> 1%',
  'ie 10'
]`

export const codeString14 = `Chrome > 100
Edge > 100`

export const codeString15 = `{
  ......
  "browserslist": [
    "last 1 version",
    "> 1%",
    "maintained node versions",
    "not dead"
  ]
}`

export const codeString16 = `[production]
> 1%
ie 11

[development]
last 1 chrome version
last 1 ff version
`

export const codeString17 = `{
  ......
  "browserslist": {
    "production": [
      "> 1%",
      "ie 10"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version"
    ]
  }
}`
