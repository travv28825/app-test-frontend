import * as contants from '../utils/constants';
import * as utils from '../utils/utils';

const api = utils.buildAPI(constants.API_DEVICE);

async function getAllDevice() {
  try {
    const data = await api.get();
    return data;
  } catch (error) {
    return { message: `Error: ${error}` };
  }
}

async function getOneDevice(uid) {
  try {
    const data = await api.get(`/${uid}`);
    return data;
  } catch (error) {
    return { message: `Error: ${error}` };
  }
}

async function addDevice(item) {
  try {
    const data = await api.post('/', item);
    return data;
  } catch (error) {
    return { message: `Error: ${error}` };
  }
}

async function updateDevice(uid, item) {
  try {
    const data = api.put(`/${uid}`, item);
    return data;
  } catch (error) {
    return { message: `Error: ${error}` };
  }
}

async function deleteDevice(uid) {
  try {
    const data = await api.delete(`/${uid}`);
    return data;
  } catch (error) {
    return { message: `Error: ${error}` };
  }
}

export { getAllDevice, getOneDevice, addDevice, updateDevice, deleteDevice };
