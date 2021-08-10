import { csv } from 'd3'
import { useEffect, useState } from 'react'

const csvUrl = `${process.env.PUBLIC_URL}/data/UN_Population_2019.csv`

const useData = () => {
  const [data, setData] = useState()

  useEffect(() => {
    const row = (d) => {
      d.Population = +d['2020']
      return d
    }
    csv(csvUrl, row).then((data) => setData(data.slice(0, 10)))
  }, [])

  return data
}

export default useData
