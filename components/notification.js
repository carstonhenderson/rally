import React from 'react'
import { roles } from '../hay.config'

const Notification = ({ text, role }) => (
	<div className="fixed w-full inset-x-0 p-4">
		<div
			className={`z-10 rounded bg-${roles.background[role]} bg-opacity-90 bg-blur px-4 py-6 text-${roles.text[role]} text-center shadow-2xl`}
		>
			{text}
		</div>
	</div>
)

export default Notification
