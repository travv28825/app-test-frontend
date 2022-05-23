import { useEffect, useState } from "react";

import Item from "./src/Item";
import { deleteGateway, getAllGateway } from "../../services";
import "./style.css";

const ListG = () => {
  const [listG, setListG] = useState([]);

  useEffect(() => {
    getAllGateway().then(setListG);
  }, []);

  function handleDelete(serial) {
    deleteGateway(serial).then(({ message }) => {
      const arr = listG.filter(e => e.serial !== serial)

      setListG(arr)
      alert(message)
    })
  }

  return (
    <ul className="gateway_list">
      {listG.length > 0 &&
        listG.map((el, index) => <Item key={index} element={el} deleteElement={handleDelete} />)}
    </ul>
  );
};

export { ListG }
