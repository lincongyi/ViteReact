import { Button, Space } from 'antd'
import { bus } from '../../eventBus'

const IncreaseBtnGroup = () => {
  const onIncrease = (value = 1) => {
    bus.emit('increase', value)
  }

  return (
    <Space>
      <Button onClick={() => onIncrease()}>increase +1</Button>
      <Button onClick={() => onIncrease(2)}>increase +2</Button>
      <Button onClick={() => console.log(bus.eventTypes)}>increase once</Button>
      <Button>increase off</Button>
    </Space>
  )
}

export default IncreaseBtnGroup
