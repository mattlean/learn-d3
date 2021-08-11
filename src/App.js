// import BarChart from './BarChart'
// import CSVInfo from './CSVInfo'
import LineChart from './LineChart'
// import ScatterPlot from './ScatterPlot'
// import RadialColorBurst from './RadialColorBurst'

// import Face from './Face'
// import MouseFollower from './MouseFollower'
import './App.css'
// import { range } from 'd3'

// const width = 150
// const height = 150

// const array = range(36)

function App() {
  return <LineChart />
  // return <ScatterPlot />
  // return <BarChart />
  // return <RadialColorBurst />
  // return <MouseFollower />
  // return <CSVInfo />
  // return array.map(() => (
  //   <Face
  //     centerX={width / 2}
  //     centerY={height / 2}
  //     eyeOffsetX={20 + Math.random() * 9}
  //     eyeOffsetY={20 + Math.random() * 15}
  //     eyeRadius={5 + Math.random() * 10}
  //     height={height}
  //     mouthRadius={30 + Math.random() * 10}
  //     mouthWidth={7 + Math.random() * 9}
  //     strokeWidth={6 + Math.random() * 3}
  //     width={width}
  //   />
  // ))
}

export default App
