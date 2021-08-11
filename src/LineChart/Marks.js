import { curveNatural, line } from 'd3'

function Marks({
  circleRadius,
  data,
  tooltipFormat,
  xValue,
  xScale,
  yValue,
  yScale,
}) {
  return (
    <g className="marks">
      <path
        d={line()
          .x((d) => xScale(xValue(d)))
          .y((d) => yScale(yValue(d)))
          .curve(curveNatural)(data)}
        fill="none"
        stroke="black"
      />
      {data.map((d) => (
        <circle
          cx={xScale(xValue(d))}
          cy={yScale(yValue(d))}
          r={circleRadius}
          className="mark"
        >
          <title>{tooltipFormat(xValue(d))}</title>
        </circle>
      ))}
    </g>
  )
}

export default Marks
