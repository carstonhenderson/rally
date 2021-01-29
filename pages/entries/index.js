import React, { useState, useEffect } from 'react'
import useNotification from '../../hooks/notification'
import axios from 'axios'
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion'
import BaseView from '../../views/baseView'
import Flex from '../../components/flex'
import ButtonLink from '../../components/buttonLink'
import Button from '../../components/button'
import Text from '../../components/text'
import EntryCard from '../../components/entryCard'

let Index = () => {
	let [entries, setEntries] = useState(null)
	let [error, setError] = useState(false)
	let [expand, setExpand] = useState(false)

	let { notify } = useNotification()

	useEffect(() => {
		axios
			.get(`${process.env.NEXT_PUBLIC_API_PATH}/entries`, {
				headers: {
					Authorization: `Bearer ${window.localStorage.getItem('accessToken')}`
				}
			})
			.then(response => {
				setEntries(response.data.data)
				setError(false)
			})
			.catch(error => {
				setError(error)
			})
	}, [])

	let deleteEntry = id => {
		axios
			.delete(`${process.env.NEXT_PUBLIC_API_PATH}/entries/${id}`, {
				headers: {
					Authorization: `Bearer ${window.localStorage.getItem('accessToken')}`
				}
			})
			.then(response => {
				setExpand(false)
				if (response.status === 200) {
					setEntries(() => entries.filter(entry => entry.id !== id))
					notify('Entry deleted.')
				}
			})
			.catch(() => {
				notify('Something wrong happened... Try deleting again.')
			})
	}

	if (error) {
		return (
			<BaseView title="Entries">
				<div>failed to get entries :(</div>
			</BaseView>
		)
	} else if (!entries) {
		return (
			<BaseView title="Entries">
				<div>getting entries...</div>
			</BaseView>
		)
	}

	return (
		<BaseView title="Entries">
			<Flex direction="col" space="md">
				<Flex justify="between" align="center">
					<Flex space="xs">
						<Text>
							<Text weight="bold">{entries.length}</Text> entries
						</Text>
					</Flex>

					<ButtonLink path="/how-are-you" role="primary" text="Add entry" />
				</Flex>

				<AnimateSharedLayout type="crossfade">
					<Flex direction="col" space="md">
						{entries.map((entry, index) => (
							<div key={entry.id}>
								<EntryCard
									entry={entry}
									layoutId={index}
									expanded={false}
									onClick={() => setExpand(index)}
								/>

								<AnimatePresence>
									{expand === index && (
										<>
											<motion.div
												initial={{ opacity: 0 }}
												animate={{ opacity: 1 }}
												exit={{ opacity: 0 }}
												className="fixed inset-0 h-screen w-screen z-10 bg-gray-900 bg-opacity-50"
											/>

											<div className="fixed inset-0 h-screen w-screen z-20 flex justify-center items-center p-4">
												<Flex direction="col" space="sm" width="full">
													<EntryCard
														entry={entry}
														expanded={true}
														onClick={() => setExpand(false)}
													/>

													<motion.div
														initial={{ opacity: 0, y: 100 }}
														animate={{ opacity: 1, y: 0 }}
														transition={{ type: 'tween' }}
														exit={{ opacity: 0, y: 100 }}
													>
														<div className="rounded shadow p-4 bg-gray-100">
															<Flex
																justify="between"
																constrain="all"
																space="sm"
															>
																<Button
																	role="danger"
																	text="Delete"
																	onClick={() => deleteEntry(entry.id)}
																/>

																<ButtonLink
																	path={`/entries/${entry.id}`}
																	role="secondary"
																	text="Edit"
																/>
															</Flex>
														</div>
													</motion.div>
												</Flex>
											</div>
										</>
									)}
								</AnimatePresence>
							</div>
						))}
					</Flex>
				</AnimateSharedLayout>
			</Flex>

			{/* <div className="text-center">You don't have any entries yet!</div> */}
		</BaseView>
	)
}

export default Index
