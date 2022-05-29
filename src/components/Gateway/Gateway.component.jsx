import React, { useEffect, useState } from 'react';

import { useGateway } from '../../providers/Gateway';

import NewGateway from './NewGateway';
import ListDevices from '../ListDevice';
import ListGateway from './ListGateway';
import UpdateGateway from './UpdateGateway';
import ItemDevice from './ItemDevice';
import './Gateway.style.css';

function Gateway() {
  const { state, getData } = useGateway();
  const { isUpdating } = state;

  const listToRender = {
    component: ItemDevice,
    isList: true,
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container-gateway">
      <ListDevices componentToRender={listToRender} />
      <div className="crud-gateway">
        <NewGateway />
        {isUpdating && <UpdateGateway />}
        <ListGateway />
      </div>
    </div>
  );
}

export default Gateway;
