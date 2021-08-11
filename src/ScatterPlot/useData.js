import { csv } from 'd3'
import { useEffect, useState } from 'react'

const csvUrl = `${process.env.PUBLIC_URL}/data/iris.csv`

const useData = () => {
  const [data, setData] = useState()

  useEffect(() => {
    const row = (d) => {
      d.sepal_length = +d.sepal_length
      d.sepal_width = +d.sepal_width
      d.petal_length = +d.petal_length
      d.petal_width = +d.petal_width
      return d
    }
    csv(csvUrl, row).then(setData)
  }, [])

  return data
}

export default useData
