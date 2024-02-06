export const codeString1 = `// 基础类型

const isBoolean: boolean = false // Boolean类型

const isNumber: number = 20 // Number类型

const isString: string = 'hello world' // String类型

// 数组的三种定义方法
const isArray1: number[] = [1, 2, 3] // 常用
const isArray2: Array<string> = ['a', 'b', 'c']
type TTupleArray = {
  [I in keyof [string, number]]: [string, number][I]
}
const isArray3: TTupleArray = ['100', 100]

const arr1: string[] = ['a', 'b']
const arr2: number[] = [1, 2, 3]
const arr3: (string | number)[] = [1, 2, 3, 'a', 'b']
let arr4: string[] | number[] = ['a', 'b', 'c']
arr4 = [1, 2, 3]

let isAny: any = 30 // Any类型，相当于对该变量关闭了ts的检测
isAny = 'good'

const tuple: [number, string, number] = [1, 'zhangmazi', 100] // Tuple元组类型
console.log(tuple)

const myNull: null = null // Null类型

// Void类型，常用于函数，表示没有任何类型返回
const fn = (): void => {
  console.log('hello ts')
}
`

export const codeString2 = `// 枚举

enum Color {
  RED = 2,
  PINK,
  BLUE
}

const red: Color = Color.RED
console.log(Color) // { '2': 'RED', '3': 'PINK', '4': 'BLUE', RED: 2, PINK: 3, BLUE: 4 }

enum Direction {
  NORTH = 'NORTH',
  SOUTH = 'SOUTH',
  EAST = 'EAST',
  WEST = 'WEST'
}
console.log(Direction) // { NORTH: 'NORTH', SOUTH: 'SOUTH', EAST: 'EAST', WEST: 'WEST' }

enum Gender {
  MALE,
  FEMALE
}
console.log(Gender) // { '0': 'MALE', '1': 'FEMALE', MALE: 0, FEMALE: 1 }

const person1: {
  name: string
  gender: Gender
} = { name: 'cy', gender: Gender.MALE }
console.log(person1) // { name: 'cy', gender: 0 }

// 常量枚举（const + enum ...），变量在编译后会进行删除
const enum EAnimalType {
  dog = 'dog',
  cat = 'cat',
  bird = 'bird'
}
console.log(EAnimalType.dog)`

export const codeString3 = `// 1.“尖括号” 语法（不常用）
const str = 'hello world'
const strLength = (<string>str).length
console.log(strLength)

// 2.as 语法
const num = 1
const numPlus = ++(num as number)
const num2String = (num as number).toFixed(2)
console.log(numPlus)
console.log(num2String)

let myLink = 'www.sina.com' as const
// myLink = 'www.qq.com' // 变量不可变（immutability）`

export const codeString4 = `// 联合类型

const sayHi = (name: string | undefined | null): void => {
  const myName: string = name || 'cy'
  console.log(\`hello \${myName}\`)
}
sayHi('Ackerman')

interface Motorcycle {
  vType: 'motorcycle'
  make: number
}

interface Car {
  vType: 'car'
  brand: string
}

interface Truck {
  vType: 'truck'
  capacity: number
  nation: string
}

type Vehicle = Motorcycle | Car | Truck

const myVehicle: Vehicle = {
  vType: 'car',
  brand: 'Porsche'
  // nation: 'Germany' // 由于有brand字段，myVehicle属于Car类型
}

type A = 1 | 2 | 3
type B = 1 | 3

type C = B extends A ? true : false // true
/*
  联合类型+extends：1 | 3 extends 1 | 2 | 3
  相当于把 1 | 3 拆分成 1 extends 1 | 2 | 3 和 2 extends 1 | 2 | 3
  两个表达式的结果都是true，联合起来则返回true
*/

type D = {
  name: string
  age: number
}
type E = {
  name: string
  age: number
  gender: boolean
}
type F = E extends D ? true : false // true`

export const codeString5 = `// 交叉类型

interface Person {
  name: string
  age: number
  id?: string
}

interface Employee {
  company: string
  level: number
}

type staffType = Person & Employee

// 特殊场景
type User = {
  name: string
  id: number
} & Person

const user: User = {
  name: 'stephy',
  age: 20,
  id: 100 as never
  // id: 100 // id属性为never类型，由于string和number的交集是never。只能强制断言id是never类型
}

type F = (n: number) => void
type G = ((n: string) => void) & F
const g: G = n => console.log(n) // n:string | number
// 类型属性是函数的话，他们的交集是函数参数的并集`

export const codeString6 = `enum Gender {
  MALE,
  FEMALE
}

class User {
  name: string
  protected age: number
  private isMarried: boolean = false
  // 在构造函数的参数中加上public，可以直接在类中添加该属性，不加public，只是单纯的参数
  constructor (name: string, age: number, public gender: Gender) {
    this.name = name
    this.age = age
  }
  getUser () {
    return \`\${this.name} is \${this.age}'s old\`
  }
  protected getGender () {
    return \`\${this.name}'s gender is \${Gender[this.gender]}\`
  }
  getUserGender () {
    return this.getGender()
  }
  private getIsMarried () {
    return \`\${this.name} is \${this.isMarried ? 'not' : ''} married\`
  }
}

const user1 = new User('zoe', 18, Gender.FEMALE)
const user2 = new User('danny', 20, Gender.MALE)

const users: User[] = [] // 定义成User类型的数组，只能push进User类实例化的对象
users.push(user1, user2)
console.log(users)

/*
  方法访问
*/
// 实例对象无法直接调用protected方法
// console.log(user1.getGender());
// 只能通过调用public方法去访问protected方法
// console.log(user1.getUserGender());

class Employee extends User {
  employId: number
  constructor (name: string, age: number, gender: Gender, employId: number) {
    super(name, age, gender)
    this.employId = employId
  }
  getEmployeeGender () {
    return \`Employee \${this.getGender()}\`
  }
}

const employee1 = new Employee('jozy', 22, Gender.FEMALE, 101)
console.log(employee1)
// 继承的子类也无法直接访问父类的protected方法
// console.log(employee1.getGender());
console.log(employee1.getEmployeeGender())`

export const codeString7 = `// 类的单例模式

class Axios {
  method: string
  private static instance: Axios | null = null
  private constructor (method?: string) {
    this.method = method || 'get'
    console.log('running constructor')
  }
  static init (method?: string) {
    if (!this.instance) this.instance = new Axios(method)
    return this.instance
  }
}

// const instance = new Axios() // 私有的构造函数，无法直接示例化对象
const instance = Axios.init() // 只能通过执行类里面的方法调用构造函数
console.log(instance)

// 单例模式，类只生成一个示例，多次执行示例化对象只调用了一次构造函数，节省资源
const instance2 = Axios.init()
console.log(instance2.method)
const instance3 = Axios.init('post') // 初始化时候method = "get"，所以无论传什么值，method都不会改变
console.log(instance3.method)
const instance4 = Axios.init()
console.log(instance4.method)`

export const codeString8 = `// 类访问器 get 和 set

class Article {
  private _lists: any[] = []
  get list (): any[] {
    // return this._lists;
    return this._lists.map(item => item.title) // 格式化处理，类似于computed
  }
  set list (lists: any[]) {
    this._lists = lists
  }
}

const articleList = [
  { title: 'javascript' },
  { title: 'typescript' },
  { title: 'css' }
]
const article = new Article()
article.list = articleList
console.log(article.list)`

export const codeString9 = `// 映射类型

type AppConfig = {
  username: string;
  layout: string;
};

type AppPermissions = {
  [Property in keyof AppConfig as \`change\${Capitalize<Property>}\`]: boolean
};

type Device = {
  manufacturer: string;
  price: number;
};

type DeviceFormatter = {
  [Key in keyof Device as \`format\${Capitalize<Key>}\`]: (value: Device[Key]) => string;
}`

export const codeString10 = `// type和interface

// 接口重名合并
interface IUser1 {
  name: string
}
interface IUser1 {
  age: number
}
const user1: IUser1 = {
  name: 'Ackerman',
  age: 20
}

// 类型重名报错
type TUser1 = {
  name: string
}
// type TUser1 = {}

type TUser2 = {
  age: number
}

// 类型只能合并
type TUser3 = TUser1 & TUser2
// 或者组合
type TUser4 = TUser1 | TUser2

// 接口的继承，相当于合并
interface IMember extends IUser1 {
  gender: number
}

const member1: IMember = {
  name: 'Gekco',
  age: 21,
  gender: 1
}

// 类型与接口的联合
const member2: IUser1 & TUser2 = {
  name: 'Levil',
  age: 22
}
`
