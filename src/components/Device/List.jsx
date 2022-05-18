import { useEffect, useState } from "react";

import Item from "./Item";
import { getAllDevice } from "../../services";

export default () => {
  const [listG, setListG] = useState([]);

  useEffect(() => {
    getAllDevice().then(setListG);
  }, []);

  return (
    <ul className="device_list">
      {listG && listG.map((el, index) => <Item key={index} element={el} />)}
    </ul>
  );
};
