import React from 'react'
import NavBar from '../components/navBar'
import useNavBar from '../hooks/navBar'
import Head from 'next/head'

const BaseView = ({ title, noPadding, children }) => (
  <>
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className="bg-grey-100 text-gray-900">
      <div className="h-screen flex flex-col justify-between font-sans">
        <div
          className={`container mx-auto flex-1 overflow-auto ${
            noPadding ? '' : 'p-4'
          }`}
        >
          {children}
        </div>
        {useNavBar() && <NavBar />}
      </div>
    </main>
  </>
)

export default BaseView
