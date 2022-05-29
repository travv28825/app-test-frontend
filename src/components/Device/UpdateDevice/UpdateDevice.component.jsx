import { useEffect, useState } from 'react';

import { useGateway } from '../../../providers/Gateway';
import { deviceService } from '../../../services';
import { changeDateFormat } from '../../../utils/utils';

const dateNow = changeDateFormat(new Date(), 'mm-dd-yy');
const DEFAULT_DEVICE_DATA = {
  uid: '',
  vendor: '',
  date: dateNow,
  status: 'online',
};

function UpdateDevice({ device, hideUpdateMode }) {
  const { showMessage, showError, getData } = useGateway();
  const [data, setData] = useState(DEFAULT_DEVICE_DATA);

  useEffect(() => {
    setData({
      ...device,
      created: changeDateFormat(device.created, 'yyyy-MM-dd'),
    });
  }, [device]);

  function handleChange(event) {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  }

  async function editGateway() {
    try {
      const response = await deviceService.update(data.uid, data);
      showMessage(response.message);
      getData();
      hideUpdateMode();
    } catch (error) {
      showError(error.message);
    }
  }

  return (
    <section className="new-section">
      <div className="inputs-device">
        <input
          placeholder="Serial number"
          name="uid"
          disabled={true}
          value={data.uid}
          onChange={handleChange}
          type="number"
        />
        <input
          placeholder="Human readable name"
          name="vendor"
          value={data.vendor}
          onChange={handleChange}
          type="text"
        />
        <input
          placeholder="IPv4"
          name="created"
          value={data.created}
          onChange={handleChange}
          type="date"
        />
        <select name="status" value={data.status} onChange={handleChange}>
          <option value="online">Online</option>
          <option value="offline">Offline</option>
        </select>
      </div>
      <div className="buttons-device">
        <button className="btn btn-update" onClick={editGateway}>
          Update Device
        </button>
      </div>
    </section>
  );
}

export default UpdateDevice;
