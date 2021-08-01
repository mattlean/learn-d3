import { arc } from "d3"
import "./App.css"

const width = 960
const height = 500
const centerX = width / 2
const centerY = height / 2
const strokeWidth = 20
const eyeOffsetX = 90
const eyeOffsetY = 110
const eyeRadius = 40
const mouthWidth = 20
const mouthRadius = 140

const mouthArc = arc()
  .innerRadius(mouthRadius)
  .outerRadius(mouthRadius + mouthWidth)
  .startAngle(Math.PI / 2)
  .endAngle((Math.PI * 3) / 2)

function App() {
  return (
    <svg width={width} height={height}>
      <g transform={`translate(${centerX},${centerY})`}>
        <circle
          r="245"
          fill="yellow"
          stroke="black"
          strokeWidth={strokeWidth}
        />
        <circle cx={eyeOffsetX} cy={-eyeOffsetY} r={eyeRadius} />
        <circle cx={-eyeOffsetX} cy={-eyeOffsetY} r={eyeRadius} />
        <path d={mouthArc()} />
      </g>
    </svg>
  )
}

export default App
