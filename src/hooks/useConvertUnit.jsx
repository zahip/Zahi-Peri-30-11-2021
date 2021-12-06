import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectedUnit } from 'features/weather/weatherSlice'
import { convertFToC, convertCToF } from 'utils/weather'
import usePrevious from './usePrevious'

const useConvertUnit = (temparature) => {
  const unit = useSelector(selectedUnit)
  const [temp, setTemp] = useState(temparature)
  const prevUnit = usePrevious(unit)

  useEffect(() => {
    if (temp) {
      let convertedTemp
      if (unit !== prevUnit && prevUnit !== undefined) {
        if (unit === 'C') {
          convertedTemp = convertFToC(temp)
        } else {
          convertedTemp = convertCToF(temp)
        }

        setTemp(convertedTemp)
      }
    }
  }, [unit, prevUnit, temp])

  return { temp, unit }
}

export default useConvertUnit
