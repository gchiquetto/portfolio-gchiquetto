import { NavbarContainer, NavContent } from './styles'

export function Navbar() {
  return (
    <NavbarContainer>
      <NavContent>
        <h1>Gabriela Chiquetto</h1>
        <ul>
          <li className="selected">
            <a href="">About</a>
          </li>
          <li>
            <a href="">Resume</a>
          </li>
          <li>
            <a href="">Portfolio</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </NavContent>
    </NavbarContainer>
  )
}
