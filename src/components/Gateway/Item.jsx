import { Link } from "react-router-dom";
import { deleteGateway } from "../../services";

export default ({ element, deleteElement }) => (
  <li>
    <div className="actions">
      <Link
        className="btn_action_update"
        to={`/gateway/update/${element.serial}`}
      >
        Update
      </Link>
      <Link
        className="btn_action_delete"
        onClick={() => deleteElement(element.serial)}
        // onClick={()=>deleteGateway(element.serial).then(()=>window.location.reload())}
        to=""
      >
        Delete
      </Link>
    </div>
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
