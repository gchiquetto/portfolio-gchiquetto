import { CertificationCard } from './components/CertificationCard'
import {
  CertificationsCardsContainer,
  CertificationsContainer,
  EducationContainer,
  ResumeContainer,
  ResumeOverview,
  SkillsContainer,
  SkillsTagsContainer,
} from './styles'

export function Resume() {
  return (
    <ResumeContainer>
      <h2>Resume</h2>
      <ResumeOverview>
        <EducationContainer>
          <h3>Education</h3>
          <div className="education-content">
            <div>
              <strong>2016-2016</strong>
              <p>RMIT University</p>
            </div>
            <div className="divider"></div>
            <div>
              <h4>Exchange Program -Bachelor of Engineering </h4>
            </div>
          </div>
          <div className="education-content">
            <div>
              <strong>2012-2019</strong>
              <p>UNICAMP - University of Campinas</p>
            </div>
            <div className="divider"></div>
            <div>
              <h4>Bachelor of Engineering (Chemical Engineering)</h4>
            </div>
          </div>
        </EducationContainer>
        <SkillsContainer>
          <div>
            <h4>Front-end Technologies</h4>
            <SkillsTagsContainer>
              <span>JavaScript</span>
              <span>TypeScript</span>
              <span>React</span>
              <span>Next</span>
              <span>StyledComponents</span>
              <span>Sass</span>
              <span>HTML5</span>
              <span>CSS</span>
            </SkillsTagsContainer>
          </div>
          <div>
            <h4>Back-end Technologies</h4>
            <SkillsTagsContainer>
              <span>Node.js</span>
              <span>Python</span>
              <span>Java</span>
            </SkillsTagsContainer>
          </div>
          <div>
            <h4>Databases</h4>
            <SkillsTagsContainer>
              <span>PostgreSQL</span>
              <span>MongDB</span>
            </SkillsTagsContainer>
          </div>
        </SkillsContainer>
      </ResumeOverview>
      <CertificationsContainer>
        <h3>Certifications</h3>
        <p>
          Some of my certifications are listed below, for a full relation,
          please check my Linkedin profile.
        </p>
        <CertificationsCardsContainer>
          <CertificationCard
            title="Figma UI UX Design Essentials"
            organization="Udemy"
            url="https://www.udemy.com/certificate/UC-7446308c-3912-4469-be5a-70603bd106bf/"
            issued="August 2022"
          />
          <CertificationCard
            title="Advanced CSS and Sass: Flexbox, Grid, Animations and More!"
            organization="Udemy"
            url="https://ude.my/UC-6e282fd2-8492-476f-926c-bbe4c5a2aa88"
            issued="June 2022"
          />
          <CertificationCard
            title="The Complete JavaScript Course 2022: From Zero to Expert!"
            organization="Udemy"
            url="https://ude.my/UC-195debe9-f9e8-4963-b027-c3c9b81b63d8"
            issued="May 2022"
          />
          <CertificationCard
            title="The Complete 2022 Web Development Bootcamp"
            organization="Udemy"
            url="https://ude.my/UC-8985abb8-2bf5-4665-b29d-98da8f2c9fa0"
            issued="January 2022"
          />
        </CertificationsCardsContainer>
      </CertificationsContainer>
    </ResumeContainer>
  )
}
