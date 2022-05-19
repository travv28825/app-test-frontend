import { NavLink } from "react-router-dom";

export default () => (
  <header>
    <div className="title-h">
      <NavLink to="/gateway/list">
        <h3 className="test">Home</h3>
      </NavLink>
    </div>
    <div className="actions-gateway">
      <p>gateways</p>
      <ul>
        <li>
          <NavLink to="/gateway/list">List gateways</NavLink>
        </li>
        <li>
          <NavLink to="/gateway/add">Add gateway</NavLink>
        </li>
      </ul>
    </div>
    <div className="actions-device">
      <p>devices</p>
      <ul>
        <li>
          <NavLink to="/device/list">List devices</NavLink>
        </li>
        <li>
          <NavLink to="/device/add">Add device</NavLink>
        </li>
      </ul>
    </div>
  </header>
);
