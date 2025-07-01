import { Link } from 'react-router-dom';

export function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/add-visit">Add Visit</Link></li>
        <li><Link to="/customers-visits">Customers</Link></li>
        <li><Link to="/manage">Manage</Link></li>
        <li><Link to="/search-visit">Search</Link></li>
        <li><Link to="/settings">Settings</Link></li>
      </ul>
    </nav>
  );
}