import React from 'react'

const TableData = ({ align, grow, truncate, children }) => {
  const alignClass = align ? `text-${align}` : ''
  const truncateClass = truncate ? 'truncate' : ''
  const flexGrowClass = grow ? `flex-grow-${grow}` : ''

  return (
    <td
      style={{ flexBasis: 0 }}
      className={`py-4 flex-1 ${alignClass} ${flexGrowClass} ${truncateClass}`}
    >
      {children}
    </td>
  )
}

export default TableData
