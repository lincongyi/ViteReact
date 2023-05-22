import React, { useRef } from 'react'
import html2Canvas from 'html2canvas'
import JsPDF from 'jspdf'
import {
  Button,
  Cascader,
  DatePicker,
  Divider,
  Form,
  Input,
  Select,
  Switch,
  TreeSelect,
} from 'antd'

const Html2Pdf = () => {
  const ref = useRef<HTMLDivElement>(null)
  const boxRef = useRef<HTMLDivElement>(null)

  const canvas2pdf = (canvas: HTMLCanvasElement) => {
    const contentWidth = canvas.width
    const contentHeight = canvas.height

    // a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
    const imgWidth = 595.28
    const imgHeight = (595.28 / contentWidth) * contentHeight
    // canvas.crossOrigin="anonymous";
    const pageData = canvas.toDataURL('image/jpeg', 1.0)
    const pdf = new JsPDF('p', 'pt', 'a4')

    pdf.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight)

    pdf.save('测试.pdf')
  }

  /**
   * 导出pdf
   */
  const onExport = async () => {
    const canvas: HTMLCanvasElement = await html2Canvas(ref.current!)
    // boxRef.current!.appendChild(canvas)
    canvas2pdf(canvas)
  }
  return (
    <>
      <div id='oDiv' ref={ref} style={{ width: 800, padding: 40 }}>
        <div
          style={{
            width: 200,
            height: 200,
            backgroundColor: 'green',
          }}
        ></div>
        <Divider />
        <div>
          关于 html2canvas 了解 html2canvas，它是如何工作的以及它的一些局限性。
          在你开始使用这个脚本以前，这里有些帮助你更好的了解脚本的好处及其的一些局限性。
          #介绍 html2canvas 是一个 HTML
          渲染器。该脚本允许你直接在用户浏览器截取页面或部分网页的“屏幕截屏”，屏幕截图是基于
          DOM，因此生成的图片并不一定 100%
          一致，因为它没有制作实际的屏幕截图，而是根据页面上可用的信息构建屏幕截图。
          #它是如何工作的 该脚本通过读取 DOM
          以及应用于元素的不同样式，将当前页面呈现为 canvas 图像。
          它不需要来自服务器的任何渲染，因为整个图像是在客户端上创建的。但是，由于它太依赖于浏览器，因此该库不适合在
          nodejs
          中使用。它也不会神奇地规避任何浏览器内容策略限制，因此呈现跨域内容将需要代理来将内容提供给相同的源。
          该脚本仍然处理非常实验状态，因此不建议在生产环境中使用它，也不建议使用它来构建应用程序，因为仍然会有重大更改。
          #浏览器兼容性 该库应该可以在以下浏览器上正常工作 Firefox 3.5+ Google
          Chrome Opera 12+ IE9+ Edge Safari 6+ 由于需要手动构建每一个 CSS
          属性以支持，因此还有许多尚不支持的属性。
        </div>
        <Divider />
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout='horizontal'
          style={{ maxWidth: 600 }}
        >
          <Form.Item label='Input'>
            <Input />
          </Form.Item>
          <Form.Item label='Select'>
            <Select>
              <Select.Option value='demo'>Demo</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label='TreeSelect'>
            <TreeSelect
              treeData={[
                {
                  title: 'Light',
                  value: 'light',
                  children: [{ title: 'Bamboo', value: 'bamboo' }],
                },
              ]}
            />
          </Form.Item>
          <Form.Item label='Cascader'>
            <Cascader
              options={[
                {
                  value: 'zhejiang',
                  label: 'Zhejiang',
                  children: [{ value: 'hangzhou', label: 'Hangzhou' }],
                },
              ]}
            />
          </Form.Item>
          <Form.Item label='DatePicker'>
            <DatePicker />
          </Form.Item>
          <Form.Item label='Switch' valuePropName='checked'>
            <Switch />
          </Form.Item>
          <Form.Item label='Button'>
            <Button>Button</Button>
          </Form.Item>
        </Form>
      </div>

      <Button type='primary' onClick={onExport}>
        导出pdf
      </Button>
      <div ref={boxRef}></div>
    </>
  )
}

export default Html2Pdf
