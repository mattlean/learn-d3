function Marks({
  circleRadius,
  colorScale,
  colorValue,
  data,
  tooltipFormat,
  xValue,
  xScale,
  yValue,
  yScale,
}) {
  return data.map((d) => (
    <circle
      cx={xScale(xValue(d))}
      cy={yScale(yValue(d))}
      fill={colorScale(colorValue(d))}
      r={circleRadius}
    >
      <title>{tooltipFormat(xValue(d))}</title>
    </circle>
  ))
}

export default Marks
