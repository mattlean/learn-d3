import Face from './Face'
import './App.css'

const width = 960
const height = 500

function App() {
  return (
    <Face
      centerX={width / 2}
      centerY={height / 2}
      eyeOffsetX={90}
      eyeOffsetY={110}
      eyeRadius={40}
      height={height}
      mouthRadius={140}
      mouthWidth={20}
      strokeWidth={20}
      width={width}
    />
  )
}

export default App
