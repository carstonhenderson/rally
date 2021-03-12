import { useContext } from 'react'
import NotificationContext from '../context/notificationContext'

const useNotification = () => {
	let {
		showNotification,
		setShowNotification,
		notificationText,
		setNotificationText,
		notificationColor,
		setNotificationColor
	} = useContext(NotificationContext)

	return {
		showNotification: showNotification,
		setShowNotification: setShowNotification,
		notificationText: notificationText,
		setNotificationText: setNotificationText,
		notificationColor: notificationColor,
		setNotificationColor: setNotificationColor,
		notify: (text, color) => {
			setShowNotification(true)
			setNotificationText(text)
			setNotificationColor(color)
			setTimeout(() => {
				setShowNotification(false), 3000
				setNotificationText(false)
				setNotificationColor('primary')
			}, 3000)
		}
	}
}

export default useNotification
