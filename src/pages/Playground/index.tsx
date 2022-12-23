import React from 'react'
import './index.scss'

const Playground: React.FC = () => {
  const array = [1, 2, 3, 4, 5]
  return (
    <>
      Playground
      <p
        dangerouslySetInnerHTML={{ __html: '<i style="color:red;">123</i>' }}
      />
      {array}
      <br />
      <Child title="子组件title">子组件内容插槽</Child>
    </>
  )
}

type childProps = {
  title: string
  children: string
}

const Child: React.FC<childProps> = (props) => {
  return (
    <div>
      <p>子组件</p>
      <h3>{props.title}</h3>
      <p>{props.children}</p>
    </div>
  )
}

export default Playground
