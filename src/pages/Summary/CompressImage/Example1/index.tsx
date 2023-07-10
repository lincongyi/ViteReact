import React, { useEffect, useState } from 'react'
import { Button, Col, Input, Row, Slider, Space, Typography, Image } from 'antd'
import { DownloadOutlined } from '@ant-design/icons'

const Example1 = () => {
  /**
   * 压缩质量
   */
  const [quality, setQuality] = useState(9)

  /**
   * 图片大小
   */
  const [imgLimit, setImgLimit] = useState(1024)

  const onChangeLimit = (e: React.ChangeEvent<HTMLInputElement>) => {
    const limit = isNaN(Number(e.target.value)) ? 1024 : Number(e.target.value)
    setImgLimit(limit)
  }

  const onChangeQuality = (value: number) => {
    setQuality(value)
  }

  const imageList = [
    'https://i0.hippopx.com/photos/604/288/839/technology-digital-tablet-digital-tablet-preview.jpg',
    'https://i0.hippopx.com/photos/779/1006/559/coffee-hot-drink-espresso-preview.jpg',
    'https://i0.hippopx.com/photos/829/226/490/coffee-shop-american-flag-america-coffee-preview.jpg',
  ]

  /**
   * canvas转blob类型文件
   */
  const toBlob: (canvas: HTMLCanvasElement) => Promise<number> = (
    canvas: HTMLCanvasElement
  ) => {
    return new Promise(resolve => {
      canvas.toBlob(
        res => {
          resolve((res?.size as number) / 1024)
        },
        'image/jpeg',
        1
      )
    })
  }

  type TImageList = {
    url: string
    size: number
  }

  /**
   * 获取未压缩图片信息
   */
  const getUnCompressImage: (url: string) => Promise<TImageList> = (
    url: string
  ) => {
    const canvas = document.createElement('canvas')
    const img = document.createElement('img')
    const context = canvas.getContext('2d')
    img.setAttribute('crossOrigin', 'anonymous')
    img.src = url
    return new Promise(resolve => {
      img.onload = async () => {
        canvas.width = img.width
        canvas.height = img.height
        context!.drawImage(img, 0, 0, img.width, img.height)
        const size = await toBlob(canvas)
        resolve({
          url,
          size,
        })
      }
    })
  }

  /**
   * 未压缩的图片
   */
  const [unCompressList, setUnCompressList] = useState<TImageList[]>()

  /**
   * 已压缩的图片
   */
  const [compressList, setCompressList] = useState<TImageList[]>()

  useEffect(() => {
    ;(async () => {
      const result: TImageList[] = []
      for (let i = 0; i < imageList.length; i++) {
        const item: TImageList = await getUnCompressImage(imageList[i])
        result.push(item)
      }
      setUnCompressList(result)
    })()
  }, [])

  /**
   * 获取base64大小
   */
  const getBase64ImageSize = (base64: string) => {
    const buffer = atob(base64.split(',')[1])
    const length = buffer.length
    return length / 1024
  }

  /**
   * 压缩图片
   * @param {string} url 图片路径
   * @param {number} quality 压缩质量0~10
   * @param {number} limit 图片大小限制 默认100kb
   * @returns {{url,size}} url base64 size 大小
   */
  const compressImage: (
    url: string,
    quality: number,
    limit?: number
  ) => Promise<TImageList> = (url, quality, limit = 1024) => {
    const canvas = document.createElement('canvas')
    const img = document.createElement('img')
    const context = canvas.getContext('2d') as CanvasRenderingContext2D
    img.setAttribute('crossOrigin', 'anonymous')
    img.src = url
    return new Promise(resolve => {
      img.onload = async () => {
        canvas.width = img.width
        canvas.height = img.height
        context.clearRect(0, 0, img.width, img.height)
        context.drawImage(img, 0, 0, img.width, img.height)
        let base64 = canvas.toDataURL('image/jpeg', quality / 10)
        let size = getBase64ImageSize(base64)
        let count = 0
        while (size > limit) {
          count++
          base64 = canvas.toDataURL('image/jpeg', quality / 10 / 2 / count)
          size = getBase64ImageSize(base64)
        }
        resolve({
          url: base64,
          size,
        })
      }
    })
  }

  /**
   * 遍历图片数组，执行压缩方法
   */
  const onCompress = async () => {
    const result: TImageList[] = []
    for (let i = 0; i < imageList.length; i++) {
      const item: TImageList = await compressImage(
        imageList[i],
        quality,
        imgLimit
      )
      result.push(item)
    }
    setCompressList(result)
  }

  return (
    <Row gutter={[0, 20]}>
      <Col span={4}>
        <Button type='primary' icon={<DownloadOutlined />} onClick={onCompress}>
          Compress
        </Button>
      </Col>
      <Col span={12}>
        <Row align='middle'>
          <Col span={16}>
            <Slider
              min={0}
              max={10}
              value={quality}
              onChange={onChangeQuality}
            />
          </Col>
          <Col span={8}>图片质量：{quality / 10}</Col>
          <Col span={24}>
            <Input
              addonBefore='图片大小限制（最大）'
              addonAfter='kb'
              defaultValue={imgLimit}
              onChange={onChangeLimit}
            />
          </Col>
        </Row>
      </Col>
      <Col span={24}>
        <Typography.Paragraph>未压缩图片：</Typography.Paragraph>
        <Space>
          {unCompressList &&
            unCompressList.map((item, index) => (
              <Space direction='vertical' key={index}>
                <Image key={index} width={200} src={item.url} />
                <Typography.Text strong>
                  图片大小：{item.size.toFixed(2)}kb
                </Typography.Text>
              </Space>
            ))}
        </Space>
      </Col>
      <Col span={24}>
        <Typography.Paragraph>已压缩图片：</Typography.Paragraph>
        <Space>
          {compressList &&
            compressList.map((item, index) => (
              <Space direction='vertical' key={index}>
                <Image key={index} width={200} src={item.url} />
                <Typography.Text strong>
                  图片大小：{item.size.toFixed(2)}kb
                </Typography.Text>
              </Space>
            ))}
        </Space>
      </Col>
    </Row>
  )
}

export default Example1
