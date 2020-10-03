import React from 'react'
import Link from 'next/link'
import Button from './button'

const ButtonLink = ({ path, role, text }) => (
  <Link href={path}>
    <a>
      <Button type="button" role={role} outline text={text} />
    </a>
  </Link>
)

export default ButtonLink
