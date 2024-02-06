export const codeString1 = `export default defineConfig({
  envDir: 'env',
  ......
})`

export const codeString2 = `"scripts": {
  "dev": "vite --mode development",
  "dev:project1": "vite --mode development -- project1",
  "dev:project2": "vite --mode development -- project2",
  ......
}`

export const codeString3 = `const [mode, , project] = process.argv.slice(3)
/**
 * 当运行 npm run dev时，process.argv.slice(3) = ['development']
 * 当运行 npm run dev:project1时， process.argv.slice(3) = [ 'development', '--', 'project2' ]
 */
project &&
  dotenv.config({
    path: \`\${process.cwd()}/env/.env.\${project}.\${mode}\`,
    override: true,
  })
......
`

export const codeString4 = "import './env/config'"

export const codeString5 = `"scripts": {
  "dev": "vite --mode development",
  "dev:project1": "vite --mode development -- project1",
  "dev:project2": "vite --mode development -- project2",
  "dev:project2:stage1": "vite --mode development -- project2 stage1",
  "dev:project2:stage2": "vite --mode development -- project2 stage2",
  ...
},`

export const codeString6 = `/**
* _:[] | [ '配置参数1', '配置参数2', ... ]
* mode: 'development' | 'production' ...
*/
const { _, mode } = minimist(process.argv.slice(2))

!!_.length &&
  dotenv.config({
    path: \`\${process.cwd()}/env/.env.\${_.join('.')}.\${mode}\`,
    override: true,
  })`
