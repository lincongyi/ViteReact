import React, { useEffect, useRef } from 'react'
import './index.scss'
import * as echarts from 'echarts'
import Line from '@components/charts/Line'
import Doughnut from '@components/charts/Doughnut'

const Home:React.FC = () => {
  const myChart = useRef<HTMLDivElement>(null)
  let eChartsInstance:echarts.EChartsType

  // 指定图表的配置项和数据
  const option = {
    title: {
      text: 'ECharts 入门示例'
    },
    tooltip: {},
    legend: {
      data: ['销量']
    },
    xAxis: {
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {},
    series: [
      {
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }
    ]
  }

  useEffect(() => {
    // 柱状图
    if (!eChartsInstance) {
      eChartsInstance = echarts.init(myChart.current as HTMLDivElement)
      eChartsInstance.setOption(option)
    }
  }, [])
  return (
    <>
      <div ref={myChart} style={{ width: 600, height: 400 }}></div>
      <Line/>
      <Doughnut/>
    </>
  )
}

export default Home
