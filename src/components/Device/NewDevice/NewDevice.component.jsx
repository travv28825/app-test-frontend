import { useState } from 'react';

import { useGateway } from '../../../providers/Gateway';
import { deviceService } from '../../../services';

import './NewDevice.style.css';

const DEFAULT_DEVICE_DATA = {
  uid: '',
  vendor: '',
  date: '',
  status: 'online',
};

function NewDevice() {
  const [deviceData, setDeviceData] = useState(DEFAULT_DEVICE_DATA);
  const { showMessage, showError, getData } = useGateway();

  function handleData(event) {
    const { name, value } = event.target;
    setDeviceData({ ...deviceData, [name]: value });
  }

  async function handleSubmit() {
    try {
      const response = await deviceService.add(deviceData);

      setDeviceData(DEFAULT_DEVICE_DATA);
      showMessage(response.message);
      getData();
    } catch (error) {
      showError(error.message);
    }
  }

  return (
    <section className="new-device">
      <div className="inputs-device">
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
      <div className="buttons-device">
        <button className="btn btn-update" onClick={handleSubmit}>
          Add device
        </button>
      </div>
    </section>
  );
}

export default NewDevice;
