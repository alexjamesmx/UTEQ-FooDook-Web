import React, { useEffect, useState } from 'react'
import { render } from 'react-dom'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import useInfo from './useInfo'
import { getWeekDays } from '../../firebase/firebase'

export const Grafica = () => {
  const { ventas, userinfo } = useInfo()
  const [dias, setDias] = useState([])
  useEffect(() => {
    if (userinfo && ventas) {
      ;(async () => {
        const res = await getWeekDays(userinfo.idrestaurante)
        console.log('async ', res)
        setDias(res)
      })()
    }
  }, [userinfo, ventas])
  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={{
          chart: {
            type: 'spline',
          },
          title: {
            text: 'Ultimas ventas',
          },
          xAxis: {
            title: { text: 'Numero de venta' },
            minorTickInterval: 1,
            accessibility: {
              rangeDescription: 'Range: 1 to 100',
            },
            // gridLineWidth: 1,
          },
          yAxis: {
            title: { text: 'Total' },
            gridLineWidth: 1,
          },
          series: [
            {
              data: dias,
            },
          ],
        }}
      />
    </div>
  )
}

render(<Grafica />, document.getElementById('root'))
