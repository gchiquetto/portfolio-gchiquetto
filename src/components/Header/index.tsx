import { NavLink } from 'react-router-dom'
import { HeaderContainer, NavContent } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <NavContent>
        <h1>Gabriela Chiquetto</h1>
        <ul>
          <li className="selected">
            <NavLink to="/" end title="About">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/resume" title="Resume">
              Resume
            </NavLink>
          </li>
          <li>
            <NavLink to="/">Portfolio</NavLink>
          </li>
          <li>
            <NavLink to="/">Contact</NavLink>
          </li>
        </ul>
      </NavContent>
    </HeaderContainer>
  )
}
