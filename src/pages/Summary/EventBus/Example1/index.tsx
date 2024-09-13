import { Col, Row } from 'antd'
import IncreaseBtnGroup from './components/IncreaseBtnGroup'
import Calculation from './components/Calculation'

const Example1 = () => {
  return (
    <Row gutter={[0, 20]}>
      <Col span={24}>
        <IncreaseBtnGroup />
      </Col>
      <Col span={24}>
        <Calculation />
      </Col>
    </Row>
  )
}

export default Example1
