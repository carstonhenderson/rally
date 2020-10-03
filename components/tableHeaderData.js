import React from 'react'

const TableHeaderData = ({ align, children }) => {
  const alignClass = align ? `text-${align}` : ''

  return <th className={`flex-1 ${alignClass}`}>{children}</th>
}

export default TableHeaderData
