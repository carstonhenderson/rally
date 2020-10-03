import React from 'react'

const Table = ({ layout, children }) => {
  const layoutClass = layout ? `table-${layout}` : ''

  return <table className={`w-screen -mx-4 ${layoutClass}`}>{children}</table>
}

export default Table
