import { styled } from '../../styles'

export const AboutContainer = styled('div', {
  display: 'flex',
  gap: '1.5rem',
  alignItems: 'flex-start',
  marginTop: '5rem',
  maxWidth: '1280px',
  margin: '5rem auto 0',
})

export const AboutContent = styled('main', {
  background: '$gray800',
  boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.25)',
  borderRadius: 10,
  padding: '2rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
})

export const AboutDescription = styled('div', {
  h2: {
    marginBottom: '1.5rem',
    color: '$gray100',
    fontWeight: '$bold',
    fontSize: '$lg',
    fontFamily: '$title',
  },

  p: {
    marginBottom: '1rem',
    fontSize: '$sm',
    color: '$gray300',
  },
})

export const AboutFieldsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',

  h3: {
    color: '$gray100',
    fontFamily: '$title',
    fontSize: '$md',
  },
})

export const AboutFields = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  gap: '0.625rem',

  div: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.5rem',

    span: {
      width: '3rem',
      height: '3rem',
      borderRadius: '50%',
      background: '$purple600',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0.5rem',

      svg: {
        color: '$gray100',
      },
    },

    strong: {
      color: '$gray100',
      fontSize: 'sm',
    },

    p: {
      color: '$gray300',
      textAlign: 'center',
    },
  },
})
