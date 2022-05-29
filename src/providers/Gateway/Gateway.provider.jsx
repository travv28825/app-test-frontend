import React, { useContext, useReducer } from 'react';
import { deviceService, gatewayService } from '../../services';

import { INITIAL_STATE, GatewayReducer } from './reducer';

const GatewayContext = React.createContext(null);

const useGateway = () => {
  const context = useContext(GatewayContext);
  if (!context) {
    throw new Error(`Can't use "useGateway" without an GatewayProvider!`);
  }
  return context;
};

const GatewayProvider = ({ children }) => {
  const [gatewayState, dispatch] = useReducer(GatewayReducer, INITIAL_STATE);

  function changeUpdatingMode(gateway) {
    dispatch({ type: 'UPDATE_MODE' });
    dispatch({ type: 'UPDATE_GATEWAY_VIEW', payload: gateway });
  }

  function prepareDeviceToAdd(device) {
    dispatch({ type: 'DEVICE_TO_ADD', payload: device });
  }

  function removeDeviceInGateway(device) {
    dispatch({ type: 'REMOVE_DEVICE_IN_GATEWAY', payload: device });
  }

  function showError(error) {
    dispatch({ type: 'REQUEST_ERROR', payload: error });
  }
  function showMessage(message) {
    dispatch({ type: 'SHOW_MESSAGE', payload: message });
  }

  function addDevicesToUpdate(device) {
    dispatch({ type: 'DEVICE_TO_UPDATE', payload: device });
  }

  async function getData() {
    const allDevices = await deviceService.getAll();
    const allGateways = await gatewayService.getAll();
    dispatch({
      type: 'DATA_REQUEST',
      payload: { devices: allDevices, gateways: allGateways },
    });
  }

  async function addGateway(gateway) {
    try {
      const resposne = await gatewayService.add(gateway);
      const allDevices = await deviceService.getAll();

      dispatch({
        type: 'ADD_GATEWAY',
        payload: { message: resposne.message, gateway, devices: allDevices },
      });
    } catch (error) {
      dispatch({ type: 'REQUEST_ERROR', payload: error });
    }
  }

  async function removeGateway(serial) {
    try {
      const response = await gatewayService.remove(serial);

      dispatch({
        type: 'REMOVE_GATEWAY',
        payload: { message: response.message, serial },
      });
    } catch (error) {
      dispatch({ type: 'REQUEST_ERROR', payload: error });
    }
  }

  async function editGateway(serial, gateway) {
    try {
      const response = await gatewayService.update(serial, gateway);

      dispatch({
        type: 'UPDATE_GATEWAY',
        payload: { message: response.message },
      });
      getData();
    } catch (error) {
      dispatch({ type: 'REQUEST_ERROR', payload: error });
    }
  }

  const apiGateway = {
    state: gatewayState,
    getData,
    changeUpdatingMode,
    prepareDeviceToAdd,
    removeDeviceInGateway,
    addGateway,
    showError,
    showMessage,
    addDevicesToUpdate,
    removeGateway,
    editGateway,
  };

  return (
    <GatewayContext.Provider value={apiGateway}>
      {children}
    </GatewayContext.Provider>
  );
};

export { useGateway };
export default GatewayProvider;
