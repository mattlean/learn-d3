function AxisLeft({ innerWidth, tickOffset = 3, yScale }) {
  return yScale.ticks().map((tickValue) => (
    <g
      key={tickValue}
      transform={`translate(0,${yScale(tickValue)})`}
      className="tick"
    >
      <line x2={innerWidth} />
      <text x={-tickOffset} dy=".32em" style={{ textAnchor: 'end' }}>
        {tickValue}
      </text>
    </g>
  ))
}

export default AxisLeft
