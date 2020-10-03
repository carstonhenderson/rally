import React from 'react'

const TextArea = ({ placeholder, disabled, error }) => {
  const bgClass = disabled ? 'bg-gray-300' : 'bg-gray-200'
  const errorClass = error ? 'border border-red-500' : ''

  return (
    <textarea
      placeholder={placeholder}
      className={`w-full shadow rounded px-4 py-2 ${bgClass} ${errorClass}`}
    ></textarea>
  )
}

export default TextArea
