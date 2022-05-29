import { useState } from 'react';

import { addDevice } from '../../../services';

const DEFAULT_DEVICE_DATA = {
  uid: '', vendor: '', date: '', status: 'online',
}

function AddDevice() {
  const [message, setMessage] = useState('');
  const [deviceData, setDeviceData] = useState(DEFAULT_DEVICE_DATA);

  function handleData(event) {
    const { name, value } = event.target;
    setDeviceData({ ...deviceData, [name]: value });
  }

  function handleSubmit() {
    try {
      const response = await addDevice(deviceData)

      if (response) {
        setDeviceData(DEFAULT_DEVICE_DATA);
        setMessage(response.message);
      }
    } catch (error) {
      // TODO: handle properly
      console.error(error)
    }
  }

  return (
    <section className="add_section">
      <div className="">
        <div className="add_inputs">
          <input
            placeholder="ID"
            name="uid"
            value={deviceData.uid}
            onChange={handleData}
            type="number"
          />
          <input
            placeholder="Vendor"
            name="vendor"
            value={deviceData.vendor}
            onChange={handleData}
            type="text"
          />
          <input
            placeholder="Date"
            name="date"
            value={deviceData.date}
            onChange={handleData}
            type="date"
          />
          <select name="status" value={deviceData.status} onChange={handleData}>
            <option value="online">Online</option>
            <option value="offline">Offline</option>
          </select>
        </div>
        <div className="add_buttons">
          <button onClick={handleSubmit}>Add device</button>
          {message === '' ? '' : <p>{message}</p>}
        </div>
      </div>
    </section>
  );
}

export { AddDevice };
