import React from 'react'
import Link from 'next/link'

const InfoBar = () => (
  <nav className="p-4 bg-green-500">
    <div className="container mx-auto flex justify-between items-center">
      <Link href="/">
        <a className="text-grey-300 text-lg font-bold no-underline">HAY</a>
      </Link>

      <p className="text-grey-300">View Title</p>
    </div>
  </nav>
)

export default InfoBar
