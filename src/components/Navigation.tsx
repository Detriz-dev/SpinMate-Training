import { Link } from 'react-router-dom';
import './Navigation.css';

export function Navigation() {
    return (
      <nav>
        <div>
          <div>
            <Link to="/">Spinmate</Link>
          </div>
          <ul>
            <li>
              <Link to="/add-visit">
                Add Visit
              </Link>
            </li>
            <li>
              <Link to="/manage">
                Manage
              </Link>
            </li>
            <li>
              <Link to="/search-visit">
                Search Visit
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }