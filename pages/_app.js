import React, { useState } from 'react'
import NotificationContext from '../context/notificationContext'
import '../css/base.css'

let App = ({ Component, pageProps }) => {
	let [showNotification, setShowNotification] = useState(false)
	let notification = { showNotification, setShowNotification }

	return (
		<>
			<NotificationContext.Provider value={notification}>
				<Component {...pageProps} />
			</NotificationContext.Provider>
		</>
	)
}

export default App
