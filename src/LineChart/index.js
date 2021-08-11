import { extent, format, scaleTime, scaleLinear, timeFormat } from 'd3'
import AxisBottom from './AxisBottom'
import AxisLeft from './AxisLeft'
import Marks from './Marks'
import useData from './useData'
import './LineChart.css'

const width = 960
const height = 500
const margin = { top: 20, right: 30, bottom: 65, left: 90 }
const xAxisLabelOffset = 50
const yAxisLabelOffset = 40

const xAxisTickFormat = timeFormat('%a')

function LineChart() {
  const data = useData()

  if (!data) {
    return <p>Loading...</p>
  }

  const innerWidth = width - margin.left - margin.right
  const xAxisLabel = 'Time'
  const xValue = (d) => d.timestamp
  const xScale = scaleTime()
    .domain(extent(data, xValue))
    .range([0, innerWidth])
    .nice()

  const innerHeight = height - margin.top - margin.bottom
  const yAxisLabel = 'Temperature'
  const yValue = (d) => d.temperature
  const yScale = scaleLinear()
    .domain(extent(data, yValue))
    .range([innerHeight, 0])
    .nice()

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left},${margin.top})`}>
        <AxisBottom
          innerHeight={innerHeight}
          tickFormat={xAxisTickFormat}
          tickOffset={7}
          xScale={xScale}
        />
        <AxisLeft innerWidth={innerWidth} tickOffset={7} yScale={yScale} />
        <text
          x={innerWidth / 2}
          y={innerHeight + xAxisLabelOffset}
          textAnchor="middle"
          className="axis-label"
        >
          {xAxisLabel}
        </text>
        <text
          textAnchor="middle"
          transform={`translate(${-yAxisLabelOffset},${
            innerHeight / 2
          }) rotate(-90)`}
          className="axis-label"
        >
          {yAxisLabel}
        </text>
        <Marks
          circleRadius={3}
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

export default LineChart
