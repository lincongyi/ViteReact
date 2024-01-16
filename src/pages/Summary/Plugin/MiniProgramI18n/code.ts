export const codeString1 = `const { src, dest, series } = require('gulp')
const gulpI18nWxml = require('@miniprogram-i18n/gulp-i18n-wxml')
const gulpI18nLocales = require('@miniprogram-i18n/gulp-i18n-locales')

function mergeAndGenerateLocales() {
  return src('miniprogram/i18n/*.json')
    .pipe(gulpI18nLocales({ defaultLocale: 'zh-CN', fallbackLocale: 'zh-CN' }))
    .pipe(dest('dist/i18n/'))
}

function transpileWxml() {
  return src('miniprogram/**/*.wxml')
    .pipe(
      gulpI18nWxml({
        wxsPath: 'miniprogram/i18n/locales.wxs',
      })
    )
    .pipe(dest('dist/'))
}

function copyToDist() {
  return src([
    'miniprogram/**/*',
    '!miniprogram/**/*.wxml',
    '!miniprogram/i18n/*.json',
  ]).pipe(dest('dist/'))
}

exports.default = series(copyToDist, transpileWxml, mergeAndGenerateLocales)`

export const codeString2 = '<view >{{ t("info") }}</view>'

export const codeString3 = `import { I18nPage, getI18nInstance } from '@miniprogram-i18n/core'

I18nPage({
  data: {
    ...
  },
  onLoad() {
    ...
  },
})`

export const codeString4 = `const i18n = getI18nInstance()
console.log(i18n.t('info'))`

export const codeString5 = `import i18nInstance from './miniprogram_npm/miniprogram-i18n-plus/index.js'
import zh_CN from './i18n/zh_CN'
import zh_TW from './i18n/zh_TW'
import en_US from './i18n/en_US'

App<IAppOption>({
  globalData: {
    ...
  },
  onLaunch() {
    ...
    const locales = {
      zh_CN,
      zh_TW,
      en_US,
    }
    i18nInstance.setLocale('zh_TW') // 默认国际化语言包
    i18nInstance.loadTranslations(locales)
  },
})`

export const codeString6 = `import i18nInstance from '@/miniprogram_npm/miniprogram-i18n-plus/index'
onLoad() {
  ...
  i18nInstance.effect(this)
},`

export const codeString7 = '<view>{{ $language.info }}</view>'

export const codeString8 = 'i18nInstance.toggleLanguage("...")'
