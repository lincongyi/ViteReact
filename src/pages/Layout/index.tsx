import { Button } from 'antd'
import { request } from '@utils/request'
import rootStore from '@stores/index'

const Layout = () => {
  const handleEvent = () => {
    console.log(rootStore)
    request
      .post('/login', { username: 'admin', password: 'admin' })
      .then(({ data }) => console.log(data))
  }
  return (
    <div>
      <Button type="primary" onClick={() => handleEvent()}>
        Primary Button
      </Button>
      Layout
    </div>
  )
}

export default Layout
