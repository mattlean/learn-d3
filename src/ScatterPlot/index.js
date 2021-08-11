import { extent, format, scaleBand, scaleLinear } from 'd3'
import AxisBottom from './AxisBottom'
import AxisLeft from './AxisLeft'
import Marks from './Marks'
import useData from './useData'
import './ScatterPlot.css'

const width = 960
const height = 500
const margin = { top: 20, right: 30, bottom: 65, left: 90 }
const xAxisLabelOffset = 50
const yAxisLabelOffset = 40

const siFormat = format('.2s')
const xAxisTickFormat = (tickValue) => siFormat(tickValue).replace('G', 'B')

function ScatterPlot() {
  const data = useData()

  if (!data) {
    return <p>Loading...</p>
  }

  const innerWidth = width - margin.left - margin.right
  const xAxisLabel = 'Petal Length'
  const xValue = (d) => d.petal_length
  const xScale = scaleLinear()
    .domain(extent(data, xValue))
    .range([0, innerWidth])
    .nice()

  const innerHeight = height - margin.top - margin.bottom
  const yAxisLabel = 'Sepal Width'
  const yValue = (d) => d.sepal_width
  const yScale = scaleLinear()
    .domain(extent(data, yValue))
    .range([0, innerHeight])

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left},${margin.top})`}>
        <AxisBottom
          innerHeight={innerHeight}
          tickFormat={xAxisTickFormat}
          tickOffset={5}
          xScale={xScale}
        />
        <AxisLeft innerWidth={innerWidth} yScale={yScale} />
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
          circleRadius={7}
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

export default ScatterPlot
