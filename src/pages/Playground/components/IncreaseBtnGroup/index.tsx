import { Button, Space } from 'antd'
import { bus } from '../../eventBus'

const IncreaseBtnGroup = () => {
  const onIncrease = (value = 1) => {
    bus.emit('inc', value)
  }

  return (
    <Space>
      <Button onClick={() => onIncrease()}>increase +1</Button>
      <Button onClick={() => onIncrease(2)}>increase +2</Button>
      <Button onClick={() => console.log(bus.eventTypes)}>increase off</Button>
      <Button>increase once</Button>
    </Space>
  )
}

export default IncreaseBtnGroup
