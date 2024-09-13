import { useCallback, useEffect, useState } from 'react'
import { bus } from '../../eventBus'

const Calculation = () => {
  const [count, setCount] = useState(0)

  // bus.on('inc', (value: number) => setCount(count + value))

  const callback = useCallback((value: number) => setCount(count + value), [])
  useEffect(() => {
    bus.on('inc', callback)

    if (count >= 5) bus.off('inc', callback)
  }, [count])

  return <>Calculation：{count}</>
}

export default Calculation
