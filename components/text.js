import React from 'react'

const Text = ({ size, align, weight, italic, children }) => {
  const sizeClass = size ? `text-${size}` : ''
  const alignClass = align ? `text-${align}` : ''
  const weightClass = weight ? `font-${weight}` : ''
  const italicClass = italic ? 'italic' : ''

  return (
    <span
      className={`${sizeClass} ${alignClass} ${weightClass} ${italicClass}`}
    >
      {children}
    </span>
  )
}

export default Text
