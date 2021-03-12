import React, { useState } from 'react'
import RouteTransitionAnimationContext from '../context/routeTransitionAnimationContext'
import NotificationContext from '../context/notificationContext'
import '../css/base.css'

let App = ({ Component, pageProps }) => {
	let [route, setRoute] = useState('')
	let [exitPage, setExitPage] = useState(false)

	let [showNotification, setShowNotification] = useState(false)
	let [notificationText, setNotificationText] = useState(false)
	let [notificationColor, setNotificationColor] = useState('primary')

	let pageTransitionAnimation = { route, setRoute, exitPage, setExitPage }

	let notification = {
		showNotification,
		setShowNotification,
		notificationText,
		setNotificationText,
		notificationColor,
		setNotificationColor
	}

	return (
		<>
			<RouteTransitionAnimationContext.Provider value={pageTransitionAnimation}>
				<NotificationContext.Provider value={notification}>
					<Component {...pageProps} />
				</NotificationContext.Provider>
			</RouteTransitionAnimationContext.Provider>
		</>
	)
}

export default App
