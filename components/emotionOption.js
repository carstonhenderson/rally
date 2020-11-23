import React from 'react'
import { motion } from 'framer-motion'
import { moods } from '../hay.config'

const EmotionOption = ({ emotion, mood, onClick, selected }) => {
  const bgClass = selected
    ? `bg-${moods[mood].base}-400`
    : `bg-${moods[mood].base}-600`

  return (
    <motion.button
      whileTap={{ scale: 0.8 }}
      transition={{ duration: 0.05 }}
      className={`rounded px-2 py-1 mb-4 ${bgClass}`}
      value={emotion}
      onClick={onClick}
    >
      {emotion}
    </motion.button>
  )
}

export default EmotionOption
