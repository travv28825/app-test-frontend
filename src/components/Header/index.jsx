export default () => (
  <header>
    <div className="title-h">
      <h3 className="test">Test</h3>
    </div>
    <div className="actions-gateway">
      <p>gateways</p>
      <ul>
        <li>
          <a href="/gateway/list">List</a>
        </li>
        <li>
          <a href="/gateway/add">Create</a>
        </li>
        <li>
          <a href="/gateway/update">Edit</a>
        </li>
        <li>
          <a href="/gateway/delete">Delete</a>
        </li>
      </ul>
    </div>
    <div className="actions-device">
      <p>devices</p>
      <ul>
        <li>
          <a href="/device/list">List</a>
        </li>
        <li>
          <a href="/device/add">Create</a>
        </li>
        <li>
          <a href="/device/update">Edit</a>
        </li>
        <li>
          <a href="/device/delete">Delete</a>
        </li>
      </ul>
    </div>
  </header>
);
