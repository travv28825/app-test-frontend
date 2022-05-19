import { useEffect, useState } from "react";

import Item from "./Item";
import { deleteDevice, getAllDevice } from "../../services";
import './style.css'

export default () => {
  const [listD, setListD] = useState([]);

  useEffect(() => {
    getAllDevice().then(setListD);
  }, []);

  function deleteElement(uid) {
    deleteDevice(uid).then(({ success, message }) => {
      if (success) {
        const arr = listD.filter(e => e.uid !== uid)
        setListD(arr)
      }
      alert(message)
    })
  }

  return (
    <ul className="device_list">
      {listD && listD.map((el, index) => <Item key={index}
        deleteElement={deleteElement}
        element={el} />)}
    </ul>
  );
};
