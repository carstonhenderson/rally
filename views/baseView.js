import React, { useContext } from 'react'
import { useRouter } from 'next/router'
import { motion, AnimatePresence } from 'framer-motion'
import useNotification from '../hooks/notification'
import RouteTransitionAnimationContext from '../context/routeTransitionAnimationContext'
import Notification from '../components/notification'
import NavBar from '../components/navBar'
import useNavBar from '../hooks/navBar'
import Head from 'next/head'

const BaseView = ({ title, noPadding, children }) => {
	let { route, exitPage, setExitPage } = useContext(
		RouteTransitionAnimationContext
	)

	let {
		showNotification,
		notificationText,
		notificationColor,
		notify
	} = useNotification()

	let router = useRouter()

	return (
		<>
			<Head>
				<title>{title}</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="bg-grey-100 text-gray-900">
				<div className="h-screen flex flex-col justify-between font-sans">
					<AnimatePresence
						onExitComplete={() => {
							setExitPage(false)
							router.push(route)
						}}
					>
						{exitPage || (
							<>
								<AnimatePresence>
									{showNotification && (
										<motion.div
											initial={{ opacity: 0, y: -100 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ type: 'tween' }}
											exit={{ opacity: 0, y: -100 }}
										>
											<Notification
												text={notificationText}
												role={notificationColor}
											/>
										</motion.div>
									)}
								</AnimatePresence>

								<motion.div
									initial={{ opacity: 0 }}
									transition={{ duration: 0.5 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									onAnimationComplete={() => {
										notificationText &&
											notify(notificationText, notificationColor)
									}}
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
				</div>
			</main>
		</>
	)
}

export default BaseView
