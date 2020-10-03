import React from 'react'
import NextLink from 'next/link'

const Link = ({ path, children }) => (
  <NextLink href={path}>
    <a className="underline text-blue-500">{children}</a>
  </NextLink>
)

export default Link
