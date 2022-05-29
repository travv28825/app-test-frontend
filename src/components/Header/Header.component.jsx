import { Link } from 'react-router-dom';

import './Header.style.css';

function Header() {
  return (
    <header>
      <div className="title-header">
        <h3>Restful Client API </h3>
      </div>
      <div className="links-header">
        <ul>
          <li>
            <Link to="/gateway">Gateways</Link>
          </li>
          <li>
            <Link to="/device">Devices</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
