import React, { useState } from 'react';

import NewDevice from './NewDevice';
import ListDevice from '../ListDevice';
import ItemDevice from './ItemDevice';
import UpdateDevice from './UpdateDevice';
import './Device.style.css';

function Device() {
  const [updateMode, setUpdateMode] = useState(false);
  const [deviceToUpdate, setDeviceToUpdate] = useState({});

  function showEditView(device) {
    setDeviceToUpdate(device);
    setUpdateMode(true);
  }

  const listToRender = {
    component: ItemDevice,
    showUpdateView: showEditView,
  };

  return (
    <div className="container-device">
      {!updateMode ? (
        <NewDevice />
      ) : (
        <UpdateDevice
          device={deviceToUpdate}
          hideUpdateMode={() => setUpdateMode(false)}
        />
      )}
      <ListDevice componentToRender={listToRender} />
    </div>
  );
}

export default Device;
