import { csv, max, scaleBand, scaleLinear } from 'd3'
import { useEffect, useState } from 'react'

const width = 960
const height = 500
const margin = { top: 20, right: 20, bottom: 20, left: 200 }

const csvUrl = `${process.env.PUBLIC_URL}/data/UN_Population_2019.csv`

function BarChart() {
  const [data, setData] = useState()
  useEffect(() => {
    const row = (d) => {
      d.Population = +d['2020']
      return d
    }
    csv(csvUrl, row).then((data) => setData(data.slice(0, 10)))
  }, [])

  if (!data) {
    return <p>Loading...</p>
  }

  const innerWidth = width - margin.left - margin.right
  const xScale = scaleLinear()
    .domain([0, max(data, (d) => d.Population)])
    .range([0, innerWidth])

  const innerHeight = height - margin.top - margin.bottom
  const yScale = scaleBand()
    .domain(data.map((d) => d.Country))
    .range([0, innerHeight])

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left},${margin.top})`}>
        {xScale.ticks().map((tickValue) => (
          <g key={tickValue} transform={`translate(${xScale(tickValue)},0)`}>
            <line y2={innerHeight} stroke="black" />
            <text
              y={innerHeight + 3}
              dy=".71em"
              style={{ textAnchor: 'middle' }}
            >
              {tickValue}
            </text>
          </g>
        ))}
        {yScale.domain().map((tickValue) => (
          <text
            key={tickValue}
            x={-3}
            y={yScale(tickValue) + yScale.bandwidth() / 2}
            dy=".32em"
            style={{ textAnchor: 'end' }}
          >
            {tickValue}
          </text>
        ))}
        {data.map((d) => (
          <rect
            key={d.Country}
            x={0}
            y={yScale(d.Country)}
            width={xScale(d.Population)}
            height={yScale.bandwidth()}
          />
        ))}
      </g>
    </svg>
  )
}

export default BarChart
