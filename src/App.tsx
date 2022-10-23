import { Container, Content } from '.'
import { Navbar } from './components/Navbar'
import { ProfileCard } from './components/ProfileCard'

export function App() {
  return (
    <Container>
      <ProfileCard />
      <Content>
        <Navbar />
        <main></main>
      </Content>
    </Container>
  )
}
