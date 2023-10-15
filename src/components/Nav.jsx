import '../styles/Nav.css';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {

  const currentPage = useLocation().pathname;

  return (
    <>
      <div className='nav-container'>
        <div className='nav'>
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <Link
                to="/"
                className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Portfolio"
                className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Contact"
                className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
              >
                Contact / CV
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}