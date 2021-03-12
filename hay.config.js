import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from './tailwind.config.js'

const fullConfig = resolveConfig(tailwindConfig)

export const spacing = {
	xs: 2,
	sm: 4,
	md: 8,
	lg: 16,
	xl: 32
}

export const moods = {
	great: {
		text: 'Great',
		color: 'green-500',
		base: 'green',
		raw: fullConfig.theme.colors.green[500]
	},
	good: {
		text: 'Good',
		color: 'teal-500',
		base: 'teal',
		raw: fullConfig.theme.colors.teal[500]
	},
	fine: {
		text: 'Fine',
		color: 'blue-500',
		base: 'blue',
		raw: fullConfig.theme.colors.blue[500]
	},
	bad: {
		text: 'Bad',
		color: 'indigo-500',
		base: 'indigo',
		raw: fullConfig.theme.colors.indigo[500]
	},
	terrible: {
		text: 'Terrible',
		color: 'gray-400',
		base: 'gray',
		raw: fullConfig.theme.colors.gray[400]
	}
}

export const roles = {
	background: {
		primary: 'green-500',
		secondary: 'green-500',
		info: 'purple-500',
		success: 'green-500',
		danger: 'red-500',
		hover: {
			primary: 'green-600',
			secondary: 'green-200',
			info: 'purple-600',
			success: 'green-600',
			danger: 'red-600'
		}
	},
	text: {
		primary: 'white',
		secondary: 'green-500',
		info: 'white',
		success: 'white',
		danger: 'white'
	}
}

export const emotions = {
	positive: [
		'calm',
		'confident',
		'content',
		'eager',
		'ecstatic',
		'engaged',
		'excited',
		'grateful',
		'happy',
		'humorous',
		'inspired',
		'loving',
		'motivated',
		'optimistic',
		'passionate'
	],
	negative: [
		'angry',
		'afraid',
		'annoyed',
		'anxious',
		'ashamed',
		'bored',
		'confused',
		'demoralized',
		'depressed',
		'disappointed',
		'embarrassed',
		'frustrated',
		'guilty',
		'insecure',
		'lonely',
		'sad',
		'stressed',
		'worried'
	]
}
