function AxisBottom({ innerHeight, tickFormat, tickOffset = 3, xScale }) {
  return xScale.ticks().map((tickValue) => (
    <g
      key={tickValue}
      transform={`translate(${xScale(tickValue)},0)`}
      className="tick"
    >
      <line y2={innerHeight} />
      <text
        y={innerHeight + tickOffset}
        dy=".71em"
        style={{ textAnchor: 'middle' }}
      >
        {tickFormat(tickValue)}
      </text>
    </g>
  ))
}

export default AxisBottom
