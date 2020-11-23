import React from 'react'
import { AnimateSharedLayout } from 'framer-motion'
import { moods } from '../../hay.config'
import Text from '../text'
import Flex from '../flex'
import MoodOption from '../moodOption'
import Button from '../button'
import ButtonLink from '../buttonLink'

const StepOne = ({
  setStepNumber,
  selectedMood,
  setMood,
  setBackground,
  setTransition
}) => {
  const keys = Object.keys(moods)

  return (
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
              selected={selectedMood === mood}
              onClick={() => {
                setMood(mood)
                setBackground(moods[mood].raw)
                setTransition({ duration: 0.5 })
              }}
            />
          ))}
        </Flex>
      </AnimateSharedLayout>

      <div className="rounded shadow p-4 bg-gray-100">
        <Flex justify="between" constrain="all" space="sm">
          <ButtonLink path="/entries" role="danger" text="Discard entry" />
          <Button
            role="secondary"
            text="Next"
            onClick={() => setStepNumber(2)}
          />
        </Flex>
      </div>
    </Flex>
  )
}

export default StepOne
