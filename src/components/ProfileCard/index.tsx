import {
  ProfileCardBody,
  ProfileCardContainer,
  ProfileCardHeader,
  ProfileCardFooter,
} from './styles'

import profilePicture from '../../assets/profile-picture.jpg'
import {
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
  MapPin,
  Phone,
} from 'phosphor-react'

export function ProfileCard() {
  return (
    <ProfileCardContainer>
      <ProfileCardHeader>
        <img src={profilePicture} alt="Profile Picture" />

        <h2>Gabriela Chiquetto Policano</h2>
        <span>Front-end developer</span>
      </ProfileCardHeader>
      <ProfileCardBody>
        <div>
          <span>
            <MapPin size={20} />
          </span>
          <p>Enschede - Netherlands</p>
        </div>
        <div>
          <span>
            <EnvelopeSimple size={20} />
          </span>
          <p>gabrielachiquetto@gmail.com</p>
        </div>
        <div>
          <span>
            <Phone size={20} />
          </span>
          <p>+31 6 83784776</p>
        </div>
      </ProfileCardBody>
      <ProfileCardFooter>
        <a
          className="cv_download_button"
          href="https://drive.google.com/uc?export=download&id=1cgUbPbXPmKDI0iCCXccIx2gz-9hvZbqK"
        >
          Download my CV
        </a>
        <div>
          <a
            className="social-media"
            href="https://www.linkedin.com/in/gabriela-chiquetto-policano-b6917533/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedinLogo size={20} />
          </a>
          <a
            className="social-media"
            href="https://github.com/gchiquetto"
            target="_blank"
            rel="noreferrer"
          >
            <GithubLogo size={20} />
          </a>
        </div>
      </ProfileCardFooter>
    </ProfileCardContainer>
  )
}
