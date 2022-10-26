import { styled } from '../../styles'

export const HeaderContainer = styled('div', {
  background: '$gray600',
  padding: '2rem 0',
  width: '100%',
  position: 'fixed',
  boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.25)',
})

export const NavContent = styled('nav', {
  display: 'flex',
  justifyContent: 'space-between',
  fontFamily: '$title',
  color: '$gray100',
  maxWidth: '1280px',
  margin: '0 auto',

  ul: {
    display: 'flex',
    gap: '1rem',
    listStyle: 'none',
    fontSize: '$md',
  },

  li: {
    '&.selected': {
      color: '$purple100',
    },

    '&:hover': {
      color: '$white100',
      transform: 'translateY(-2px)',
      transition: 'all 0.2s ease',
    },
  },

  a: {
    textDecoration: 'none',
    lineHeight: 1.6,
    color: 'inherit',
  },
})
