import { useGateway } from '../../../providers/Gateway';
import * as utils from '../../../utils/utils';

function ItemDevice({ device, inList }) {
  const {
    state,
    prepareDeviceToAdd,
    removeDeviceInGateway,
    showError,
    addDevicesToUpdate,
  } = useGateway();

  const newFormatDate = utils.changeDateFormat(device.created, 'dd-MM-yyyy');

  function handleDevice() {
    if (!state.isUpdating) {
      if (state.devicesToAdding.length < 10) {
        prepareDeviceToAdd(device);
      } else {
        showError('An gateway only can have 10 devices!');
      }
    } else {
      addDevicesToUpdate(device);
    }
  }

  return (
    <li className="item-device">
      <p>
        <span>UID:</span>
        {device.uid}
      </p>
      <p>
        <span>Vendor:</span>
        {device.vendor}
      </p>
      <p>
        <span>Created:</span>
        {newFormatDate}
      </p>
      <p style={{ display: 'flex' }}>
        <span>Status:</span>
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
      <div className="actions-device">
        {inList ? (
          <button className="btn" onClick={handleDevice}>
            Add to gateway
          </button>
        ) : (
          <button
            className="btn btn-delete"
            onClick={() => removeDeviceInGateway(device)}
          >
            Remove
          </button>
        )}
      </div>
    </li>
  );
}

export default ItemDevice;
