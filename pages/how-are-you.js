import React, { useState, useContext } from 'react'
import { motion } from 'framer-motion'
import BaseView from '../views/baseView'
import axios from 'axios'
import RouteTransitionAnimationContext from '../context/routeTransitionAnimationContext'
import useNotification from '../hooks/notification'
import StepOne from '../components/howAreYou/stepOne'
import StepTwo from '../components/howAreYou/stepTwo'
import StepThree from '../components/howAreYou/stepThree'

let HowAreYou = () => {
	let [stepNumber, setStepNumber] = useState(1)
	let [mood, setMood] = useState(null)
	let [selectedEmotions, setSelectedEmotions] = useState({
		positive: [],
		negative: []
	})
	let [notes, setNotes] = useState('')
	let [background, setBackground] = useState(null)
	let [transition, setTransition] = useState(null)

	let animate = { backgroundColor: background }

	let { setNotificationText, setNotificationColor } = useNotification()
	let { setRoute, setExitPage } = useContext(RouteTransitionAnimationContext)

	let save = () => {
		axios
			.post(
				`${process.env.NEXT_PUBLIC_API_PATH}/entries`,
				{
					mood: mood,
					emotions: selectedEmotions.positive.concat(selectedEmotions.negative),
					notes: notes
				},
				{
					headers: {
						Authorization: `Bearer ${window.localStorage.getItem(
							'accessToken'
						)}`
					}
				}
			)
			.then(() => {
				setNotificationText('Entry created!')
				setNotificationColor('primary')
				setRoute('/entries')
				setExitPage(true)
			})
	}

	return (
		<BaseView title="Entries - Create">
			<motion.div
				className="w-screen h-screen -m-4"
				animate={animate}
				transition={transition}
			>
				<div className="p-4 w-full h-full">
					{stepNumber === 1 && (
						<StepOne
							setStepNumber={setStepNumber}
							selectedMood={mood}
							background={background}
							setMood={setMood}
							setBackground={setBackground}
							setTransition={setTransition}
						/>
					)}
					{stepNumber === 2 && (
						<StepTwo
							setStepNumber={setStepNumber}
							mood={mood}
							selectedEmotions={selectedEmotions}
							setSelectedEmotions={setSelectedEmotions}
						/>
					)}
					{stepNumber === 3 && (
						<StepThree
							setStepNumber={setStepNumber}
							mood={mood}
							notes={notes}
							setNotes={setNotes}
							handleClick={save}
						/>
					)}
				</div>
			</motion.div>
		</BaseView>
	)
}

export default HowAreYou
