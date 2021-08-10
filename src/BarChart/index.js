import { format, max, scaleBand, scaleLinear } from 'd3'
import AxisBottom from './AxisBottom'
import AxisLeft from './AxisLeft'
import Marks from './Marks'
import useData from './useData'
import './BarChart.css'

const width = 960
const height = 500
const margin = { top: 20, right: 30, bottom: 65, left: 220 }
const xAxisLabelOffset = 50

const siFormat = format('.2s')
const xAxisTickFormat = (tickValue) => siFormat(tickValue).replace('G', 'B')

function BarChart() {
  const data = useData()

  if (!data) {
    return <p>Loading...</p>
  }

  const innerWidth = width - margin.left - margin.right
  const xValue = (d) => d.Population * 1000
  const xScale = scaleLinear()
    .domain([0, max(data, xValue)])
    .range([0, innerWidth])

  const innerHeight = height - margin.top - margin.bottom
  const yValue = (d) => d.Country
  const yScale = scaleBand()
    .domain(data.map(yValue))
    .range([0, innerHeight])
    .paddingInner(0.15)

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left},${margin.top})`}>
        <AxisBottom
          innerHeight={innerHeight}
          tickFormat={xAxisTickFormat}
          xScale={xScale}
        />
        <AxisLeft yScale={yScale} />
        <text
          x={innerWidth / 2}
          y={innerHeight + xAxisLabelOffset}
          textAnchor="middle"
          className="axis-label"
        >
          Population
        </text>
        <Marks
          data={data}
          tooltipFormat={xAxisTickFormat}
          xScale={xScale}
          xValue={xValue}
          yScale={yScale}
          yValue={yValue}
        />
      </g>
    </svg>
  )
}

export default BarChart
