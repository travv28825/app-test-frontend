import { useState } from "react";
import { addDevice } from "../../services";

export default () => {
  const [data, setData] = useState({
    uid: '',
    vendor: "",
    date: '',
    status: "online",
  });
  const [message, setMessage] = useState("");

  function handleData(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  function handleSubmit() {
    addDevice(data).then((response) => {
      setData({
        uid: "",
        vendor: "",
        date: "",
        status: "",
      });
      setMessage(response.message);
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
        </div>
        <div className="add_buttons">
          <button onClick={handleSubmit}>Add device</button>
          {message === "" ? "" : <p>{message}</p>}
        </div>
      </div>
    </section>
  );
};
