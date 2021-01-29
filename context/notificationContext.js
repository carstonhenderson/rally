import { createContext } from 'react'

let NotificationContext = createContext({
	showNotification: false,
	setShowNotification: () => {}
})

export default NotificationContext
