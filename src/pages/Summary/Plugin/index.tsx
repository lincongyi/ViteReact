import React from 'react'
import { Affix, Col, Row, Timeline } from 'antd'
import { Outlet } from 'react-router-dom'
import { PluginRoutes } from '@/router'
import { getSideNavigation } from '@/utils'

const Plugin = () => {
  const items = getSideNavigation(PluginRoutes)

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

export default Plugin
