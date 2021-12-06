import React from 'react'
import MuiCard from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

const Card = ({ children }) => {
  return (
    <MuiCard>
      <CardContent>{children}</CardContent>
    </MuiCard>
  )
}

export default Card
