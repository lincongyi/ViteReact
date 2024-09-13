import { useEffect, useState } from 'react'
import { bus } from '../../eventBus'

const Calculation = () => {
  const [count, setCount] = useState(0)

  // bus.on('increase', (value: number) => setCount(count + value))

  const callback = (value: number) => setCount(count + value)

  bus.on('increase', callback)

  useEffect(() => {
    if (count >= 5) bus.off('increase', callback)
  }, [count])

  return <>Calculation：{count}</>
}

export default Calculation
