function AxisLeft({ yScale }) {
  return yScale.domain().map((tickValue) => (
    <g key={tickValue} className="tick">
      <text
        x={-3}
        y={yScale(tickValue) + yScale.bandwidth() / 2}
        dy=".32em"
        style={{ textAnchor: 'end' }}
      >
        {tickValue}
      </text>
    </g>
  ))
}

export default AxisLeft
