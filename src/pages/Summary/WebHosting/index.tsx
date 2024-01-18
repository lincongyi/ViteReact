import React from 'react'
import { Affix, Col, Row, Timeline } from 'antd'
import { Outlet } from 'react-router-dom'
import { WebHostingRoutes } from '@/router'
import { getSideNavigation } from '@/utils'

const WebHosting = () => {
  const items = getSideNavigation(WebHostingRoutes)

  return (
    <Row>
      <Col span={4}>
        <Affix offsetTop={88}>
          <Timeline items={items} />
        </Affix>
      </Col>
      <Col span={20}>
        <Outlet />
      </Col>
    </Row>
  )
}

export default WebHosting
