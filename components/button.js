import React from 'react'
import { roles } from '../hay.config'

const Button = ({ type, role, text }) => {
  // const bgClass = `bg-${roles.background[role]}`
  // const textClass = `text-${roles.text[role]}`
  // const hoverClass = outline
  //   ? `hover:bg-${roles.background[role]} hover:text-white`
  //   : ''

  return (
    <button
      type={type}
      className={`px-4 py-2 rounded shadow w-full text-center 
        bg-${roles.background[role]} text-${roles.text[role]} hover:bg-${roles.background.hover[role]}`}
    >
      {text}
    </button>
  )
}

export default Button
