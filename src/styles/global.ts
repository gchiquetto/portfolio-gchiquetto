import { globalCss } from '.'

export const globalStyles = globalCss({
  '*, *::before, *::after': {
    margin: 0,
    padding: 0,
  },

  ':focus': {
    outline: 'none',
    boxShadow: '0 0 0 2px $purple100',
  },

  body: {
    '-webkit-font-smoothing': 'antialiased',
  },

  'body, input, button, textarea': {
    fontFamily: '$text',
    lineHeight: 1.6,
  },
})
