import React from 'react'

const Checkbox = ({ name, label, checked }) => (
  <>
    <input
      id={name}
      name={name}
      type="checkbox"
      checked={checked}
      className="mr-2"
    />

    <label htmlFor={name}>{label}</label>

    {/* <span role="alert">
          <strong>Error</strong>
        </span> */}
  </>
)

export default Checkbox
