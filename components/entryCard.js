import React from 'react'
import { motion } from 'framer-motion'
import { moods } from '../hay.config'
import Flex from './flex'
import Text from './text'

let EntryCard = ({ entry, expanded, onClick }) => (
	<motion.div
		layoutId={entry.id}
		key={entry.id}
		className={`px-4 py-2 w-full rounded shadow bg-${moods[entry.mood].color}`}
		onClick={onClick}
	>
		<Flex direction="col" space="xs">
			<Flex justify="center">
				<Text size="xs" italic>
					{new Date(entry.created_at).toLocaleDateString('en-US', {
						day: 'numeric',
						month: 'long',
						year: 'numeric'
					})}
				</Text>
			</Flex>

			<Text size="sm">
				{expanded
					? entry.notes
					: entry.notes.length > 50
					? `${entry.notes.substring(0, 150)}...`
					: entry.notes}
			</Text>

			{expanded && entry.emotions.length > 0 && (
				<div className="mb-1">
					<Flex space="xs">
						{entry.emotions.map(({ emotion, index }) => (
							<div
								className={`flex items-center px-1 py-1 rounded bg-${
									moods[entry.mood].base
								}-300`}
								key={emotion}
							>
								<Text size="xs">{emotion}</Text>
							</div>
						))}
					</Flex>
				</div>
			)}
		</Flex>
	</motion.div>
)

export default EntryCard
