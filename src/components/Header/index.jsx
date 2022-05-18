import { Link } from "react-router-dom";

export default () => (
  <header>
    <div className="title-h">
      <Link to="/gateway/list">
        <h3 className="test">Home</h3>
      </Link>
    </div>
    <div className="actions-gateway">
      <p>gateways</p>
      <ul>
        <li>
          <Link to="/gateway/list">List</Link>
        </li>
        <li>
          <Link to="/gateway/add">Create</Link>
        </li>
        <li>
          <Link to="/gateway/update">Edit</Link>
        </li>
        <li>
          <Link to="/gateway/delete">Delete</Link>
        </li>
      </ul>
    </div>
    <div className="actions-device">
      <p>devices</p>
      <ul>
        <li>
          <Link to="/device/list">List</Link>
        </li>
        <li>
          <Link to="/device/add">Create</Link>
        </li>
        <li>
          <Link to="/device/update">Edit</Link>
        </li>
        <li>
          <Link to="/device/delete">Delete</Link>
        </li>
      </ul>
    </div>
  </header>
);
