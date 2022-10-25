import { ProfileCard } from '../../components/ProfileCard'
import {
  AboutContainer,
  AboutContent,
  AboutDescription,
  AboutFields,
  AboutFieldsContainer,
} from './styles'
import { Code, Database, Layout } from 'phosphor-react'

export function About() {
  return (
    <AboutContainer>
      <ProfileCard />
      <AboutContent>
        <AboutDescription>
          <h2>About</h2>
          <p>
            My name is Gabriela Chiquetto Policano, I’m a Brazilian, and a
            chemical engineer in transition to become a web developer.
          </p>
          <p>
            Since I was a child I was really interested in technology. So, I
            always looked after computers or video games as my perfect hobby. I
            was the one that my friends called when they wanted to know how to
            do certain things on their computers or when they wanted to someone
            do that for them. Even when I didn’t know how to do what they
            wanted, I was thrilled to do that, not only for helping them but
            also because I wanted to learn something new.
          </p>
          <p>
            I’m looking for an opportunity to grow and contribute to developing
            solutions that make the clients and the company proud. I have
            experience with JavaScript, React, and TypeScript. I’m also familiar
            with NodeJS, and relational and non-relational databases, such as
            PostgreSQL and MongoDB.
          </p>
        </AboutDescription>
        <AboutFieldsContainer>
          <h3>What I Do</h3>
          <AboutFields>
            <div>
              <span>
                <Layout size={32} />
              </span>
              <strong>Front-end development</strong>
              <p>
                I have experience with HTML5, CSS3, Sass, JavaScript, TypeScript
                React, StyeledComponents, Stitches, Next.js
              </p>
            </div>
            <div>
              <span>
                <Code size={32} />
              </span>
              <strong>Back-end development</strong>
              <p>I have experience with NodeJS, Java, and Python</p>
            </div>
            <div>
              <span>
                <Database size={32} />
              </span>
              <strong>Database</strong>
              <p>
                I have experience NoSQL and SQL databases, such as MongoDB and
                PostgreSQL
              </p>
            </div>
          </AboutFields>
        </AboutFieldsContainer>
      </AboutContent>
    </AboutContainer>
  )
}
