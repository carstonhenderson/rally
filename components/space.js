import React from 'react'
import { spacing } from '../hay.config'

const Space = ({ size }) => {
  const heightClass = `h-${spacing[size]}`

  return <div className={heightClass}></div>
}

export default Space
