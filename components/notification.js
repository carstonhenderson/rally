import React from 'react'
import { roles } from '../hay.config'

const Notification = ({ text, role }) => (
  <div
    className={`-mt-4 -mx-4 bg-${roles.background[role]} p-4 text-${roles.text[role]} text-center`}
  >
    {text}
  </div>
)

export default Notification
