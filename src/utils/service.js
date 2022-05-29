import * as contants from './constants';

function reqOptions(method, data) {
  const options = {
    method,
    headers: { 'Content-Type': 'application/json' },
  };

  const hasBody = ['POST', 'PUT'].includes(method.toUpperCase()) && typeof data;

  if (hasBody) {
    options.body = JSON.stringify(data);
  }

  return options;
}

function buildRequest(API_ROOT, requestType) {
  return async function request(url = '', payload = {}) {
    const requestUrl = API_ROOT + url;
    const requestOptions = reqOptions(requestType, payload);

    const response = await fetch(requestUrl, requestOptions);
    const json = await response.json();

    return json;
  };
}

function buildAPI(API_ROOT) {
  return {
    get: buildRequest(API_ROOT, 'GET'),
    post: buildRequest(API_ROOT, 'POST'),
    put: buildRequest(API_ROOT, 'PUT'),
    delete: buildRequest(API_ROOT, 'DELETE'),
  };
}

function buildService(API_ROOT) {
  const api = buildAPI(API_ROOT);

  async function getAll() {
    const data = await api.get();
    return data;
  }

  async function getOne(id) {
    const data = await api.get(`/${id}`);
    return data;
  }

  async function add(item) {
    const data = await api.post('/', item);
    return data;
  }

  async function update(id, item) {
    const data = api.put(`/${id}`, item);
    return data;
  }

  async function remove(id) {
    const data = await api.delete(`/${id}`);
    return data;
  }

  return { getAll, getOne, add, update, remove };
}

export { buildAPI, buildService };
