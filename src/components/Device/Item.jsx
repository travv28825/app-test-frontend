import { Link } from "react-router-dom";

export default ({ element, deleteElement }) => (
  <li>
    <div className="actions">
      <Link
        className="btn_action_update"
        to={`/device/update/${element.uid}`}
      >
        Update
      </Link>
      <Link
        className="btn_action_delete"
        onClick={() => deleteElement(element.uid)}
        to=""
      >
        Delete
      </Link>
    </div>
    <p>UID: {element.uid}</p>
    <p>Vendor: {element.vendor}</p>
    <p>Created: {dateFormat(element.created,"dd-MM-yy")}</p>
    <p>Status {element.status === "online" ? (
      <span style={{ margin: "0" }} className="online">
        Online
      </span>
    ) : (
      <span style={{ margin: "0" }} className="offline">
        Offline
      </span>
    )}</p>
  </li>
);
function dateFormat(inputDate, format) {
  //parse the input date
  const date = new Date(inputDate);

  //extract the parts of the date
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  //replace the month
  format = format.replace("MM", month.toString().padStart(2, "0"));

  //replace the year
  if (format.indexOf("yyyy") > -1) {
    format = format.replace("yyyy", year.toString());
  } else if (format.indexOf("yy") > -1) {
    format = format.replace("yy", year.toString().substr(2, 2));
  }

  //replace the day
  format = format.replace("dd", day.toString().padStart(2, "0"));

  return format;
}