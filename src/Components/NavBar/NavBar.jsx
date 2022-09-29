import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Learn English
        </Link>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Головна
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="addword">
                Додати слово
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="testing">
                Пройти тест
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
