import React, { useState } from 'react'
import './index.scss'
import { Button, Col, Divider, Row, Space } from 'antd'

const ArticleType = () => {
  const [state, setState] = useState(0)

  return (
    <>
      <button onClick={() => setState(1)}>Click me {state}</button>
    </>
  )
}

export default ArticleType
