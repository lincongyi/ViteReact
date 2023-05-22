import React, { useEffect } from 'react'
import * as echarts from 'echarts'

const Line: React.FC = () => {
  type EChartsOption = echarts.EChartsOption
  let myChart: echarts.EChartsType
  const option: EChartsOption = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line',
      },
    ],
  }
  useEffect(() => {
    if (!myChart) {
      const line = document.getElementById('line')
      myChart = echarts.init(line!)
      myChart.setOption(option)
    }
  }, [])
  return (
    <>
      <div id='line' style={{ width: 600, height: 400 }}></div>
    </>
  )
}

export default Line
