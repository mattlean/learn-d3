import { csv } from 'd3'
import { useEffect, useState } from 'react'

const csvUrl = `${process.env.PUBLIC_URL}/data/week_temperature_sf.csv`

const useData = () => {
  const [data, setData] = useState()

  useEffect(() => {
    const row = (d) => {
      d.temperature = +d.temperature
      d.timestamp = new Date(d.timestamp)
      return d
    }
    csv(csvUrl, row).then(setData)
  }, [])

  return data
}

export default useData
