import React from 'react'
import { Col, Row, Steps } from 'antd'
const Summary = () => {
  // const items = []
  return (
    <Row>
      <Col span={8}>
        <Steps
          progressDot
          current={1}
          direction='vertical'
          items={[
            {
              title: 'Finished',
              description: 'This is a description. This is a description.',
            },
            {
              title: 'Finished',
              description: 'This is a description. This is a description.',
            },
            {
              title: 'In Progress',
              description: 'This is a description. This is a description.',
            },
            {
              title: 'Waiting',
              description: 'This is a description.',
            },
            {
              title: 'Waiting',
              description: 'This is a description.',
            },
          ]}
        />
      </Col>
    </Row>
  )
}

export default Summary
