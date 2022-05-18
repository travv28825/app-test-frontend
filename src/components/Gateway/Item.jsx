export default ({ element }) => (
  <li>
    <p>Serial number: {element.serial}</p>
    <p>Human readable name: {element.human}</p>
    <p>IP: {element.ip}</p>
    {element.devices.length > 0 && <p>List devices:</p>}
    <ul>
      {element.devices.length > 0
        ? element.devices.map((e, i) => (
            <li key={i} style={{ background: "#b9b5b5" }}>
              <p>UID: {e.uid}</p>
              <p>vendor: {e.vendor}</p>
            </li>
          ))
        : ""}
    </ul>
  </li>
);
