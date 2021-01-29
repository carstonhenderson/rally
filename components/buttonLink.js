import React, { useContext } from 'react'
import RouteTransitionAnimationContext from '../context/routeTransitionAnimationContext'
import Button from './button'

let ButtonLink = ({ path, role, text }) => {
	let { setRoute, setExitPage } = useContext(RouteTransitionAnimationContext)

	return (
		<a
			onClick={() => {
				setRoute(path)
				setExitPage(true)
			}}
		>
			<Button type="button" role={role} outline text={text} />
		</a>
	)
}

export default ButtonLink
