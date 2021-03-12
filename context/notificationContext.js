import { createContext } from 'react'

let NotificationContext = createContext({
	showNotification: false,
	setShowNotification: () => {},
	notificationText: false,
	setNotificationText: () => {},
	notificationColor: 'primary',
	setNotificationColor: () => {}
})

export default NotificationContext
