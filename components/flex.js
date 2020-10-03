import React, { Children } from 'react'
import { spacing } from '../hay.config'

const Flex = ({
  children,
  direction,
  justify,
  align,
  space,
  height,
  constrain
}) => {
  const directionClass = direction ? `flex-${direction}` : ''
  const justifyClass = justify ? `justify-${justify}` : ''
  const alignClass = align ? `items-${align}` : ''
  const heightClass = height ? `h-${height}` : ''
  const constrainClass =
    direction === 'col' ? 'flex-1 min-h-0' : 'flex-1 min-w-0'

  let spaceClass = direction === 'col' ? 'mb' : 'mr'

  spaceClass = space ? `${spaceClass}-${spacing[space]}` : ''

  return (
    <div
      className={`flex ${directionClass} ${justifyClass} ${alignClass} ${heightClass}`}
    >
      {Children.map(children, (child, index) => (
        <div
          className={`${index === children.length - 1 ? '' : spaceClass} ${
            constrain == index ? constrainClass : ''
          }
            ${constrain === 'all' ? constrainClass : ''}
          }`}
          key={index}
        >
          {child}
        </div>
      ))}
    </div>
  )
}

export default Flex
