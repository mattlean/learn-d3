import { extent, format, scaleLinear, scaleOrdinal } from 'd3'
import { useState } from 'react'
import AxisBottom from './AxisBottom'
import AxisLeft from './AxisLeft'
import ColorLegend from './ColorLegend'
import Dropdown from './Dropdown'
import Marks from './Marks'
import useData from './useData'
import './ComplexScatterPlot.css'

const width = 960
const menuHeight = 75
const height = 500 - menuHeight
const margin = { top: 20, right: 200, bottom: 65, left: 90 }
const xAxisLabelOffset = 50
const yAxisLabelOffset = 40

const siFormat = format('.2s')
const xAxisTickFormat = (tickValue) => siFormat(tickValue).replace('G', 'B')

function ComplexScatterPlot() {
  const data = useData()

  const initXAttribute = 'petal_length'
  const initYAttribute = 'sepal_width'

  const [xAttribute, setXAttribute] = useState(initXAttribute)
  const [yAttribute, setYAttribute] = useState(initYAttribute)

  const [hoveredValue, setHoveredValue] = useState(null)

  if (!data) {
    return <p>Loading...</p>
  }

  const attributes = [
    { value: 'sepal_length', label: 'Sepal Length' },
    { value: 'sepal_width', label: 'Sepal Width' },
    { value: 'petal_length', label: 'Petal Length' },
    { value: 'petal_width', label: 'Petal Width' },
    { value: 'species', label: 'Species' },
  ]

  const getLabel = (value) => {
    for (let i = 0; i < attributes.length; ++i) {
      if (attributes[i].value === value) {
        return attributes[i].label
      }
    }
  }

  const innerWidth = width - margin.left - margin.right
  const xAxisLabel = getLabel(xAttribute)
  const xValue = (d) => d[xAttribute]
  const xScale = scaleLinear()
    .domain(extent(data, xValue))
    .range([0, innerWidth])
    .nice()

  const innerHeight = height - margin.top - margin.bottom
  const yAxisLabel = getLabel(yAttribute)
  const yValue = (d) => d[yAttribute]
  const yScale = scaleLinear()
    .domain(extent(data, yValue))
    .range([0, innerHeight])

  const colorLegendLabel = 'Species'
  const colorValue = (d) => d.species
  const colorScale = scaleOrdinal()
    .domain(data.map(colorValue))
    .range(['#e6842a', '#137b80', '#8e6c8a'])

  const filteredData = data.filter((d) => hoveredValue === colorValue(d))
  const fadeOpacity = 0.2
  const circleRadius = 7

  return (
    <>
      <label htmlFor="x-select">X:</label>
      <Dropdown
        id="x-select"
        options={attributes}
        selectedValue={xAttribute}
        onSelectedValueChange={setXAttribute}
      />
      <label htmlFor="y-select">Y:</label>
      <Dropdown
        id="y-select"
        options={attributes}
        selectedValue={yAttribute}
        onSelectedValueChange={setYAttribute}
      />
      <svg width={width} height={height}>
        <g transform={`translate(${margin.left},${margin.top})`}>
          <AxisBottom
            innerHeight={innerHeight}
            tickFormat={xAxisTickFormat}
            tickOffset={5}
            xScale={xScale}
          />
          <AxisLeft innerWidth={innerWidth} tickOffset={5} yScale={yScale} />
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
          <g transform={`translate(${innerWidth + 50},60)`}>
            <text x={35} y={-30} textAnchor="middle" className="axis-label">
              {colorLegendLabel}
            </text>
            <ColorLegend
              colorScale={colorScale}
              fadeOpacity={fadeOpacity}
              hoveredValue={hoveredValue}
              tickSpacing={22}
              tickSize={circleRadius}
              tickTextOffset={12}
              onHover={setHoveredValue}
            />
          </g>
          <g opacity={hoveredValue ? 0.2 : 1}>
            <Marks
              circleRadius={circleRadius}
              colorScale={colorScale}
              colorValue={colorValue}
              data={data}
              tooltipFormat={xAxisTickFormat}
              xScale={xScale}
              xValue={xValue}
              yScale={yScale}
              yValue={yValue}
            />
          </g>
          <Marks
            circleRadius={circleRadius}
            colorScale={colorScale}
            colorValue={colorValue}
            data={filteredData}
            tooltipFormat={xAxisTickFormat}
            xScale={xScale}
            xValue={xValue}
            yScale={yScale}
            yValue={yValue}
          />
        </g>
      </svg>
    </>
  )
}

export default ComplexScatterPlot
