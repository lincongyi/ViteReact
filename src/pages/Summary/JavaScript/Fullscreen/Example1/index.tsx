import { Button, Divider, Space } from 'antd'

const Example1 = () => {
  // 暂时不考虑兼容性问题
  /**
   * 窗口全屏
   */
  const onDocumentFullscreen = () => {
    document.documentElement.requestFullscreen()
  }

  /**
   * 元素全屏
   */
  const onDivFullscreen = () => {
    const div = document.getElementById('div')
    div?.requestFullscreen()
  }

  /**
   * 退出全屏
   */
  const onExitFullscreen = () => {
    document.exitFullscreen()
  }

  /**
   * 获取当前全屏元素
   */
  const getFullscreenElement = () => {
    console.log('fullscreenElement', document.fullscreenElement)
  }

  return (
    <>
      <div
        id="div"
        style={{ width: 200, height: 200, backgroundColor: 'brown' }}
      ></div>
      <Divider />
      <Space>
        <Button type="primary" onClick={onDocumentFullscreen}>
          窗口全屏
        </Button>
        <Button type="primary" onClick={onDivFullscreen}>
          元素全屏
        </Button>
        <Button onClick={onExitFullscreen}>退出全屏</Button>
        <Button onClick={getFullscreenElement}>获取当前全屏元素</Button>
      </Space>
    </>
  )
}

export default Example1
