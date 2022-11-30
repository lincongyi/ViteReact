import { Button } from 'antd'
import React from 'react'
import './index.scss'
import { getUerProfile } from '@api/login'

const Home:React.FC = () => {
  const onClick = async () => {
    const result = await getUerProfile()
    console.log(result)
  }
  return (<div>Home<Button type="primary" onClick={onClick}>Primary Button</Button></div>)
}

export default Home
