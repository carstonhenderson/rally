import { createContext } from 'react'

let RouteTransitionAnimationContext = createContext({
	route: '/',
	setRoute: () => {},
	exitPage: false,
	setExitPage: () => {}
})

export default RouteTransitionAnimationContext
