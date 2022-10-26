import { styled } from '../../styles'

export const ResumeContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  marginTop: '5rem',
  width: '100%',
  maxWidth: '1280px',
  margin: '8rem auto 0',
  background: '$gray800',
  boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.25)',
  borderRadius: 10,
  padding: '2rem',

  h2: {
    color: '$gray100',
    fontWeight: '$bold',
    fontSize: '$lg',
    fontFamily: '$title',
  },

  h3: {
    color: '$gray100',
    fontFamily: '$title',
    fontSize: '$md',
  },
})

export const ResumeOverview = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
})

export const EducationContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',

  '.education-content': {
    color: '$gray300',
    display: 'grid',
    gridTemplateColumns: '0.5fr min-content 1fr',
    gap: '0.75rem',
    fontSize: '$xxsm',

    'div:first-child': {
      textAlign: 'end',
    },

    h4: {
      color: '$gray100',
      fontSize: '$xsm',
      maxWidth: '12rem',
    },

    '.divider': {
      width: 1,
      background: '$gray600',
      position: 'relative',

      '&::before': {
        content: '',
        width: '1rem',
        height: '1rem',
        borderRadius: '50%',
        background: '$purple600',
        opacity: 0.75,
        position: 'absolute',
        top: '0.5rem',
        left: '-0.5rem',
      },

      '&::after': {
        content: '',
        width: '0.5rem',
        height: '0.5rem',
        borderRadius: '50%',
        background: '$purple100',
        opacity: 0.75,
        position: 'absolute',
        top: '0.75rem',
        left: '-0.25rem',
      },
    },
  },
})

export const SkillsContainer = styled('div', {
  color: '$gray100',
  h4: {
    fontSize: '$sm',
  },
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
})

export const SkillsTagsContainer = styled('div', {
  paddingTop: '0.625rem',
  display: 'flex',
  flexWrap: 'wrap',

  gap: '1rem',
  span: {
    background: '$purple600',
    padding: '5px 10px',
    borderRadius: '5px',
  },
})

export const CertificationsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  p: {
    color: '$gray300',
  },
})

export const CertificationsCardsContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '1rem',
})
