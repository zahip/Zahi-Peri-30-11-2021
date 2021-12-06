import React from 'react'
import Card from '../shared/Card/Card'
import { convertDateToDayName } from '../../utils/date'
import useConvertUnit from 'hooks/useConvertUnit'
import './style.scss'

const FiveDaysItem = ({ item }) => {
  const { temp, unit } = useConvertUnit(item.Temperature.Maximum.Value)
  return (
    <div className="card-item">
      <Card>
        <div>{convertDateToDayName(item.Date)}</div>
        <div>
          <span>{unit === 'F' ? temp : temp.toFixed(1)}</span>
          <span>{unit}</span>
        </div>
      </Card>
    </div>
  )
}

export default FiveDaysItem
