import React from 'react'

const TableRow = ({ align, children }) => {
  const alignClass = align ? `text-${align}` : ''

  return (
    <tr className="border-b border-gray-500 w-full flex justify-between px-4">
      {children}
    </tr>
  )
}

export default TableRow
