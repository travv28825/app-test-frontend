import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  getAllDevice,
  getOneGateway,
  updateGateway,
} from "../../services";
import ItemDevice from "./src/ItemDevice";
import ListDevices from "./src/ListDevices";

const UpdateG = () => {
  const [error, setError] = useState("");
  const { serial } = useParams();
  const [listD, setListD] = useState([]);
  const [data, setData] = useState({
    serial: 0,
    human: "",
    ip: "",
    devices: [],
  });

  useEffect(() => {
    getOneGateway(serial).then(gateway => {
      setData(gateway)

      getAllDevice().then(devices => {
        const devicesOfGateway = gateway.devices
        let exist = []

        const list = devices.reduce((acc, item) => {
          exist = devicesOfGateway.filter(d => d.uid === item.uid)

          if (exist.length === 0) {
            acc.push(item)
            exist = []
          }

          return acc
        }, [])

        setListD(list)
      });
    });
  }, []);

  function handleData(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  function addDeviceToGateway(device) {
    let arr = data.devices
    let newList = listD.filter((e) => e.uid !== device.uid);

    if (arr.length < 10) {
      arr.push(device);
      setData({ ...data, devices: arr })
      setListD(newList);
    } else {
      setError("A gateway only cant 10 devices");
    }
  }

  function removeFromGategay(uid) {
    const aux = data.devices;
    const newList = aux.filter((x) => x.uid !== uid);

    const item = aux.filter((e) => e.uid === uid);
    const arr = [...listD, ...item];

    setListD(arr);
    setData({ ...data, devices: newList })
  }

  function handleSubmit() {
    updateGateway(data).then(({ message }) => {
      setError(message)
    })
  }

  return (
    <section className="add_section">
      <div className="">
        <div className="add_inputs">
          <input
            placeholder="Serial number"
            name="serial"
            value={data?.serial}
            onChange={handleData}
            type="number"
          />
          <input
            placeholder="Human readable name"
            name="human"
            value={data?.human}
            onChange={handleData}
            type="text"
          />
          <input
            placeholder="IPv4"
            name="ip"
            value={data?.ip}
            onChange={handleData}
            type="text"
          />
          <ul
            className="list_d"
            style={{ overflowY: "auto", maxHeight: "250px" }}
          >
            {data?.devices.length > 0
              ? data.devices.map((device, index) => (
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
          <button onClick={handleSubmit}>Update gateway</button>
          {error === "" ? "" : <p>{error}</p>}
        </div>
      </div>
      <ListDevices listD={listD} addDeviceToGateway={addDeviceToGateway} />
    </section>
  );
};

export { UpdateG }
