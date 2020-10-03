import React from 'react'
import Link from 'next/link'

const NavBar = () => (
  <nav className="p-4 shadow">
    <ul className="container mx-auto flex justify-between items-center list-reset">
      <li className="w-1/3">
        <Link href="/insights">
          <a className="text-grey-300 text-lg no-underline">Insights</a>
        </Link>
      </li>

      <li className="w-1/3 text-center">
        <Link href="/entries">
          <a className="text-green-500 text-lg no-underline bg-green-100 py-2 px-4 rounded">
            Entries
          </a>
        </Link>
      </li>

      <li className="w-1/3 text-right">
        <Link href="/settings">
          <a className="text-grey-300 text-lg no-underline">Settings</a>
        </Link>
      </li>
    </ul>
  </nav>
)

export default NavBar
