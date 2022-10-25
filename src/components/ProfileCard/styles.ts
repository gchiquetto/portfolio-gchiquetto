import { styled } from '../../styles/index'

export const ProfileCardContainer = styled('div', {
  maxWidth: '17.5rem',
  borderRadius: 10,
  background: '$gray800',
  boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.25)',
  padding: '2rem 1.25rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1.5rem',
})

export const ProfileCardHeader = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: '$white100',
  gap: '0.625rem',

  img: {
    objectFit: 'cover',
    width: '6.25rem',
    height: '6.25rem',
    borderRadius: 6,
  },

  h2: {
    fontFamily: '$title',
    fontWeight: '$bold',

    fontSize: '$sm',
  },

  span: {
    background: '$gray600',
    padding: '5px 10px',
    borderRadius: 8,
  },
})

export const ProfileCardBody = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  padding: '0.5rem 0',
  borderTop: '1px solid $gray600',

  div: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.625rem',

    span: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '$purple100',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      height: '2.25rem',
      width: '2.25rem',
    },

    p: {
      color: '$white100',
    },
  },
})

export const ProfileCardFooter = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  alignItems: 'center',
  width: '100%',

  a: {
    textDecoration: 'none',
    color: '$gray300',

    '&:hover': {
      borderColor: '$purple100',
      color: '$purple100',
      transition: 'all 0.2s ease',
    },
  },

  '.cv_download_button': {
    padding: '5px 2rem',
    border: '1px solid $gray300',
    borderRadius: 10,
  },

  div: {
    display: 'flex',
    gap: '0.625rem',
  },

  '.social-media': {
    lineHeight: 0,
  },
})
