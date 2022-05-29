import { useGateway } from '../../../providers/Gateway';

import Actions from '../../Actions';
import './ItemGateway.style.css';

function ItemGateway({ gateway }) {
  const { removeGateway, changeUpdatingMode } = useGateway();

  return (
    <li className="item-gateway">
      <Actions
        actionDelete={() => removeGateway(gateway.serial)}
        actionUpdate={() => changeUpdatingMode(gateway)}
      />
      <p>Serial number: {gateway.serial}</p>
      <p>Human readable name: {gateway.human}</p>
      <p>IP: {gateway.ip}</p>
      {gateway.devices.length > 0 && <p>List devices:</p>}

      {gateway.devices.length > 0 ? (
        <ul className="item-gateway-devices">
          {gateway.devices.map((e, i) => (
            <li key={i}>
              <p>UID: {e.uid}</p>
              <p>vendor: {e.vendor}</p>
            </li>
          ))}
        </ul>
      ) : (
        ''
      )}
    </li>
  );
}

export default ItemGateway;
