import React, { useState } from 'react'
import { motion, AnimateSharedLayout } from 'framer-motion'
import { moods } from '../hay.config'
import BaseView from '../views/baseView'
import Text from '../components/text'
import Space from '../components/space'
import Flex from '../components/flex'
import MoodOption from '../components/moodOption'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../tailwind.config.js'

const fullConfig = resolveConfig(tailwindConfig)

const HowAreYou = () => {
  const animatedBackground = [
    moods.great.raw,
    moods.good.raw,
    moods.okay.raw,
    moods.bad.raw,
    moods.terrible.raw,
    moods.great.raw
  ]

  const infiniteTransition = {
    loop: Infinity,
    duration: 10
  }

  const [selected, setSelected] = useState(null)
  const [background, setBackground] = useState(animatedBackground)
  const [transition, setTransition] = useState(infiniteTransition)
  const keys = Object.keys(moods)

  const animate = { backgroundColor: background }

  return (
    <BaseView title="Entries - Create">
      <motion.div
        className="w-screen h-screen -m-4"
        animate={animate}
        transition={transition}
      >
        <div className="p-4 w-full h-full">
          <Flex direction="col" space="md" height="full" constrain="1">
            <Text size="4xl" weight="bold">
              How are you?
            </Text>

            <AnimateSharedLayout className="h-full">
              <Flex direction="col" space="sm" height="full" constrain="all">
                {keys.map(mood => (
                  <MoodOption
                    key={mood}
                    mood={mood}
                    selected={selected === mood}
                    onClick={() => {
                      setSelected(mood)
                      setBackground(moods[mood].raw)
                      setTransition({ duration: 0.5 })
                    }}
                  />
                ))}
              </Flex>
            </AnimateSharedLayout>
          </Flex>
        </div>
      </motion.div>
    </BaseView>
  )
}

export default HowAreYou
