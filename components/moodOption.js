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
      className="flex-1 w-full relative flex justify-between items-center px-6 py-6 text-2xl font-medium"
      onClick={onClick}
    >
      <span className="relative z-20">{moods[mood].text}</span>

      <div
        className={`relative z-20 w-5 h-5 rounded shadow ${
          selected ? `bg-${moods[mood].base}-500` : 'bg-gray-300'
        } `}
      >
        {selected && (
          <svg
            className={`text-${moods[mood].base}-900`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>

      {selected && (
        <motion.div
          layoutId="backgroundColor"
          initial={false}
          animate={{
            backgroundColor: fullConfig.theme.colors[moods[mood].base][300]
          }}
          transition={spring}
          className={`w-full h-full absolute inset-0 z-10 px-4 py-2 rounded shadow`}
          onClick={onClick}
        />
      )}
    </div>
  )
}

export default MoodOption
