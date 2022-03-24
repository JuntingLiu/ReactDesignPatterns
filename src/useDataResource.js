import { useState, useEffect } from "react";

const useDataResource = getResourceFunc => {
  const [data, setData] = useState(null)

  useEffect(() => {
    (async () => {
      const result = await getResourceFunc();
      setData(result)
    })()
  }, [getResourceFunc])

  return data
}

export default useDataResource