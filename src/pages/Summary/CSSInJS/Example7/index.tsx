import React from 'react'
import styled from '@emotion/styled'

const Demo = ({
  className,
  description,
}: {
  className?: string
  description?: string
}) => {
  return <h4 className={className}>{description || 'default Demo'}</h4>
}

const WrapDemo1 = styled(Demo)`
  background-color: #1eafed;
`

const WrapDemo2 = styled(Demo)({
  backgroundColor: '#95cd41',
})

const Example7 = () => {
  return (
    <>
      <Demo />
      <WrapDemo1 description='WrapDemo1 string styled' />
      <WrapDemo2 description='WrapDemo2 object styled' />
    </>
  )
}

export default Example7
