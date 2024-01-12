import React from 'react'
import { Col, Row } from 'antd'
import { Outlet } from 'react-router-dom'

const Scss = () => {
  const flexBasic = '200px'
  return (
    <Row>
      <Col flex={flexBasic}>200px</Col>
      <Col flex='auto'>
        <Outlet />
      </Col>
      <Col flex={flexBasic}>200px</Col>
    </Row>
  )
}

export default Scss
