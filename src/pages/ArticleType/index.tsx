import { useState } from 'react'
import './index.scss'

const ArticleType = () => {
  const [state, setState] = useState(0)

  return (
    <>
      <button onClick={() => setState(1)}>Click me {state}</button>
    </>
  )
}

export default ArticleType
