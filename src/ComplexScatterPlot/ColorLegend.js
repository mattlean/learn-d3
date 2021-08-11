function ColorLegend({
  colorScale,
  fadeOpacity,
  hoveredValue,
  onHover,
  tickSpacing = 20,
  tickSize = 10,
  tickTextOffset = 20,
}) {
  return colorScale.domain().map((domainValue, i) => (
    <g
      transform={`translate(0,${i * tickSpacing})`}
      onMouseEnter={() => onHover(domainValue)}
      onMouseOut={() => onHover(null)}
      opacity={hoveredValue && domainValue !== hoveredValue ? fadeOpacity : 1}
      className="tick"
    >
      <circle fill={colorScale(domainValue)} r={tickSize} />
      <text dy=".32em" x={tickTextOffset}>
        {domainValue}
      </text>
    </g>
  ))
}

export default ColorLegend
