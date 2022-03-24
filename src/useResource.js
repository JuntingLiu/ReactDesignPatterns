import { useState, useEffect } from "react";
import axios from 'axios'

const useResource = (resourceUrl) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    (async () => {
      const response = await axios.get(resourceUrl)
      setData(response.data)
    })()
  }, [resourceUrl])

  return data
}

export default useResource