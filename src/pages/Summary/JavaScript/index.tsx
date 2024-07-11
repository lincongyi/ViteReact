import { Affix, Col, Row, Timeline } from 'antd'
import { Outlet } from 'react-router-dom'
import { JSRoutes } from '@/router'
// import style from './index.module.scss'
import { getSideNavigation } from '@/utils'

const JavaScript = () => {
  const items = getSideNavigation(JSRoutes)

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

export default JavaScript
