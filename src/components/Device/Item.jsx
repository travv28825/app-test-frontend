export default ({ element }) => (
  <li>
    <p>UID: {element.uid}</p>
    <p>Vendor: {element.vendor}</p>
    <p>Created: {element.created}</p>
    <p>Status {element.status}</p>
  </li>
);
