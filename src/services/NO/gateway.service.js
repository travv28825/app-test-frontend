import * as constants from '../../utils/constants';
import * as utils from '../../utils/utils';

const api = utils.buildAPI(constants.API_GATEWAY);

async function getAllGateway() {
  try {
    const data = api.get();
    return data;
  } catch (error) {
    return { message: `Error: ${error}` };
  }
}

async function getOneGateway(serial) {
  try {
    const data = await api.get(`/${serial}`);
    return data;
  } catch (error) {
    return { message: `Error: ${error}` };
  }
}

async function addGateway(item) {
  try {
    const response = await fetch(API_GATEWAY, requestOptions('POST', item));
    const data = await response.json();

    return data;
  } catch (error) {
    return { message: `Error: ${error}` };
  }
}

async function updateGateway(item) {
  try {
    const response = await fetch(
      `${API_GATEWAY}${item.serial}`,
      requestOptions('PUT', item)
    );
    const data = await response.json();

    return data;
  } catch (error) {
    return { message: `Error: Error with the server, try again later` };
  }
}

async function deleteGateway(serial) {
  try {
    const response = await fetch(
      `${API_GATEWAY}${serial}`,
      requestOptions('DELETE')
    );
    const data = await response.json();

    return data;
  } catch (error) {
    return { message: `Error: ${error}` };
  }
}

export {
  getAllGateway,
  getOneGateway,
  addGateway,
  updateGateway,
  deleteGateway,
};
