import { useEffect, useMemo, useState } from 'react'
import { csv, csvFormat, csvParse } from 'd3'

const csvUrl =
  'https://gist.githubusercontent.com/mlean-voltaiq/75cb6e488ef76d174591cd7c9125acc7/raw/chartColorPool.csv'

function CSVInfo() {
  const [txt, setTxt] = useState()

  useEffect(() => {
    /* Downloading CSV with fetch */
    // fetch(csvUrl)
    //   .then((res) => res.text())
    //   .then((txt) => setTxt(txt))

    /* Downloading CSV with D3 */
    csv(csvUrl).then((data) => {
      // csv will automatically return the parsed form of the data
      // so if you want the original text/CSV form of it again
      // you need to reformat it with csvFormat
      setTxt(csvFormat(data))
    })
  }, [])

  const data = useMemo(() => {
    if (txt) {
      return csvParse(txt)
    }
    return undefined
  }, [txt])

  if (data) {
    return (
      <>
        <ul>
          <li>{`${Math.round(txt.length / 1024)} kB`}</li>
          <li>{`${data.length} rows`}</li>
          <li>{`${data.columns.length} columns`}</li>
        </ul>
        <pre>{txt}</pre>
      </>
    )
  }

  return <div>Loading...</div>
}

export default CSVInfo
