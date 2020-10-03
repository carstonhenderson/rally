import React from 'react'

const Select = ({
  name,
  label,
  multiple,
  required,
  autoFocus,
  disabled,
  error,
  children,
}) => {
  const bgClass = disabled ? 'bg-gray-300' : 'bg-gray-200'
  const errorClass = error ? 'border border-red-500' : ''

  return (
    <>
      {label && (
        <label htmlFor={name} className="block font-bold mb-2">
          {label}
        </label>
      )}

      <select
        id={name}
        name={name}
        multiple={multiple}
        className={`w-full shadow rounded px-4 py-2 ${bgClass} ${errorClass}`}
        required={required}
        autoFocus={autoFocus}
        disabled={disabled}
      >
        {children}
      </select>
    </>
  )
}

export default Select
