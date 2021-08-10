function Marks({ data, tooltipFormat, xValue, xScale, yValue, yScale }) {
  return data.map((d) => (
    <rect
      key={yValue(d)}
      x={0}
      y={yScale(yValue(d))}
      width={xScale(xValue(d))}
      height={yScale.bandwidth()}
      className="mark"
    >
      <title>{tooltipFormat(xValue(d))}</title>
    </rect>
  ))
}

export default Marks
