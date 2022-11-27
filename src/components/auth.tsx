// 路由鉴权
// 高阶组件：把一个组件当作另外一个组件的参数传入，并返回新的组件
import { useStore } from '@stores/index'
import { Navigate } from 'react-router-dom'

const Auth = ({ children }: any) => {
  let { loginStore } = useStore()
  const token = loginStore.getToken()

  if (token) {
    return <>{children}</>
  } else {
    return <Navigate to="/login" replace></Navigate>
  }
}

export { Auth }
