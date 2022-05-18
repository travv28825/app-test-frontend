import { useEffect, useState } from "react";

import Item from "./Item";
import { getAllGateway } from "../../services";
import "./style.css";

export default () => {
  const [listG, setListG] = useState([]);

  useEffect(() => {
    getAllGateway().then(setListG);
  }, []);

  return (
    <ul className="gateway_list">
      {listG.length > 0 &&
        listG.map((el, index) => <Item key={index} element={el} />)}
    </ul>
  );
};
