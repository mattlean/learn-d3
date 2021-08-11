function Marks({
  circleRadius,
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
      r={circleRadius}
      className="mark"
    >
      <title>{tooltipFormat(xValue(d))}</title>
    </circle>
  ))
}

export default Marks
