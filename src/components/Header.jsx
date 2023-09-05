import { Link } from 'react-router-dom'
import pokeball from '../assets/pokeball.png'

export function Header() {
  return (
    <header>
      <nav>
        <Link to={'/'}>
          <h1 className="white">
            PokeApp
            <span>
              <img width="30" src={pokeball} alt="o" />
            </span>
          </h1>
        </Link>
      </nav>
    </header>
  )
}
