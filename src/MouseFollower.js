import { useCallback, useState } from 'react'

const width = 960
const height = 500
const circleRadius = 30
const initMousePos = { x: width / 2, y: height / 2 }

/**
 * A program that follows your mouse with a circle.
 */
function MouseFollower() {
  const [mousePos, setMousePos] = useState(initMousePos)

  const handleMouseMove = useCallback(
    (e) => {
      const { clientX, clientY } = e
      setMousePos({ x: clientX, y: clientY })
    },
    [setMousePos]
  )

  return (
    <svg width={width} height={height} onMouseMove={handleMouseMove}>
      <circle cx={mousePos.x} cy={mousePos.y} r={circleRadius} />
    </svg>
  )
}

export default MouseFollower
