import { styled } from '../../../../styles'

export const CertificationCardContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
  padding: '1rem',
  borderRadius: 10,
  border: '2px solid $purple600',
  color: '$gray300',

  h4: {
    color: '$gray100',
  },

  a: {
    textDecoration: 'none',
    color: 'inherit',
  },
})
