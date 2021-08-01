import BackgroundCircle from './BackgroundCircle'
import Eyes from './Eyes'
import FaceContainer from './FaceContainer'
import Mouth from './Mouth'

function Face({
  centerX,
  centerY,
  eyeOffsetX,
  eyeOffsetY,
  eyeRadius,
  height,
  mouthRadius,
  mouthWidth,
  strokeWidth,
  width,
}) {
  return (
    <FaceContainer
      centerX={centerX}
      centerY={centerY}
      width={width}
      height={height}
    >
      <BackgroundCircle
        radius={centerY - strokeWidth / 2}
        strokeWidth={strokeWidth}
      />
      <Eyes offsetX={eyeOffsetX} offsetY={eyeOffsetY} radius={eyeRadius} />
      <Mouth radius={mouthRadius} width={mouthWidth} />
    </FaceContainer>
  )
}

export default Face
