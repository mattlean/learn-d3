function FaceContainer({ centerX, centerY, children, height, width }) {
  return (
    <svg width={width} height={height}>
      <g transform={`translate(${centerX},${centerY})`}>{children}</g>
    </svg>
  )
}

export default FaceContainer
