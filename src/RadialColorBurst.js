import { useEffect, useState } from 'react'
import { arc, csv, pie } from 'd3'

const csvUrl =
  'https://gist.githubusercontent.com/mlean-voltaiq/75cb6e488ef76d174591cd7c9125acc7/raw/chartColorPool.csv'

const width = 960
const height = 500
const centerX = width / 2
const centerY = height / 2

const pieArc = arc().innerRadius(0).outerRadius(width)

function ColorPieChart() {
  const [data, setData] = useState()

  useEffect(() => {
    csv(csvUrl).then(setData)
  }, [])

  if (!data) {
    return <p>Loading...</p>
  }

  const colorPie = pie().value(1)
  return (
    // Implementation using d3.pie
    <svg width={width} height={height}>
      <g transform={`translate(${centerX},${centerY})`}>
        {colorPie(data).map((d) => (
          <path
            key={d.data.Name}
            fill={d.data['Normal Color Hex']}
            d={pieArc(d)}
          />
        ))}
      </g>
    </svg>

    // Implementation without using d3.pie
    // <svg width={width} height={height}>
    //   <g transform={`translate(${centerX},${centerY})`}>
    //     {data.map((d, i) => (
    //       <path
    //         fill={d['Normal Color Hex']}
    //         d={pieArc({
    //           startAngle: (i / data.length) * 2 * Math.PI,
    //           endAngle: ((i + 1) / data.length) * 2 * Math.PI,
    //         })}
    //       />
    //     ))}
    //   </g>
    // </svg>
  )
}

export default ColorPieChart
