import { useContext } from 'react'
import NotificationContext from '../context/notificationContext'

const useNotification = () => {
	let { showNotification, setShowNotification } = useContext(
		NotificationContext
	)

	return {
		showNotification: showNotification,
		notify: text => {
			setShowNotification(text)
			setTimeout(() => setShowNotification(false), 3000)
		}
	}
}

export default useNotification
