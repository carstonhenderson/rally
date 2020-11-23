import React from 'react'
import Flex from '../flex'
import Text from '../text'
import Button from '../button'
import { moods } from '../../hay.config'

const StepThree = ({ setStepNumber, mood, notes, setNotes, handleClick }) => {
  return (
    <Flex direction="col" space="md" height="full" constrain="1">
      <Text size="4xl" weight="bold">
        What's going on?
      </Text>

      <textarea
        className={`w-full h-full p-4 bg-${moods[mood].base}-400 rounded placeholder-gray-800 resize-none`}
        placeholder="Describe what's happening..."
        value={notes}
        onChange={event => setNotes(event.target.value)}
      ></textarea>

      <div className="rounded shadow p-4 bg-green-100">
        <Flex justify="between" constrain="all" space="sm">
          <Button
            role="secondary"
            text="Back"
            onClick={() => setStepNumber(2)}
          />
          <Button role="primary" text="Save entry" onClick={handleClick} />
        </Flex>
      </div>
    </Flex>
  )
}

export default StepThree
