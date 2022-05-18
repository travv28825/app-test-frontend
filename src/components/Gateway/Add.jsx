import { useEffect, useState } from "react";
import { addGateway, getAllDevice } from "../../services";
import ItemDevice from "./ItemDevice";

export default () => {
  //i can optimizate it using contexApi and useReducer
  const [data, setData] = useState({ serial: "", human: "", ip: "" });
  const [listD, setListD] = useState([]);
  const [deviceG, setDeviceG] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getAllDevice().then(setListD);
    console.log(listD);
  }, []);

  function handleData(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  function addDeviceToGateway(device) {
    let arr = [...deviceG];
    let newList = listD.filter((e) => e.uid !== device.uid);
    if (arr.length < 10) {
      arr.push(device);
      setDeviceG(arr);
      setListD(newList);
    } else {
      setError("A gateway only cant 10 devices");
    }
  }
  function removeFromGategay(uid) {
    const aux = [...deviceG];
    const newList = aux.filter((x) => x.uid !== uid);

    const item = aux.filter((e) => e.uid === uid);
    const arr = [...listD, ...item];

    setListD(arr);
    setDeviceG(newList);
  }

  function handleSubmit() {
    const datasend = { ...data, devices: deviceG };

    addGateway(datasend).then((data) => {
      if (data.ipaddress !== "fail") {
        setData({ serial: 0, human: "", ip: "" });
        setDeviceG([]);
      }
      setError(data.message);
    });
  }

  return (
    <section className="add_section">
      <div className="">
        <div className="add_inputs">
          <input
            placeholder="Serial number"
            name="serial"
            value={data.serial}
            onChange={handleData}
            type="number"
          />
          <input
            placeholder="Human readable name"
            name="human"
            value={data.human}
            onChange={handleData}
            type="text"
          />
          <input
            placeholder="IPv4"
            name="ip"
            value={data.ip}
            onChange={handleData}
            type="text"
          />
          <ul className="list_d" style={{ overflowY: "auto", maxHeight: "250px" }}>
            {deviceG.length > 0
              ? deviceG.map((device, index) => (
                  <ItemDevice
                    inList={false}
                    removeFromGategay={removeFromGategay}
                    key={index}
                    device={device}
                  />
                ))
              : ""}
          </ul>
        </div>
        <div className="add_buttons">
          <button onClick={handleSubmit}>Add gateway</button>
          {error === "" ? "" : <p>{error}</p>}
        </div>
      </div>

      <div className="add_devices_list">
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
      </div>
    </section>
  );
};
