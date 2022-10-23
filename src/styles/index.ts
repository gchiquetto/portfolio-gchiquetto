import { createStitches } from '@stitches/react'

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      white100: '#FEFFFB',

      gray100: '#E8E8E7',
      gray300: '#A09FA1',
      gray600: '#37363B',
      gray800: '#212024',
      gray900: '#121116',

      purple100: '#A58BE7',
      purple600: '#493B75',
    },
    fonts: {
      title: 'Roboto Slab',
      text: 'Open Sans',
    },
    fontWeights: {
      regular: 400,
      bold: 700,
    },
    fontSizes: {
      title: '2rem',
      lg: '1.5rem',
      md: '1.25rem',
      sm: '1.125rem',
      xsm: '1rem',
    },
  },
})
