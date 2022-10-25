import { Container, Content } from '.'
import { Navbar } from './components/Navbar'
import { About } from './Pages/About'

export function App() {
  return (
    <Container>
      <Navbar />
      <Content>
        <About />
      </Content>
    </Container>
  )
}
