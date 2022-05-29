import { useEffect, useState } from 'react';

import { useGateway } from '../../../providers/Gateway';

import ItemDevice from '../ItemDevice';
import './UpdateGateway.style.css';

const DEFAULT_GATEWAY_DATA = { serial: '', human: '', ip: '', devices: [] };

function UpdateGateway() {
  const { state, editGateway } = useGateway();
  const { gatewayToUpdate, devicesToUpdating } = state;
  const [data, setData] = useState(DEFAULT_GATEWAY_DATA);

  useEffect(() => {
    const listDevicesToUpdate = [
      ...gatewayToUpdate?.devices,
      ...devicesToUpdating,
    ];
    const newData = {
      ...gatewayToUpdate,
      devices: listDevicesToUpdate,
    };

    if (listDevicesToUpdate) {
      setData(newData);
    } else {
      setData(DEFAULT_GATEWAY_DATA);
    }
  }, [devicesToUpdating]);

  function handleChange(event) {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  }

  return (
    <section className="update-gateway">
      <div className="update-form">
        <div className="update-form-field">
          <p>Serial:</p>
          <input
            placeholder="Serial number"
            name="serial"
            value={data?.serial}
            disabled={true}
            onChange={handleChange}
            type="number"
          />
        </div>
        <div className="update-form-field">
          <p>Human:</p>
          <input
            placeholder="Human readable name"
            name="human"
            value={data?.human}
            onChange={handleChange}
            type="text"
          />
        </div>
        <div className="update-form-field">
          <p>IP:</p>
          <input
            placeholder="IPv4"
            name="ip"
            value={data?.ip}
            onChange={handleChange}
            type="text"
          />
        </div>
      </div>
      <div className="update-device">
        {data?.devices?.length > 0 ? (
          <ul className="update-device-list">
            {data.devices.map((device, index) => (
              <ItemDevice inList={false} key={index} device={device} />
            ))}
          </ul>
        ) : (
          ''
        )}
      </div>
      <button
        onClick={() => editGateway(data.serial, data)}
        className="btn btn-update"
      >
        Update
      </button>
    </section>
  );
}

export default UpdateGateway;
