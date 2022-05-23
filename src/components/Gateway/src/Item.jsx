import { Link } from "react-router-dom";
import { Actions } from "../../Actions";

export default ({ element, deleteElement }) => (
  <li className="item">
    <Actions path="/gateway/update/" onDelete={deleteElement} id={element.serial} />
    <p>Serial number: {element.serial}</p>
    <p>Human readable name: {element.human}</p>
    <p>IP: {element.ip}</p>
    {element.devices.length > 0 && <p>List devices:</p>}

    {element.devices.length > 0
      ? <ul className="gateway-devices">
        {element.devices.map((e, i) => (
          <li key={i} >
            <p>UID: {e.uid}</p>
            <p>vendor: {e.vendor}</p>
          </li>
        ))}
      </ul> : ""}
  </li>
);
