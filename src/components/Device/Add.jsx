import { useState } from "react";
import { addDevice } from "../../services";

export default () => {
  const [data, setData] = useState({
    uid: '',
    vendor: "",
    date: '',
    status: "online",
  });
  const [error, setError] = useState("");

  function handleData(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  function handleSubmit() {
    addDevice(data).then((response) => {
      if (response.success) {
        setData({
          uid: "",
          vendor: "",
          date: "",
          status: "",
        });
      }
      setError(response.message);
    });
  }

  return (
    <section className="add_section">
      <div className="">
        <div className="add_inputs">
          <input
            placeholder="ID"
            name="uid"
            value={data.uid}
            onChange={handleData}
            type="number"
          />
          <input
            placeholder="Vendor"
            name="vendor"
            value={data.vendor}
            onChange={handleData}
            type="text"
          />
          <input
            placeholder="Date"
            name="date"
            value={data.date}
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
          {/* <input
            placeholder="Status"
            name="status"
            value={data.status}
            onChange={handleData}
            type="text"
          /> */}
        </div>
        <div className="add_buttons">
          <button onClick={handleSubmit}>Add device</button>
          {error === "" ? "" : <p>{error}</p>}
        </div>
      </div>

      {/* <div className="add_devices_list">
        <div className="device_list">
          {listD ? (
            listD.length > 0 ? (
              <ul>
                {listD.map((device, index) => (
                  <li key={index} onClick={() => addDeviceToGateway(device)}>
                    <p>Vendor:{device.vendor}</p>
                    <p>Created:{device.created}</p>
                    <p>Status:{device.status}</p>
                  </li>
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
