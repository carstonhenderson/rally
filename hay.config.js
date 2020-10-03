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
    text: '😁 Great',
    color: 'purple-500',
    base: 'purple',
    raw: fullConfig.theme.colors.purple[500]
  },
  good: {
    text: '🙂 Good',
    color: 'green-500',
    base: 'green',
    raw: fullConfig.theme.colors.green[500]
  },
  okay: {
    text: '😐 Okay',
    color: 'yellow-500',
    base: 'yellow',
    raw: fullConfig.theme.colors.yellow[500]
  },
  bad: {
    text: '🙁 Bad',
    color: 'orange-500',
    base: 'orange',
    raw: fullConfig.theme.colors.orange[500]
  },
  terrible: {
    text: '😔 Terrible',
    color: 'red-500',
    base: 'red',
    raw: fullConfig.theme.colors.red[500]
  }
}

export const roles = {
  background: {
    primary: 'green-500',
    secondary: 'green-100',
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
    secondary: 'blue-600',
    info: 'white',
    success: 'white',
    danger: 'white'
  }
}
