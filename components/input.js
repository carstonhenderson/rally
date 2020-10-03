import React from 'react'

const Input = ({
  name,
  label,
  type,
  value,
  onChange,
  required,
  autoFocus,
  placeholder,
  defaultValue,
  disabled,
  error,
}) => {
  const bgClass = disabled ? 'bg-gray-300' : 'bg-gray-200'
  const errorClass = error ? 'border border-red-500' : ''

  return (
    <>
      <label htmlFor={name} className="block font-bold mb-2">
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className={`w-full shadow rounded px-4 py-2 ${bgClass} ${errorClass}`}
        required={required}
        autoFocus={autoFocus}
        placeholder={placeholder}
        default={defaultValue}
        disabled={disabled}
      />

      {/* <span role="alert">
          <strong>Error</strong>
        </span> */}
    </>
  )
}

export default Input
