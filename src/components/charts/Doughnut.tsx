import React, { useEffect } from 'react'
import * as echarts from 'echarts'

const Doughnut: React.FC = () => {
  type EChartsOption = echarts.EChartsOption
  let myChart: echarts.EChartsType

  const option: EChartsOption = {
    tooltip: {
      trigger: 'item',
    },
    legend: {
      top: '5%',
      left: 'center',
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '40',
            fontWeight: 'bold',
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' },
        ],
      },
    ],
  }
  useEffect(() => {
    if (!myChart) {
      const doughnut = document.getElementById('doughnut')
      myChart = echarts.init(doughnut!)
      option && myChart.setOption(option)
    }
  }, [])

  return (
    <>
      <div id='doughnut' style={{ width: 600, height: 400 }}></div>
    </>
  )
}

export default Doughnut
