import React from 'react'
import { Affix, Col, Row, Timeline } from 'antd'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { javascriptRoutes } from '@/router'
import style from './index.module.scss'

const JavaScript = () => {
  const { pathname } = useLocation()

  const items = javascriptRoutes.map(item => {
    const isCurrentPath =
      pathname.toLocaleLowerCase() ===
      `/${item.elementPath.toLocaleLowerCase()}`
    return {
      color: isCurrentPath ? 'blue' : 'gray',
      children: (
        <div
          className={`${style.item} ${isCurrentPath && style.active}`}
          onClick={() => onClick(item.elementPath)}
        >
          {item.meta.title}
        </div>
      ),
    }
  })

  const navigate = useNavigate()

  const onClick = (path: string) => navigate(`/${path.toLowerCase()}`)
  return (
    <Row>
      <Col span={4}>
        <Affix offsetTop={88}>
          <Timeline items={items} />
        </Affix>
      </Col>
      <Col span={20}>
        <Outlet />
      </Col>
    </Row>
  )
}

export default JavaScript
