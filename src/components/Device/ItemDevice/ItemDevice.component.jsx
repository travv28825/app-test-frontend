import { useGateway } from '../../../providers/Gateway/Gateway.provider';
import { deviceService } from '../../../services';

import { changeDateFormat } from '../../../utils/utils';
import Actions from '../../Actions';

function ItemDevice({ device, showUpdateView }) {
  const { showMessage, showError, getData } = useGateway();
  const dateWithFormat = changeDateFormat(device.created, 'dd-MM-yy');

  async function removeDevice(uid) {
    try {
      const response = await deviceService.remove(uid);
      showMessage(response.message);
      getData();
    } catch (error) {
      showError(error.message);
    }
  }

  return (
    <li className="item-device">
      <Actions
        actionDelete={() => removeDevice(device.uid)}
        actionUpdate={() => showUpdateView(device)}
      />
      <p>UID: {device.uid}</p>
      <p>Vendor: {device.vendor}</p>
      <p>Created: {dateWithFormat}</p>
      <p>
        Status{' '}
        {device.status === 'online' ? (
          <span style={{ margin: '0' }} className="online">
            Online
          </span>
        ) : (
          <span style={{ margin: '0' }} className="offline">
            Offline
          </span>
        )}
      </p>
    </li>
  );
}

export default ItemDevice;
