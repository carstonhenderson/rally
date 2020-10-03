import React from 'react'

const TableHeader = ({ children }) => (
  <thead className="border-b border-gray-500 block w-screen px-4">
    {children}
  </thead>
)

export default TableHeader
