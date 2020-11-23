import React from 'react'
import Text from '../text'
import Flex from '../flex'
import EmotionOption from '../emotionOption'
import Button from '../button'
import { emotions } from '../../hay.config'

const StepTwo = ({
  setStepNumber,
  mood,
  selectedEmotions,
  setSelectedEmotions
}) => {
  const setPositiveEmotions = emotion => {
    setSelectedEmotions(() => {
      return selectedEmotions.positive.includes(emotion)
        ? {
            positive: selectedEmotions.positive.filter(
              value => value !== emotion
            ),
            negative: selectedEmotions.negative
          }
        : {
            positive: [...selectedEmotions.positive, emotion],
            negative: selectedEmotions.negative
          }
    })
  }

  const setNegativeEmotions = emotion => {
    setSelectedEmotions(() => {
      return selectedEmotions.negative.includes(emotion)
        ? {
            positive: selectedEmotions.positive,
            negative: selectedEmotions.negative.filter(
              value => value !== emotion
            )
          }
        : {
            positive: selectedEmotions.positive,
            negative: [...selectedEmotions.negative, emotion]
          }
    })
  }

  return (
    <div className="w-screen h-screen -m-4">
      <div className="p-4 w-full h-full">
        <Flex direction="col" space="md" height="full" constrain="1">
          <Text size="4xl" weight="bold">
            What do you feel?
          </Text>

          <div className="flex flex-wrap justify-evenly h-full overflow-scroll">
            <Flex direction="col" space="sm">
              <Text size="xl">Positive</Text>

              <Flex space="sm" wrap>
                {emotions.positive.map((emotion, index) => (
                  <EmotionOption
                    key={emotion}
                    emotion={emotion}
                    mood={mood}
                    selected={selectedEmotions.positive.includes(index + 1)}
                    onClick={() => setPositiveEmotions(index + 1)}
                  />
                ))}
              </Flex>
            </Flex>

            <Flex direction="col" space="sm">
              <Text size="xl">Negative</Text>

              <Flex space="sm" wrap>
                {emotions.negative.map(emotion => (
                  <EmotionOption
                    key={emotion}
                    emotion={emotion}
                    mood={mood}
                    selected={selectedEmotions.negative.includes(emotion)}
                    onClick={() => setNegativeEmotions(emotion)}
                  />
                ))}
              </Flex>
            </Flex>
          </div>

          <div className="rounded shadow p-4 bg-green-100">
            <Flex justify="between" constrain="all" space="sm">
              <Button
                role="secondary"
                text="Back"
                onClick={() => setStepNumber(1)}
              />

              <Button
                role="secondary"
                text="Next"
                onClick={() => setStepNumber(3)}
              />
            </Flex>
          </div>
        </Flex>
      </div>
    </div>
  )
}

export default StepTwo
