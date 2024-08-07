import { Affix, Col, Row, Timeline } from 'antd'
import { Outlet } from 'react-router-dom'
import { FrontEndToolingRoutes } from '@/router'
import { getSideNavigation } from '@/utils'

const FrontEndTooling = () => {
  const items = getSideNavigation(FrontEndToolingRoutes)

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

export default FrontEndTooling
