import { CertificationCardContainer } from './styles'

interface CertificationCardProps {
  title: string
  organization: string
  url: string
  issued: string
}

export function CertificationCard({
  title,
  organization,
  url,
  issued,
}: CertificationCardProps) {
  return (
    <CertificationCardContainer>
      <h4>{title}</h4>
      <strong>{organization}</strong>
      <a href={url} target="_blank" rel="noreferrer">
        <strong>Credential URL:</strong> {url}
      </a>
      <p>
        <strong>Issued:</strong> {issued}
      </p>
    </CertificationCardContainer>
  )
}
