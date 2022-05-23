export default ({ device, inList, addToGateway, removeFromGategay }) => (
  <li>
    <p>
      <span>UID:</span>
      {device.uid}
    </p>
    <p>
      <span>Vendor:</span>
      {device.vendor}
    </p>
    <p>
      <span>Created:</span>
      {dateFormat(device.created, "dd-MM-yyyy")}
    </p>
    <p style={{ display: "flex" }}>
      <span>Status:</span>
      {device.status === "online" ? (
        <span style={{ margin: "0" }} className="online">
          Online
        </span>
      ) : (
        <span style={{ margin: "0" }} className="offline">
          Offline
        </span>
      )}
    </p>
    <div className="options-list">
      {inList ? (
        <button
          onClick={() => {
            addToGateway(device);
          }}
        >
          Add to gateway
        </button>
      ) : (
        <button
          className="btn-remove"
          onClick={() => removeFromGategay(device.uid)}
        >
          X
        </button>
      )}
    </div>
  </li>
);

//a simple date formatting function
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
