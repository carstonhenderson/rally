import React from 'react'
import { roles } from '../hay.config'

const Notification = ({ text, role }) => (
	<div className="absolute w-full inset-x-0">
		<div
			className={`bg-${roles.background[role]} px-4 py-6 text-${roles.text[role]} text-center shadow-2xl`}
		>
			{text}
		</div>
	</div>
)

export default Notification
