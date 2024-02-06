import dotenv from 'dotenv'
import minimist from 'minimist'

// console.log('process.argv', process.argv.slice(3)) // [ 'development', '--', 'project2' ]

// const [mode, , project] = process.argv.slice(3)
/**
 * _:[] | [ '配置参数1', '配置参数2', ... ]
 * mode: 'development' | 'production' ...
 */
const { _, mode } = minimist(process.argv.slice(2))

console.log('____', _)
console.log('mode', mode)

/**
 * 当运行 npm run dev时，process.argv.slice(3) = ['development']
 * 当运行 npm run dev:project1时， process.argv.slice(3) = [ 'development', '--', 'project2' ]
 */
// project &&
//   dotenv.config({
//     path: `${process.cwd()}/env/.env.${project}.${mode}`,
//     override: true,
//   })

!!_.length &&
  dotenv.config({
    path: `${process.cwd()}/env/.env.${_.join('.')}.${mode}`,
    override: true,
  })
