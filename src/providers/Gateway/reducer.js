const INITIAL_STATE = {
  devices: [],
  devicesToAdding: [],
  devicesToUpdating: [],
  gateways: [],
  gatewayToUpdate: {},
  isUpdating: false,
  message: '',
  error: '',
};

const GatewayReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'DATA_REQUEST':
      return {
        ...state,
        devices: action.payload.devices,
        gateways: action.payload.gateways,
      };
    case 'UPDATE_MODE':
      return {
        ...state,
        isUpdating: !state.isUpdating,
      };
    case 'UPDATE_GATEWAY_VIEW':
      const newLDevices =
        action.payload.devices.length !== 0
          ? state.devices.filter((device) =>
              action.payload.devices.find(
                (deviceInGateway) => device.uid !== deviceInGateway.uid
              )
            )
          : state.devices;

      return {
        ...state,
        gatewayToUpdate: action.payload,
        devices: newLDevices,
      };
    case 'DEVICE_TO_ADD':
      const listToAdd = [...state.devicesToAdding, action.payload];
      const listDevices = state.devices.filter(
        (device) => device.uid !== action.payload.uid
      );

      return {
        ...state,
        devicesToAdding: listToAdd,
        devices: listDevices,
      };
    case 'DEVICE_TO_UPDATE':
      const listUpdating = [...state.devicesToUpdating, action.payload];
      const listD = state.devices.filter(
        (device) => device.uid !== action.payload.uid
      );

      return {
        ...state,
        devicesToUpdating: listUpdating,
        devices: listD,
      };
    case 'REMOVE_DEVICE_IN_GATEWAY':
      const newListDevices = [...state.devices, action.payload];

      const newDevicesToAdd = state.devicesToAdding.filter(
        (device) => device.uid !== action.payload.uid
      );

      const newDevicesToUpdate = state.devicesToUpdating.filter(
        (device) => device.uid !== action.payload.uid
      );

      return {
        ...state,
        devicesToAdding: newDevicesToAdd,
        devicesToUpdating: newDevicesToUpdate,
        gatewayToUpdate: {
          ...state.gatewayToUpdate,
          devices: [],
        },
        devices: newListDevices,
      };
    case 'ADD_GATEWAY':
      const gatewaysUpdated = [...state.gateways, action.payload.gateway];

      return {
        ...state,
        message: action.payload.message,
        gateways: gatewaysUpdated,
        devicesToAdding: [],
        devices: action.payload.devices,
      };
    case 'UPDATE_GATEWAY':
      return {
        ...state,
        message: action.payload.message,
        devicesToAdding: [],
        devicesToUpdating: [],
        isUpdating: false,
      };
    case 'REMOVE_GATEWAY':
      const newListGateways = state.gateways.filter(
        (gateway) => gateway.serial !== action.payload.serial
      );

      return {
        ...state,
        message: action.payload.message,
        gateways: newListGateways,
      };
    case 'REQUEST_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    case 'SHOW_MESSAGE':
      return {
        ...state,
        message: action.payload,
      };
    default:
      return state;
  }
};

export { INITIAL_STATE, GatewayReducer };
