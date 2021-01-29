import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { motion, AnimatePresence } from 'framer-motion'
import useNotification from '../hooks/notification'
import RouteTransitionAnimationContext from '../context/routeTransitionAnimationContext'
import Notification from '../components/notification'
import NavBar from '../components/navBar'
import useNavBar from '../hooks/navBar'
import Head from 'next/head'

const BaseView = ({ title, noPadding, children }) => {
	let [route, setRoute] = useState('')
	let [exitPage, setExitPage] = useState(false)

	let { showNotification } = useNotification()

	let pageTransitionAnimation = { route, setRoute, exitPage, setExitPage }

	let router = useRouter()

	return (
		<>
			<Head>
				<title>{title}</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="bg-grey-100 text-gray-900">
				<div className="h-screen flex flex-col justify-between font-sans">
					<AnimatePresence>
						{showNotification && (
							<motion.div
								initial={{ opacity: 0, y: -100 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ type: 'tween' }}
								exit={{ opacity: 0, y: -100 }}
							>
								<Notification text={showNotification} role="danger" />
							</motion.div>
						)}
					</AnimatePresence>

					<RouteTransitionAnimationContext.Provider
						value={pageTransitionAnimation}
					>
						<AnimatePresence
							onExitComplete={() => {
								setExitPage(false)
								router.push(route)
							}}
						>
							{exitPage || (
								<>
									<motion.div
										initial={{ opacity: 0 }}
										transition={{ duration: 0.5 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
										className={`container mx-auto flex-1 overflow-auto ${
											noPadding ? '' : 'p-4'
										}`}
									>
										{children}
									</motion.div>
									{useNavBar() && <NavBar />}
								</>
							)}
						</AnimatePresence>
					</RouteTransitionAnimationContext.Provider>
				</div>
			</main>
		</>
	)
}

export default BaseView
