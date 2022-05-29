import { useEffect, useState } from 'react';

import Item from '../Item';
import { deleteDevice, getAllDevice } from '../../../services';

function ListDevice() {
  const [listDevices, setlistDevices] = useState([]);

  useEffect(() => {
    getAllDevice().then(setlistDevices);
  }, []);

  function deleteElement(uid) {
    deleteDevice(uid).then(({ success, message }) => {
      if (success) {
        const arr = listDevices.filter((e) => e.uid !== uid);
        setlistDevices(arr);
      }
      alert(message);
    });
  }

  const itemHasNotDevices = listDevices?.length === 0

  if (itemHasNotDevices) {
    return <p>Empty list of devices</p>
  }

  return (
    <ul className="item_list">
      {listDevices.map((el, index) => (
        <Item
          key={index}
          deleteElement={() => deleteElement(el.uid)}
          element={el}
        />
      ))}
    </ul>
  ) 
  );
}

export { ListDevice };
