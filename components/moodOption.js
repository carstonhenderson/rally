import React from 'react'
import { motion } from 'framer-motion'
import { moods } from '../hay.config'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../tailwind.config.js'

const fullConfig = resolveConfig(tailwindConfig)

const MoodOption = ({ onClick, mood, selected }) => {
  const spring = {
    type: 'spring',
    stiffness: 500,
    damping: 30
  }

  return (
    <div
      className="flex-1 w-full relative px-6 py-6 text-2xl font-medium"
      onClick={onClick}
    >
      <span className="relative z-20">{moods[mood].text}</span>

      {selected && (
        <motion.div
          layoutId="backgroundColor"
          initial={false}
          animate={{
            backgroundColor: fullConfig.theme.colors[moods[mood].base][300]
          }}
          transition={spring}
          className={`w-full h-full absolute inset-0 z-10 px-4 py-2 rounded`}
          onClick={onClick}
        />
      )}
    </div>
  )
}

export default MoodOption
