import { useEffect, useState } from "react";

import Item from "./Item";
import { deleteDevice, getAllDevice } from "../../services";
import './style.css'

export default () => {
  const [listDevices, setlistDevices] = useState([]);

  useEffect(() => {
    getAllDevice().then(setlistDevices);
  }, []);

  function deleteElement(uid) {
    deleteDevice(uid).then(({ success, message }) => {
      if (success) {
        const arr = listDevices.filter(e => e.uid !== uid)
        setlistDevices(arr)
      }
      alert(message)
    })
  }

  return (<>
    {listDevices?.length > 0
      ? <ul className="device_list">
        {listDevices.map((el, index) => <Item key={index}
          deleteElement={() => deleteElement(el.uid)}
          element={el} />)}
      </ul>
      : <p>Empty list of devices</p>
    }
  </>
  );
};
