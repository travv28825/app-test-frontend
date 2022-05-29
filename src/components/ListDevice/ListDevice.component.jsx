import { useEffect } from 'react';
import { useGateway } from '../../providers/Gateway';

import './ListDevice.style.css';
import './ItemDevice.style.css';

function ListDevices({ componentToRender }) {
  const { getData } = useGateway();
  const { component: Component, isList, ...restPorps } = componentToRender;

  useEffect(() => {
    getData();
  }, []);

  const { state } = useGateway();

  return (
    <div className="list-device">
      <h4>Devices</h4>
      <div className="">
        {state.devices ? (
          <ul>
            {state.devices.map((device) => (
              <Component
                key={device.uid}
                device={device}
                inList={isList}
                {...restPorps}
              />
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
