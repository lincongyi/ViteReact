function getBulidTime () {
  return {
    name: 'get-bulid-time',
    enforce: 'pre||post', // 插件执行的顺序，pre表示在alias之后，在vite的核心插件之前，post在核心插件之后
    apply: 'build', // 值可以是 build 或 serve 亦可以是一个函数，指明它们仅在 build 或 serve 模式时调用；如果不增加这个属性就会在run dev的时候也会输出buildStart中的信息
    buildStart () {
      console.time('time')
    },
    closeBundle () {
      // 在服务器关闭时被调用
      console.timeEnd('time')
      console.log('bulid结束')
    },
  }
}
module.exports = getBulidTime
