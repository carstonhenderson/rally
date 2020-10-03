import React from 'react'

const Form = ({ onSubmit, method, action, children }) => (
  <form
    onSubmit={onSubmit}
    method={method}
    action={action}
    className="flex flex-col justify-center"
  >
    {children}
  </form>
)

export default Form
