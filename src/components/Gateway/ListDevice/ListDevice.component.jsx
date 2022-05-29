import { useGateway } from '../../../providers/Gateway';

import ItemDevice from '../ItemDevice/ItemDevice.component';
import './ListDevice.style.css';

function ListDevices() {
  const { state } = useGateway();

  return (
    <div className="list-device">
      <h4>Devices</h4>
      <div className="">
        {state.devices ? (
          <ul>
            {state.devices.map((device, index) => (
              <ItemDevice inList={true} key={index} device={device} />
            ))}
          </ul>
        ) : (
          <p>Device list is empty</p>
        )}
      </div>
    </div>
  );
}

export default ListDevices;
