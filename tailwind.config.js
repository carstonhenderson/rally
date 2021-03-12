const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: colors.black,
			white: colors.white,
			gray: colors.gray,
			green: colors.green,
			indigo: colors.indigo,
			red: colors.rose,
			blue: colors.blue,
			teal: colors.teal,
			yellow: colors.amber
		},
		extend: {
			fontFamily: {
				sans: ['Inter', ...defaultTheme.fontFamily.sans]
			},
			flexGrow: {
				'2': 2
			}
		}
	}
}
