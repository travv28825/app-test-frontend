import { useState } from 'react';

import { useGateway } from '../../../providers/Gateway';

import ItemDevice from '../ItemDevice';
import './NewGateway.style.css';

const DEFAULT_GATEWAY_DATA = { serial: '', human: '', ip: '', devices: [] };

function NewGateway() {
  const { state, addGateway } = useGateway();
  const [data, setData] = useState(DEFAULT_GATEWAY_DATA);

  function handleChange(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  async function handleSubmit() {
    const devicesList = state.devicesToAdding;
    const gateway = { ...data, devices: devicesList };

    addGateway(gateway);
    setData(DEFAULT_GATEWAY_DATA);
  }

  return (
    <div className="new-gateway">
      <div className="add-form">
        <div className="add-header">
          <h4>New Gateway</h4>
        </div>
        <div className="add-body">
          <div className="inputs-group">
            <input
              placeholder="Serial number"
              name="serial"
              min={0}
              max={Number.MAX_SAFE_INTEGER}
              value={data.serial}
              onChange={handleChange}
              type="number"
            />
            <input
              placeholder="Human readable name"
              name="human"
              value={data.human}
              onChange={handleChange}
              type="text"
            />
            <input
              placeholder="IPv4"
              name="ip"
              value={data.ip}
              onChange={handleChange}
              type="text"
            />
            <button className="btn btn-update" onClick={handleSubmit}>
              Add
            </button>
          </div>
          <div className="devices-group">
            <ul className="">
              {state.devicesToAdding.map((device, index) => (
                <ItemDevice inList={false} key={index} device={device} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewGateway;
