import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOneDevice, updateDevice } from "../../services";
// import {
//   addGateway,
//   getAllDevice,
//   getOneGateway,
//   updateGateway,
// } from "../../services";
// import ItemDevice from "./ItemDevice";

export default () => {
  const { uid } = useParams();
  const [error, setError] = useState("");
  //   const [listD, setListD] = useState([]);
  const [data, setData] = useState({
    uid: 0,
    vendor: "",
    created: "",
    status: "",
  });

  useEffect(() => {
    getOneDevice(uid).then(setData)
  }, []);

  function handleData(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }
  function handleSubmit() {
    updateDevice(data).then(({ success, message }) => {
      setError(message)
    })
  }

  return (
    <section className="add_section">
      <div className="">
        <div className="add_inputs">
          <input
            placeholder="Serial number"
            name="uid"
            disabled={true}
            value={data?.uid}
            onChange={handleData}
            type="number"
          />
          <input
            placeholder="Human readable name"
            name="vendor"
            value={data?.vendor}
            onChange={handleData}
            type="text"
          />
          <input
            placeholder="IPv4"
            name="created"
            value={dateFormat(data?.created, "yyyy-MM-dd")}
            onChange={handleData}
            type="date"
          />
          <select
            name="status"
            value={data.status}
            onChange={handleData}
          >
            <option value="online">Online</option>
            <option value="offline">Offline</option>
          </select>
        </div>
        <div className="add_buttons">
          <button
            onClick={handleSubmit}
          >Update Device</button>
          {error === "" ? "" : <p>{error}</p>}
        </div>
      </div>

      {/* <div className="add_devices_list">
        <div className="device_list">
          {listD ? (
            listD.length > 0 ? (
              <ul className="list_d">
                {listD.map((device, index) => (
                  <ItemDevice
                    inList={true}
                    addToGateway={addDeviceToGateway}
                    key={index}
                    device={device}
                  />
                ))}
              </ul>
            ) : (
              <p>Device list is empty</p>
            )
          ) : (
            <p> Waiting for devices list</p>
          )}
        </div>
      </div> */}
    </section>
  );
};

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
